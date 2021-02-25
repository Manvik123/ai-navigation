
import React, { useState } from "react";
import { BrowserRouter, Route, Switch, Redirect, useHistory } from "react-router-dom";
import SpeechRecognition, {
  useSpeechRecognition,
  } from "react-speech-recognition";


function Speech(props){
    const history = useHistory();
    const commands = [
        {
          command: ["Go to *", "Option *"],
          callback: (redirectPage) => setRedirectUrl(redirectPage),
        },
      ];
    
      const { transcript } = useSpeechRecognition({ commands });
      const [redirectUrl, setRedirectUrl] = useState("");
    
      const pages = ["home","login","dashboard","aboutUs","private Banking","advantage Banking","loans","investment","one","two","three"];
      const urls = {
        // home: "/",
        // login: "/login",
        // dashboard: "/dashboard",
        // aboutUs: "/aboutUs",
        // advantageBanking: "/advantageBanking",
        // privateBanking: "/privateBanking",
        loans: "/loans",
        investment: "/investment",
        one: props.op1,
        two: props.op2,
        three: props.op3
      }
    
      // if (!SpeechRecognition.browserSupportSpeechRecognition()) {
      //   return null
      // }
    
      let redirect = "";
    
      if (redirectUrl) {
        if (pages.includes(redirectUrl)) {
          //redirect = <Redirect to={urls[redirectUrl]}/>;
          history.replace(urls[redirectUrl])
        } else {
          window.alert("Could not recognize");
        }
      }
    return(
        
        <div style={{textAlign:'center', backgroundColor:"blueGray"}}>
        <p style={{textAlign:'center', fontStyle:'normal', fontSize:'20px'}} id="transcipt">Transcript: {transcript}</p>
        <br/>
        <button style={{border:'0px solid #ffffff',textShadow:'0px -1px 1px #222222',boxShadow:'2px 2px 5px #000000',borderRadius:'10px 10px 10px 10px', 
        backgroundColor:"gray[100]", color:"black",paddingLeft:'15px',paddingRight:'15px'}} onClick={SpeechRecognition.startListening}>    Start    </button>
        <br/>
        <BrowserRouter>
        {redirect}
        </BrowserRouter>
        </div>
    )
}
export default Speech