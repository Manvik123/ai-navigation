import React,{useEffect} from 'react'
import { ButtonGroup ,Button, DropdownButton} from "react-bootstrap"
import style from './style.css'
import HomeLogo from './assets/home.jpg'
import { Dropdown } from "react-bootstrap"
import DropdownItem from "react-bootstrap/esm/DropdownItem"
import Recommender from './components/Recommender'
import ModalF from './components/Modal'
function Home(){
    const [modalOpen, setModalOpen] = React.useState(false);

    useEffect(() => {
        setModalOpen(!modalOpen)

     }, []);
    return(
        
        <div className="card-imghome">
        <div className="row ">
            <div className="col-md-9 "></div>
            <div className="col-md-3">
            < br />
            <br />
            <button type="button" class="btn btn-info float-center">Voice Navigation</button>
            <Recommender option1="1. Retail Bnaking" option2="2. Private Banking" option3="3. Loans" />
            </div>
            </div>
            <ModalF setModalOpen={setModalOpen} modalOpen={modalOpen}/>
    </div>
    ) 

    
}  
export default Home

