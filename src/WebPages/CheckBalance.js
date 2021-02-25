import React from 'react'
import Card3 from '../components/Card3'
import{Nav} from 'react-bootstrap'
import Recommender from '../components/Recommender'
import Speech from '../components/Speech'
function CheckBalance(){
    return(
        < div >
            <br />
            <br />
            <div className="row ">
                <div className="col-md-1"></div>
            <div className="col-md-7">

            <h4 >Choose an account !</h4>
            <br />
            <Nav.Link href="/retailBanking/moneyTransfer/currentAccount">
            <Card3  cardCaption="Current Account"/>
            </Nav.Link>
            <br/>
            <Nav.Link href="/retailBanking/moneyTransfer/currentAccount">
            <Card3 cardCaption="Savings Account"/>
            </Nav.Link>
            <br/>
            </div>
            <div className="col-md-1 ">
            <Recommender option1="1. Savings Account" option2="2. Current Account" />
            </div>
            <div className="col-md-2"></div>
            </div>
        
       </div>
    )

}


export default CheckBalance