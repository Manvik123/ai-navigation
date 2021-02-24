import React from "react"
import style from '../style.css'
import App from '../App.scss'
import Card2 from "../components/Card2"
import PB1 from "../assets/PB1.jpg"
import PB2 from "../assets/PB2.jpg"
import PB3 from "../assets/PB3.jpg"
import PB4 from "../assets/PB4.jpg"
import PB5 from "../assets/PB5.jpg"
import PB6 from "../assets/PB6.jpg"

function PrivateBanking(){
    return(
        <div>
            <div class="row">
                <Card2 imgsrc={PB4} cardCaption="Business Banking" description="Finance your growth with our business banking solutions"
                 
                imgsrc2={PB2} cardCaption1="Lending" description1="Whatever your need, our range of loans can help."
                imgsrc3={PB3} cardCaption2="Investment Services" description2="Let the experts help you manage your wealth" />

            </div>
            <br />
            <div class="row">
                <Card2 imgsrc={PB1} cardCaption="Bank Priveleges" description="Your access to a privileged lifestyle."
                imgsrc2={PB5} cardCaption1="Premium Cards" description1="Exclusivity has a new benchmark."
                imgsrc3={PB6} cardCaption2="Connect With Us" description2="A host of convenient, round-the-clock banking services"/>   
         
            </div>
        
        </div>
   )
}
export default PrivateBanking
