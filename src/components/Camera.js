import React from 'react'
import Webcam from 'react-webcam'
import axios from 'axios'
import { BrowserRouter, Route, Switch, Redirect, useHistory } from "react-router-dom";
import history from './History'
import ModalF from '../components/Modal'

class Camera extends React.Component {

    
     constructor(props){
         super(props);
         {this.state = {webcamEnabled: true};
        }
     }
    state={
         imageData: null,
         image_name: "",
         saveImage: false
        
    }
    

    setRef = (webcam) => {
        this.webcam = webcam;
    }
     capture = () => {
         const imageSrc =  this.webcam.getScreenshot();
         this.setState({
             imageData : imageSrc
         })
     };
     onClickSave=(e)=> {
        const imageSrc =  this.webcam.getScreenshot();
        this.setState({
            imageData : imageSrc
        })
        //this.setState({webcamEnabled: false});
         //e.persist();
         this.setState((previousState) => {
             return{
                 saveImage : !previousState.saveImage
             }
         });
         console.log(this.state.imageData)
         axios
         .post('https://hack-neurons.et.r.appspot.com/read-gesture',this.state.imageData)
        .then(
            response => {
                console.log(response)
                console.log(this.props)
               // history.push('/retailBanking/fundTransfer/confirmation')
               // window.location.reload()
               
            
        })
         .catch(error=> {
             console.log(error)
         });
         
     }

     handleChange = (e) => {
         e.persist();
         this.setState({
             [e.target.name]: e.target.value
         })
     }
      
     handleSaveSubmit = (e) => {
         e.preventDefault();
         let imageObject = {
             image_name: this.state.image_name,
             job_id: this.props.job.id,
             image_data : this.state.imageData

         }
         this.props.saveJobImage(imageObject)
     }
     
      render() {
          const videoConstraints= {
              width:1280,
              height: 720,
              facingMode: 'user',
          };

    return(
      <div className="row"> 
          
          <div className="col-md-12">
          {this.state.webcamEnabled ? (
          <Webcam
          audio={false}
          height={350}
          width={350}
         ref={this.setRef}
          screenshotFormat="image/jpeg"
          
          videoConstraints={videoConstraints}
          />):null }

          <div style={{alignContent: 'flex-start'}}>
            <button class="btn btn-info float-center" onClick={()=>this.onClickSave()}>Capture Gesture</button>  
            
          </div>
          </div>
          
      </div>
    );
  }
}   
export default Camera;

//<p><img src={this.state.imageData} alt="" /></p>
//https://jsonplaceholder.typicode.com/posts
//<span><button onClick={()=>this.onClickSave()}>Save</button></span>
//https://hack-neurons.et.r.appspot.com/read-gesture
