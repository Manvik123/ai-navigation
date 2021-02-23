import React from "react"
import style from "../style.css"
import 'bootstrap/dist/css/bootstrap.min.css'

function Login(){
    return(
        
            <div className="login-dark">
            <form method="post">
            <h2 className="sr-only">Login Form</h2>
            <div className="illustration"><i className="icon ion-ios-locked-outline"></i></div>
            <div className="form-group"><input className="form-control" type="email" name="email" placeholder="Email" /></div>
            <div className="form-group"><input className="form-control" type="password" name="password" placeholder="Password" /></div>
            <div className="form-group"><button className="btn btn-primary btn-block" type="submit">Log In</button></div>
            <a href="#" className="forgot">Forgot your email or password?</a>
            </form>
             

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.bundle.min.js"></script>
      
    </div>
    ) 
}  
export default Login 
