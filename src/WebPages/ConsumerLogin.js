import React from "react"
import style from '../style.css'
import App from '../App.scss'
import Card3 from "../components/Card3"
import CL1 from "../assets/CL1.jpg"
import CL2 from "../assets/CL2.jpg"
import CL3 from "../assets/CL3.jpg"
import CL4 from "../assets/CL4.jpg"
import CL5 from "../assets/CL5.jpg"
import CL6 from "../assets/CL6.jpg"


function ConsumerLogin(){
    return(
        <div>
            <Card3  cardCaption="Money Transfer" description="Transfer money seamlessly online."/>
            <br/>
            <Card3 cardCaption="View Balance" description="View account balance"/>
            <br/>
            <Card3 cardCaption="Investment Services" description="Let the experts help you manage your wealth"/>
            <br/>            
            <Card3 cardCaption="Domestic NRO Debit Card" description="Enjoy the convenience of cashless shopping."/>
            <br/>
            <Card3 cardCaption="SMS Services" description="Keep track of your banking account on the move."/>
            <br/>
            <Card3 cardCaption="Connect with us" description="A host of convenient banking channels"/>            
            <br/>
        </div>
   )
}
export default ConsumerLogin
