import React from 'react'
import Card3 from '../components/Card3'
import{Nav, Form , Button} from 'react-bootstrap'
import Recommender from '../components/Recommender'
import Camera from '../components/Camera'
import Webcam from 'react-webcam' 

function FundTransfer () {
   

    return(
        < div >
        <br />
        <div className="row justify-content-center" >
            <div className="col-md-2"></div>
        <div className="col-md-5">
        <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>From Account</Form.Label>
    <Form.Control type="text" placeholder="1234 1234 0012 3456" />
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Transfer to</Form.Label>
    <Form.Control type="text" placeholder="7890 7890 0012 3456" />

  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Amount:</Form.Label>
    <Form.Control type="text" placeholder="1000.00" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Pay Now" />
    <Form.Check type="checkbox" label="Pay Later" />
    <Form.Text className="text-muted">
      Capture gesture to proceed
    </Form.Text>
  </Form.Group>
</Form>

</div>
<div className="col-md-1"></div>
<div className="col-md-3">
<Camera />
</div>

    </div>
     
    </div>

    )
}


export default FundTransfer
//<Button variant="primary" type="submit">
//Submit
//</Button> 