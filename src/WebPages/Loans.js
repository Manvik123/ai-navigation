import React from "react"
import style from '../style.css'
import App from '../App.scss'
import Card2 from "../components/Card2"
import L1 from "../assets/L1.jpg"
import L2 from "../assets/L2.jpg"
import L3 from "../assets/L3.jpg"



function Loans(){
    return(
        <div>
            <div class="row">
                <Card2 imgsrc={L1} cardCaption="Home Loan" description="Your access to a privileged lifestyle.Invest with us."
                imgsrc2={L2} cardCaption1="Loan Against Property" description1="Whatever your need, our range of loans can help."
                imgsrc3={L3} cardCaption2="Personal Loan" description2="Let the experts help you manage your wealth" />

            </div>
           
        </div>
   )
}
export default Loans