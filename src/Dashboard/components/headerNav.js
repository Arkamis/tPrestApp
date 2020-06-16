import React from "react";
import 'antd/dist/antd.css';
import '../styles/Dashboard.css'
import { Link } from 'react-router-dom';
import { Layout, Menu, Row, Col, Button, Dropdown } from 'antd';
import { PlusOutlined , NotificationOutlined, UserOutlined } from '@ant-design/icons';

const { Header } = Layout;
  
const menu = (
    <Menu>
        <Menu.Item key="1">
            Perfil
        </Menu.Item>
        <Menu.Item key="2">
            Configuración
        </Menu.Item>
        <Menu.Item key="3">
            Feedback
        </Menu.Item>
    </Menu>
);

class HeaderNav extends React.Component{
    render(){
        return(
            <Row>
                <Col sm = {24}>
                    <Header className="header">
                        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                            <Menu.Item ><Link to = '/DashbMain'>PrestApp</Link></Menu.Item>
                            <Menu.Item >
                                <div>
                                    <Dropdown theme = "dark" overlay={menu}>
                                        <Button className = "white-text d-Button">
                                            <PlusOutlined/>Agregar Transacción
                                        </Button>
                                    </Dropdown>
                                </div> 
                            </Menu.Item>
                            <Menu.Item >
                                <div>
                                    <Dropdown theme = "dark" overlay={menu}>
                                        <Button className = "white-text d-Button">
                                            <NotificationOutlined/>Notificaciones
                                        </Button>
                                    </Dropdown>
                                </div>
                            </Menu.Item>
                            <Menu.Item >
                                <div>
                                    <Dropdown theme = "dark" overlay={menu}>
                                        <Button className = "white-text d-Button">
                                            <UserOutlined/>Usuario
                                        </Button>
                                    </Dropdown>
                                </div>
                            </Menu.Item>
                        </Menu>
                    </Header>
                </Col>
            </Row>
        )
    }
}

export default HeaderNav