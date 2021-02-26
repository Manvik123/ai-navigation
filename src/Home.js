import React,{useEffect} from 'react'
import { ButtonGroup ,Button, DropdownButton} from "react-bootstrap"
import style from './style.css'
import HomeLogo from './assets/home.jpg'
import { Dropdown } from "react-bootstrap"
import DropdownItem from "react-bootstrap/esm/DropdownItem"
import Recommender from './components/Recommender'
import ModalF from './components/Modal'
import Home1 from "./assets/Home1.jpg";
import Card4 from "./components/Card4";
import { useSpeechSynthesis } from 'react-speech-kit';
import Speech from './components/Speech'
import Camera from './components/Camera'


function Home(){
    const [modalOpen, setModalOpen] = React.useState(false);

    useEffect(() => {
        setModalOpen(!modalOpen)

     }, []);

    // const value = {"option 1 Retail Banking option 2 Private Banking option 3 Loans"};
    // const [value, setValue] = React.useState('');
    const { speak } = useSpeechSynthesis();
    return(
        
        <div className="card-imghome">
        <div className="row ">
            <div className="col-md-7 ">
            <div class="row">
                <Card4 imgsrc={Home1} 
                 />
             </div >   
           
            </div>
            <div className = "col-md-2">

            </div>
            <div className="col-md-3" style={{textAlign:'center'}}>
            <br />
            
            <button type="button" class="btn btn-info float-center" onClick={() => speak({text: "Please select an option. option 1 Check Balance.  option 2 Fund transfer.  option 3 Pay Bills . option 4 create an investment."})} >Voice Navigation</button>
            <Speech op1="/retailBanking/CheckBalance" op2="/retailBanking/fundTransfer" op3="/loans" />
            <Recommender option1="1. Check Balance" option2="2. Fund transfer" option3="3. Pay Bills" option4= "4. Create an investment" />
            
            </div>
           
            
            </div>
                
    </div>
    ) 

    
}  
export default Home
//<ModalF setModalOpen={setModalOpen} modalOpen={modalOpen}/>
