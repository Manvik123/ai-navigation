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
            <div className="col-md-9 ">
            <div class="row">
                <Card4 imgsrc={Home1} 
                 />
            </div>
            </div>
            <div className="col-md-3" style={{textAlign:'center'}}>
            <br />
            <button type="button" class="btn btn-info float-center" onClick={() => speak({text: "option 1 Retail Banking.  option 2 Private Banking.  option 3 Loans."})} >Voice Navigation</button>
            <Speech op1="/retailBanking" op2="/privateBanking" op3="/loans" />
            <Recommender option1="1. Retail Banking" option2="2. Private Banking" option3="3. Loans" />
            <br />
            </div>
            </div>
            <ModalF setModalOpen={setModalOpen} modalOpen={modalOpen}/>
            
    </div>
    ) 

    
}  
export default Home

