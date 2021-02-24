import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from "./WebPages/Login"
import Dashboard from './Dashboard'
import Home from "./Home"
import Navbar from './components/SecondNavbar'
import PrivateBanking from './WebPages/PrivateBanking'
import AdvantageBanking from './WebPages/AdvantageBanking';
import Loans from "./WebPages/Loans";
import Investment from './WebPages/Investment';
import AboutUs from './WebPages/AboutUs';

function App() {
  return (
    <div>
          <Header />
          <Navbar />
          <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/aboutUs' component={AboutUs} />
            <Route path='/privateBanking' component={PrivateBanking} />
            <Route path='/advantageBanking' component={AdvantageBanking} />
            <Route path='/loans' component={Loans} />
            <Route path='/investment' component={Investment} />
            
            
          </Switch>
          </Router>
        </div>
  
  )
}

export default App;
