
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
    
      const pages = ["home","login","dashboard","aboutUs","private Banking","advantage Banking","loans","investment","one","two","three","2","3"];
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
        2 : props.op2,
        3 : props.op3
      }
    
      // if (!SpeechRecognition.browserSupportSpeechRecognition()) {
      //   return null
      // }
    
      let redirect = "";
    
      if (redirectUrl) {
        if (pages.includes(redirectUrl)) {
          //redirect = <Redirect to={urls[redirectUrl]}/>;
          history.replace(urls[redirectUrl])
          window.location.reload()
        } else {
          window.alert("Could not recognize");
        }
      }
    return(
    
        <div >
        <p style={{textAlign:'center', fontStyle:'normal', fontSize:'20px'}} id="transcipt"> {transcript}</p>
        <button class="btn btn-info float-center" onClick={SpeechRecognition.startListening}> Speak to Navigate</button>
        <BrowserRouter>
        {redirect}
        </BrowserRouter>
        </div>
        
    )
}
export default Speech