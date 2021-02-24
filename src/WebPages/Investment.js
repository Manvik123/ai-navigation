import React from "react"
import style from '../style.css'
import App from '../App.scss'
import Card2 from "../components/Card2"
import I1 from "../assets/I1.jpg"
import I2 from "../assets/I2.jpg"
import I3 from "../assets/I3.jpg"
import I4 from "../assets/I4.jpg"
import I5 from "../assets/I5.jpg"
import I6 from "../assets/I6.jpg"


function Investment(){
    return(
        <div>
            <div class="row">
                <Card2 imgsrc={I1} cardCaption="Mutual Funds" description="Build a diversified portfolio that offers liquidity and transparency."
                imgsrc2={I2} cardCaption1="db Wealth Pro" description1="Manage your investment and finances as per your convenience."
                imgsrc3={I3} cardCaption2="db TradePro" description2="A unique platform for online trading in shares in association with Sharekhan Ltd." />

            </div>
            <br />
            <br />
            <div class="row">
                <Card2 imgsrc={I4} cardCaption="Portfolio Management Services" description="Let the experts manage your wealth."
                imgsrc2={I5} cardCaption1="Bonds" description1="Referral tie-ups to provide you with the best bonds in the market."
                imgsrc3={I6} cardCaption2="Demat Account" description2="Demat Account offers you easy way to keep track of your shares and investments."/>   
         
            </div>
            
        
        </div>
   )
}
export default Investment
