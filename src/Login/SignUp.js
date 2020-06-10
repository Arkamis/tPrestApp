import React from "react";
import { Button, FormGroup, FormControl, FormLabel, Card, FormText } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

class SignUp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          name: "",
          email: "",
          password: "",
          cel: "",
        }

        this.setName = this.setName.bind(this);
        this.setEmail = this.setEmail.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.setCell = this.setCell.bind(this);
        this.validateForm = this.validateForm.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0 
            && this.state.name.length > 0 && this.state.cell.length > 0;
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    setName = (e) =>{
        e.preventDefault();
        this.setState({
            name: e.target.value
        })
    }

    setEmail = (e) =>{
        e.preventDefault();
        this.setState({
            email: e.target.value
        })
    }

    setPassword = (e) =>{
        e.preventDefault();
        this.setState({
            password: e.target.value
        })
    }

    setCell = (e) =>{
        e.preventDefault();
        this.setState({
            cell: e.target.value
        })
    }

    render(){
        return(
            <div className="Registro">
                <Card border="success" className="cardSize">
                    <Card.Img variant="top" src="./logo2.PNG" roundedCircle/>
                    <Card body>
                        <Card.Title>Registro</Card.Title>
                        <form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <FormLabel>Nombre</FormLabel>
                                <FormControl
                                autoFocus
                                type="text"
                                value={this.name}
                                onChange={ e => {this.setName(e)}}
                                placeholder="Ingrese nombre completo"
                                />
                            </FormGroup>
                            <FormGroup>
                                <FormLabel>Teléfono</FormLabel>
                                <FormControl
                                value={this.cell}
                                onChange={e => (this.setCell(e))}
                                type="text"
                                placeholder="Ingrese teléfono"
                                />
                            </FormGroup>
                            <FormGroup controlId="email" >
                                <FormLabel>Correo Electrónico</FormLabel>
                                <FormControl
                                type="email"
                                value={this.email}
                                onChange={ e => {this.setEmail(e)}}
                                placeholder="Ingrese correo"
                                />
                                <FormText className="text-muted">ej. name@gmail.com</FormText>
                            </FormGroup>
                            <FormGroup controlId="password">
                                <FormLabel>Contraseña</FormLabel>
                                <FormControl
                                value={this.password}
                                onChange={e => (this.setPassword(e))}
                                type="password"
                                placeholder="Ingrese contraseña"
                                />
                                <FormText className="text-muted">min. 8 carácteres.</FormText>
                            </FormGroup>
                            <FormGroup>
                                <Button block variant="success" type="button">
                                    Registrar
                                </Button>
                            </FormGroup>
                            <Link to="/" >
                                <Button block variant="success" type="button">
                                Regresar
                                </Button>
                            </Link>
                            <Link to="/Dashboard" >
                                <Button block variant="success" type="button">
                                    Dashboard
                                </Button>
                            </Link>
                        </form>
                    </Card>
                </Card>
            </div>
        )
    }
}

export default SignUp;