import React from 'react';
import Login from './Login/Login';
import SignUp from './Login/SignUp';
import Dashboard from './Dashboard/Dashboard';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App(){
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/Login" component={Login} />
            <Route path="/Registro" component={SignUp} />
            <Route path="/Dashboard" component={Dashboard}/>
          </Switch>
        </div>
      </Router>
    );
}

export default App;
