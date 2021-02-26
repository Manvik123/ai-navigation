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
import Customer from './WebPages/Customer'
import AdvantageBanking from  './WebPages/AdvantageBanking'
import Investment from './WebPages/Investment'
import Loans from './WebPages/Loans'
import RetialBanking from './WebPages/ReatilBanking'
import Transaction from './WebPages/Transaction'
import SubmitDetails from './WebPages/SubmitDetails';
import Modalex from './components/Modal'
import CheckBalance from './WebPages/CheckBalance'
import React, { useState } from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import history from './components/History';
import FundTransfer from './WebPages/FundTransfer'
import Confirmation from './WebPages/Confirmation'
import Balance from './WebPages/Balance'
import SpeechRecognition, {
  useSpeechRecognition,
  } from "react-speech-recognition";


function App() {

 

  return (
    <div>
          <Header />
          <Navbar />
          <br/>
          <br/>
          <Router  history={history}>
          <Switch>
          <Route  path='/retailBanking/CheckBalance/Balance' component={Balance} />
          <Route  path='/retailBanking/moneyTransfer/savingsAccount' component={SubmitDetails} />
            <Route  path='/retailBanking/moneyTransfer/currentAccount' component={SubmitDetails} />
            <Route  path='/retailBanking/fundTransfer/confirmation' component={Confirmation} />
            <Route path='/modal' component={Modalex} />
            <Route  path='/retailBanking/CheckBalance' component={SubmitDetails} />
            <Route  path='/retailBanking/fundTransfer' component={FundTransfer} />
            <Route  path='/retailBanking/moneyTransfer' component={Transaction} />
            <Route  path='/login/customer' component={Customer} />
            <Route eaxct path='/login' component={Login} />
            <Route path='/dashboard' component={Dashboard} />
            <Route  path='/privateBanking' component={PrivateBanking} />
            <Route  path='/advantageBanking' component={AdvantageBanking} />
            <Route  path='/investment' component={Investment} />
            <Route  path='/loans' component={Loans} />
            <Route  path='/retailBanking' component={RetialBanking} />
            
            <Route exact path='/' component={Home} />
          </Switch>
          
          </Router>

          
        </div>
  
  )
}

export default App;
