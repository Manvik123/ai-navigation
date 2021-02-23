import React from "react"
import style from "../style.css"
import logo from "../assets/DB.jpg"
import{Nav,Navbar,NavDropdown,Button,Form,FormControl} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
function Header()
{
    return(
        <div className="row">
        <div className="col-md-12">
        <Navbar className = "nav" variant="dark" expand="lg" sticky="top">
        <Navbar.Brand href="/">Deutsche Bank <img className="img" src={logo}></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/dashboard">Contact Us</Nav.Link>
                <Nav.Link href="/login">Customer Login</Nav.Link>
                
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
             <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
             <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
             <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
             <NavDropdown.Divider />
             <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
         </NavDropdown>
         </Nav>
         <Form inline>
         <FormControl type="text" placeholder="Search" className="mr-sm-2" />
         <Button variant="outline-success">Search</Button>
         </Form>
     </Navbar.Collapse>
     </Navbar>   
     </div>
     </div>      
    )
}

export default Header