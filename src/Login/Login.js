import React from "react";
import { Button, FormGroup, FormControl, FormLabel, Card, FormText } from "react-bootstrap";
import "./Login.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import axios from 'axios'


class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: "",
      isLoading: false
    };

    this.validateForm = this.validateForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setEmail = this.setEmail.bind(this);
    this.setPassword = this.setPassword.bind(this);
    //this.handleRegister = this.handleRegister.bind(this);
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  async handleSubmit(event) {
    event.preventDefault();
    const { email, password } = this.state;
    await this.setState({
      isLoading:true
    });
    console.log(this.state.isLoading, "asdada", email, password);
    const config = {
      data: {
        email,
        password
      },
      conf: {
        headers: {'Content-Type':'application/json'},
      }

    }
    axios.post("https://staging-presta-api.herokuapp.com/api/users/login", config.data, config.conf)
      .then( result => {
        console.log(result.request);
        if(result.status !== 200) {
          console.log("Error");
          return;
        }
        console.log("Entraste:", result.data);
        this.setState({ isLoading:false })
      })
      .catch( err => {
        debugger;
        console.log("ocurrio algo:",  err.response.request._response)
      });


  }

  setEmail(e){
    e.preventDefault();
    this.setState({
      email: e.target.value,
    })
  }

  setPassword(e){
    e.preventDefault();
    this.setState({
      password: e.target.value,
    })
  }

  render(){
    const { isLoading } = this.state;
    return (
        <div className="Login">
          <Card border="success" className="cardSize">
            <Card.Img variant="top" src="./logo2.PNG" roundedCircle/>
            <Card body>
              <Card.Title>Login</Card.Title>
                <form onSubmit={this.handleSubmit}>
                  <FormGroup controlId="email" >
                    <FormLabel>Correo Electrónico</FormLabel>
                    <FormControl
                      autoFocus
                      type="email"
                      value={this.email}
                      onChange={ e => {this.setEmail(e)}}
                      placeholder="Ingresar correo"
                    />
                    <FormText className="text-muted">ej. name@gmail.com</FormText>
                  </FormGroup>
                  <FormGroup controlId="password">
                    <FormLabel>Contraseña</FormLabel>
                    <FormControl
                      value={this.password}
                      onChange={e => (this.setPassword(e))}
                      type="password"
                      placeholder="Ingresar contraseña"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Button block variant="success" type="submit" disable={isLoading}>
                      Ingresar
                    </Button>
                    <Link to="/Registro" >
                      <Button block variant="success" type="button">
                        Registro
                      </Button>
                    </Link>
                  </FormGroup>
                </form>
            </Card>
          </Card>
        </div>
    )
  };
};

export default Login;