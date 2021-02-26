import React from 'react'
import Card3 from '../components/Card3'
import{Nav, Form, Button} from 'react-bootstrap'
import Recommender from '../components/Recommender'
import Camera from '../components/Camera'
import Webcam from 'react-webcam'
function SubmitDetails () {
   

    return(
        < div >
        <br />
        <div className="row justify-content-center" >
            <div className="col-md-2"></div>
        <div className="col-md-5">
        <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Account No.</Form.Label>
    <Form.Control type="text" placeholder="1234 1234 0012 3456" />
  </Form.Group>
  
</Form>
<Nav.Link href="/retailBanking/CheckBalance/Balance"><Button variant="primary"class="btn btn-info float-center" type="submit">
   Proceed
</Button>
</Nav.Link>
</div>
<div className="col-md-1"></div>
<div className="col-md-3">

</div>

    </div>
     
    </div>


    )
}


export default SubmitDetails