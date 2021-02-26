import React from 'react'
import Card3 from '../components/Card3'
import{Nav} from 'react-bootstrap'
import Recommender from '../components/Recommender'
import camera from '../components/Camera'
import Webcam from 'react-webcam'
import Confirm from '../assets/confirmation.jpg'
function Confirmation () {
   

    return(
        < div >
        <div >
        <br />
        <br />
        <div className="row justify-content-center" >
         <img src={Confirm}></img>
         <br />
         <div>
         <h2>Transaction Completed!</h2>
         <br />
         <Nav.Link href="/"><button type="button" class="btn btn-info float-center" > Go To Home</button></Nav.Link>
         </div>
         
        </div>
    
    </div>
     
    </div>

    )
}


export default Confirmation