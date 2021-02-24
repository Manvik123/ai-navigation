import React from "react"
import style from '../style.css'
import App from '../App.scss'
import Card2 from "../components/Card2"
import L1 from "../assets/L1.jpg"
import L2 from "../assets/L2.jpg"
import L3 from "../assets/L3.jpg"
import L4 from "../assets/L4.jpg"
import L5 from "../assets/L5.jpg"
import L6 from "../assets/L6.jpg"
import L7 from "../assets/L7.jpg"
import L8 from "../assets/L8.jpg"


function Loans(){
    return(
        <div>
            <div class="row">
                <Card2 imgsrc={L1} cardCaption="Home Loan" description="Your access to a privileged lifestyle."
                imgsrc2={L2} cardCaption1="Loan Against Property" description1="Whatever your need, our range of loans can help."
                imgsrc3={L3} cardCaption2="Personal Loan" description2="Let the experts help you manage your wealth" />

            </div>
            <br />
            <br />
            <div class="row">
                <Card2 imgsrc={L4} cardCaption="Business Installment Loan" description="Fuel your business ambitions with our collateral free loans."
                imgsrc2={L5} cardCaption1="Overdraft Against Fixed Deposit" description1="An overdraft facility against your fixed deposits."
                imgsrc3={L6} cardCaption2="Eve's Business Loan" description2="Exclusively designed for women entrepreneurs."/>   
         
            </div>
            
        </div>
   )
}
export default Loans
