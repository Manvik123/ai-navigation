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
import Customer from './WebPages/Customer'
import AdvantageBanking from  './WebPages/AdvantageBanking'
import Investment from './WebPages/Investment'
import Loans from './WebPages/Loans'
import RetialBanking from './WebPages/ReatilBanking'
import Transaction from './WebPages/Transaction'
import CurrentAccount from './WebPages/CurrentAccount';
import Modalex from './components/Modal'

function App() {
  return (
    <div>
          <Header />
          <Navbar />
          <Router>
          <Switch>
          <Route  path='/retailBanking/moneyTransfer/currentAccount' component={CurrentAccount} />
          <Route path='/modal' component={Modalex} />
          <Route  path='/retailBanking/moneyTransfer' component={Transaction} />
            <Route  path='/login/customer' component={Customer} />
            <Route eaxct path='/login' component={Login} />
            
            <Route path='/dashboard' component={Dashboard} />
            <Route  path='/privateBanking' component={PrivateBanking} />
            <Route  path='/advantageBanking' component={AdvantageBanking} />
            <Route  path='/investment' component={Investment} />
            <Route  path='/loans' component={Loans} />
            <Route  path='/retailBanking' component={RetialBanking} />
            <Route exact path='/' component={Home} />
          </Switch>
          </Router>
        </div>
  
  )
}

export default App;
