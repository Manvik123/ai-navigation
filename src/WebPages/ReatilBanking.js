import React from 'react'
import Card3 from '../components/Card3'
import{Nav} from 'react-bootstrap'
import Recommender from '../components/Recommender'
function ReatailBanking(){
    return(
        <div>
            <br />
            <br />
            <div className="row ">
                <div className="col-md-1"></div>
            <div className="col-md-7">
                <br />
            <Nav.Link href="/retailBanking/moneyTransfer">
            <Card3  cardCaption="Money Transfer"/> 
            </Nav.Link>
            
            <br/>
            <Nav.Link href="/retailBanking/moneyTransfer">
            <Card3 cardCaption="View Balance"/>
            </Nav.Link>
            <br/>
            <Nav.Link href="/retailBanking/moneyTransfer">
            <Card3 cardCaption="Investment Services" />
            </Nav.Link>
            <br/>  
            <Nav.Link href="/retailBanking/moneyTransfer">        
            <Card3 cardCaption="Domestic NRO Debit Card"/>
            </Nav.Link>
            <br/>
            <Nav.Link href="/retailBanking/moneyTransfer">
            <Card3 cardCaption="SMS Services"/>
            </Nav.Link>
            <br/>
            <Nav.Link href="/retailBanking/moneyTransfer">
            <Card3 cardCaption="Connect with us" />  
            </Nav.Link>          
            <br/>
            </div>
            
            <div className="col-md-1 ">
            <Recommender option1="1. Money Transfer" option2="2. Check Balance" option3="3. SMS Service"/>
            </div>
            <div className="col-md-2"></div>
            </div>
        
       </div>
    )

}

export default ReatailBanking