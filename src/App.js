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

function App() {
  return (
    <div>
          <Header />
          <Navbar />
          <Home />
          <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/privateBanking' component={PrivateBanking} />
          </Switch>
          </Router>
        </div>
  
  )
}

export default App;
