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
        <div className="row  justify-content-center">
            <Recommender option1="1. Retail Bnaking" option2="2. Private Banking" option3="3. Loans" />
            </div>
            <ModalF setModalOpen={setModalOpen} modalOpen={modalOpen}/>
    </div>
    ) 

    
}  
export default Home

