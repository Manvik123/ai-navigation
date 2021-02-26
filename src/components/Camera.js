import React from 'react'
import Webcam from 'react-webcam'
import axios from 'axios'

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
        this.setState({webcamEnabled: false});
         //e.persist();
         this.setState((previousState) => {
             return{
                 saveImage : !previousState.saveImage
             }
         });
         console.log(this.state.imageData)
         axios
         .post('https://jsonplaceholder.typicode.com/posts',this.state.imageData)
        .then(response => {
            console.log(response)
        })
         .catch(error=> {
             console.log(error)
         })
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
      <div>
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
            <button style={{border:'0px solid #ffffff',textShadow:'0px -1px 1px #222222',boxShadow:'2px 2px 5px #000000',borderRadius:'10px 10px 10px 10px', 
        backgroundColor:"gray[100]", color:"black",paddingLeft:'15px',paddingRight:'15px'}}  onClick={()=>this.onClickSave()}>Capture photo</button>  
          </div>
      </div>
    );
  }
}   
export default Camera;

//<p><img src={this.state.imageData} alt="" /></p>
//<span><button onClick={()=>this.onClickSave()}>Save</button></span>

