import React from 'react'
import Card3 from '../components/Card3'
import{Nav} from 'react-bootstrap'
import Recommender from '../components/Recommender'
function CurrentAccount(){
    return(
        < div >
            <br />
            <br />
            <h4 >Select Beneficiary</h4>
            <br />
            <Card3  cardCaption="Option 1"/>
            <br/>
            <Card3 cardCaption="Option 2"/>
            <br/>
            <Card3 cardCaption="Option 3"/>
            <br/>
           
        
       </div>
    )

}


export default CurrentAccount