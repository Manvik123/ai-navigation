import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
//import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from "./WebPages/Login"
import Dashboard from './Dashboard'
import Home from "./Home"
import Navbar from './components/SecondNavbar'
import PrivateBanking from './WebPages/PrivateBanking'
import AdvantageBanking from './WebPages/AdvantageBanking';
import Loans from "./WebPages/Loans";
import Investment from './WebPages/Investment';
import AboutUs from './WebPages/AboutUs';
import React, { useState } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import SpeechRecognition, {
  useSpeechRecognition,
  } from "react-speech-recognition";

function App() {
  const commands = [
    {
      command: ["Go to *", "Open *"],
      callback: (redirectPage) => setRedirectUrl(redirectPage),
    },
  ];

  const { transcript } = useSpeechRecognition({ commands });
  const [redirectUrl, setRedirectUrl] = useState("");

  const pages = ["home","login","dashboard","aboutUs","private Banking","advantage Banking","loans","investment"];
  const urls = {
    home: "/",
    login: "/login",
    dashboard: "/dashboard",
    aboutUs: "/aboutUs",
    advantageBanking: "/advantageBanking",
    privateBanking: "/privateBanking",
    loans: "/loans",
    investment: "/investment"
  }

  // if (!SpeechRecognition.browserSupportSpeechRecognition()) {
  //   return null
  // }

  let redirect = "";

  if (redirectUrl) {
    if (pages.includes(redirectUrl)) {
      redirect = <Redirect to={urls[redirectUrl]}/>;
    } else {
      Redirect = <p>Could not find page: {redirectUrl}</p>;
    }
  }

  return (
    <div>
          <Header />
          <Navbar />

          <br/>
          <div style={{textAlign:'center', backgroundColor:"blueGray"}}>
          <p style={{textAlign:'center', fontStyle:'normal', fontSize:'20px'}} id="transcipt">Transcript: {transcript}</p>
          <br/>
          <button style={{border:'0px solid #ffffff',textShadow:'0px -1px 1px #222222',boxShadow:'2px 2px 5px #000000',borderRadius:'10px 10px 10px 10px', 
          backgroundColor:"gray[100]", color:"black",paddingLeft:'15px',paddingRight:'15px'}} onClick={SpeechRecognition.startListening}>    Start    </button>
          <br/>
          </div>
          <br/>

          <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/aboutUs' component={AboutUs} />
            <Route path='/privateBanking' component={PrivateBanking} />
            <Route path='/advantageBanking' component={AdvantageBanking} />
            <Route path='/loans' component={Loans} />
            <Route path='/investment' component={Investment} /> 
          </Switch>
          {redirect}
          </BrowserRouter>
          <br/>
          <br/>
          <br/>
          


        </div>
  
  )
}

export default App;
