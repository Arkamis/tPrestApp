import React from 'react';
import Login from './Login/Login';
import SignUp from './Login/SignUp';
import DashMain from './Dashboard/components/DashbMain'
import DashDebts from './Dashboard/components/DashbDebts'
import DashClients from './Dashboard/components/DashbClients'
import DashPays from './Dashboard/components/DashbPayment'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App(){
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/Login" component={Login} />
            <Route path="/Registro" component={SignUp} />
            <Route path='/DashbMain' component={DashMain} />
            <Route path="/DashbDebts" component={DashDebts} />
            <Route path = '/DashPayments' component = {DashPays} />
            <Route path = '/DashClients' component = {DashClients} />
          </Switch>
        </div>
      </Router>
    );
}

export default App;
