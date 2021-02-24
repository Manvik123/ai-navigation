import React from "react"
import style from '../style.css'
import App from '../App.scss'
import Card2 from "../components/Card2"
import I1 from "../assets/I1.jpg"
import I2 from "../assets/I2.jpg"
import I3 from "../assets/I3.jpg"


function Investment(){
    return(
        <div>
            <div class="row">
                <Card2 imgsrc={I1} cardCaption="Mutual Funds" description="Build a diversified portfolio that offers liquidity and transparency."
                imgsrc2={I2} cardCaption1="db Wealth Pro" description1="Manage your investment and finances as per your convenience."
                imgsrc3={I3} cardCaption2="db TradePro" description2="A unique platform for online trading in shares ." />

            </div>
           
            
        
        </div>
   )
}
export default Investment