import React from "react"
import style from '../style.css'
import App from '../App.scss'
import Card2 from "../components/Card2"

import AB1 from "../assets/AB1.jpg"
import AB2 from "../assets/AB2.jpg"
import AB3 from "../assets/AB3.jpg"
import AB4 from "../assets/AB4.jpg"
import AB5 from "../assets/AB5.jpg"
import AB6 from "../assets/AB6.jpg"



function AdvantageBanking(){
    return(
        <div>

            <div class="row">
                <Card2 imgsrc={AB1} cardCaption="Resident Fixed Deposit" description="Get better returns on your deposit. Invest in Deutsche Bank Fixed Deposit."
                imgsrc2={AB2} cardCaption1="NRI Fixed Deposit" description1="Enjoy attractive returns with maximum liquidity with NRE or NRO Fixed Deposits."
                imgsrc3={AB3} cardCaption2="Senior Citizen Fixed Deposit" description2="Live carefree with special interest rate on selective tenures." />

            </div>
            <br />
            <br />
            <div class="row">
                <Card2 imgsrc={AB4} cardCaption="Tax Saver Fixed Deposit" description="Invest in 5 year Tax Saver Fixed Deposit to earn higher interest and also save tax."
                imgsrc2={AB5} cardCaption1="Recurring Fixed Deposit" description1="Instill a discipline in investing."
                imgsrc3={AB6} cardCaption2="Advantage Savings Account" description2="Enjoy the benefits of Advantage Banking."
                />   
         
            </div>
            
        
        </div>
   )
}
export default AdvantageBanking
