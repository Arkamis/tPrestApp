import React from "react";
import { Form, Input, Button, Checkbox, Row, Col, Divider } from 'antd';
import { MailOutlined, LockOutlined, EyeTwoTone, EyeInvisibleOutlined, LoginOutlined, setTwoToneColor } from '@ant-design/icons';
import { green } from "@ant-design/colors"
import "./Login.css";
import { Link } from 'react-router-dom';
import axios from 'axios'

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: "",
      isLoading: false,
      requestError: null
    };
    setTwoToneColor("#389e0d")
    this.validateForm = this.validateForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlerChange = this.handlerChange.bind(this)
    this.dispatch = this.dispatch.bind(this);
    //this.handleRegister = this.handleRegister.bind(this);
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  async dispatch(error){
    console.log(error)
    await this.setState({
      requestError: error,
      isLoading: false
    });
    console.log(this.state.requestError);
  }

  async handleSubmit(event) {
    const { email, password } = this.state;
    await this.setState({
      isLoading:true
    });
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
        this.setState({ isLoading:false })
        debugger;
      })
      .catch( err => {
        this.dispatch(err.response);
        console.log("ocurrio algo:",  err.response)
      });


  }
  handlerChange(event){
    this.setState({
      [event.target.name]: event.target.value
    });
  }


  finishFail(errorInfo){
    console.log(errorInfo)
  }

  render(){
    const styles = {
      buttonPrim: {
        backgroundColor: green[7],
        borderColor: green[7]
      },
      iconColor:{
        color: "#389e0d"
      }
    }
    const { isLoading, requestError } = this.state;
  
    const someProps = {
      validateStatus: (requestError)? requestError.data.status : "",
      help: (requestError)? requestError.data.error : "",
      hasFeedback: true
    }
    return (
      <div className="Login">
        <Row
          align="middle"
          gutter={[12,2]}
          justify="start"
          className= "border-green"
        >
          <Col order={1} span={24} >
            <img alt="Prestapp Logo" src="/logo2.PNG" className="imgSize" />
          </Col>
          <Col order={2} span={24}>
            <Divider orientation="center" style={{top:'0'}}></Divider>
          </Col>
          <Col order={3} span={24} style={{padding: '1.25rem'}}>
            <h3>Login</h3>
            <Form
              name="login"
              size="large"
              layout="vertical"
              initialValues={{ remember: true }}
              onFinish={this.handleSubmit}
              onFinishFailed={this.finishFail}
            >
              <Form.Item
                label="Correo electronico"
                rules={[{ required: true, message: 'Porfavor ingresa tu correo!' }]}
                {...(requestError)? someProps : ''}
              >
                
                <Input 
                  prefix={<MailOutlined style={styles.iconColor}/>} 
                  placeholder="Username"
                  name="email"
                  type="email"
                  onChange={this.handlerChange}
                />
              </Form.Item>
              <Form.Item
                label="Contrasena"
                rules={[{ required: true, message: 'Porfavor ingresa tu Contrasena!' }]}
              >
                <Input.Password
                  prefix={<LockOutlined style={styles.iconColor} />}
                  placeholder="Password"
                  name="password"
                  onChange={this.handlerChange}
                  iconRender={visible => (visible ? <EyeTwoTone style={styles.iconColor}/> : <EyeInvisibleOutlined />)}
                />
              </Form.Item>
              <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <a className="login-form-forgot" href="/register">
                  Forgot password
                </a>
              </Form.Item>
              <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button" loading={isLoading} block style={styles.buttonPrim}>
              Ingresar
            </Button>
            <Divider orientation={"center"}>
              O tambien puedes ingresar con:
            </Divider>
             <p>¿Aún no tienes cuenta?,  
              <a href="/register"> registrate Gratis!</a>
             </p>
          </Form.Item>
            </Form>
          </Col>
        </Row>
      </div>
    )
  };
};

export default Login;