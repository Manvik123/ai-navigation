import React from 'react'
import{Nav,Navbar,NavDropdown,Button,Form,FormControl} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import style from '../style.css'
function SecondNavbar()
{
    return(
        <div className="row">
        <div className="col-md-12">
        <Nav className="navbar navbar-expand-sm py-0 navbar-light bg-light "> 
        <div className="collapse navbar-collapse" 
            id="navbarNavAltMarkup"> 
           
                    
             <ul class="navbar-nav align-items-center ">
                <li >
                
                    <Nav.Link href="/aboutUs">About Us </Nav.Link>
                </li> 
                
               
                <li >
                
                    <Nav.Link href="/privateBanking">Private Banking </Nav.Link>
                </li> 
                
                <li >
                
                    <Nav.Link href="/advantageBanking">Advantage Banking </Nav.Link>
                </li> 

                <li >
                
                    <Nav.Link href="/loans">Loans </Nav.Link>
                </li> 

                <li >
                
                    <Nav.Link href="/investment">Investment </Nav.Link>
                </li> 
               
                <li className="nav-item nav-link" 
                    href="#">Mutual Funds
                </li> 
               
            </ul> 
           
        </div> 
    </Nav> 
    </div>
    </div>
    )
}
export default SecondNavbar