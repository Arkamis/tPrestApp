import React from "react";
import 'antd/dist/antd.css';
import '../styles/Dashboard.css'
import { Row, Col, Container, Navbar, Nav, CardDeck, Card, Button, Form, FormControl } from "react-bootstrap"
import { Link } from 'react-router-dom';

import { Layout, Menu, Breadcrumb } from 'antd';
import { SettingOutlined, SwapOutlined, PaperClipOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Content, Footer, Sider } = Layout;

class DashClients extends React.Component {
    render(){
        return(
            <Container fluid>
            <Row className = "side-nav">
                <Col>
                    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                        <Navbar.Brand> <Link to = '/DashbMain'>PrestApp</Link> </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className = "ml-auto" >
                                <Nav.Link eventKey = {1}> Notificaciones </Nav.Link>
                                <Nav.Link eventKey = {2}> Usuario </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Col>
            </Row>
            <Row>
                <Col sm = {2}>
                    <Sider className="site-layout-background" width={200}>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100%' }}
                        >
                            <SubMenu key="sub1" icon={<PaperClipOutlined />} title="Administración">
                            <Menu.Item key="1">
                                <Link to="/DashbDebts" >
                                    Deudas
                                </Link>
                                </Menu.Item>
                                <Menu.Item key="2">
                                    <Link to = "/DashPayments">
                                        Pagos
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="3">
                                    <Link to = "/DashClients">
                                        Clientes
                                    </Link>
                                </Menu.Item>
                                </SubMenu>
                            <SubMenu key="sub2" icon={<SwapOutlined />} title="Finanzas">
                                <Menu.Item key="4">Proyecciones</Menu.Item>
                                <Menu.Item key="5">Estadisticas</Menu.Item>
                                <Menu.Item key="6">Acreedores</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub3" icon={<SettingOutlined />} title="Opciones">
                                <Menu.Item key="7">Ayuda</Menu.Item>
                                <Menu.Item key="8">Reportar Error</Menu.Item>
                                <Menu.Item key="9">Configuración</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                </Col>
                <Col sm = {10}>
                    <Layout>
                        <Content style={{ padding: '0 50px' }}>
                            <Breadcrumb style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item>Home</Breadcrumb.Item>
                                <Breadcrumb.Item>List</Breadcrumb.Item>
                                <Breadcrumb.Item>App</Breadcrumb.Item>
                            </Breadcrumb>
                            <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
                                <Content style={{ padding: '0 24px', minHeight: 280 }}>
                                    <Row>
                                        <Col sm = {12}>
                                            <h2>Registro de clientes</h2>
                                        </Col>
                                        <Col sm = {12}>
                                        <Navbar bg="light" variant="light">
                                                <Nav className="mr-auto">
                                                    <Nav.Link >Filtro</Nav.Link>
                                                    <Nav.Link >Vista</Nav.Link>
                                                    <Nav.Link >Orden</Nav.Link>
                                                </Nav>
                                                <Form inline>
                                                    <FormControl type="text" placeholder="Busque deuda" className="mr-sm-2" />
                                                    <Button variant="outline-success">Buscar</Button>
                                                </Form>
                                            </Navbar>
                                        </Col>
                                        <CardDeck>
                                            <Col sm = {12} className = "card-space">
                                                <Card>
                                                    <Card.Header as="h5">Deuda #1</Card.Header>
                                                    <Card.Body>
                                                        <Card.Title>Special title treatment</Card.Title>
                                                        <Card.Text>
                                                        With supporting text below as a natural lead-in to additional content.
                                                        </Card.Text>
                                                        <Card.Text>
                                                            <p>Status: Activo</p>
                                                        </Card.Text>
                                                        <Button variant="success">Agregar Favorito</Button>
                                                        <Button variant="outline-primary" className = "ml-4" >Modificar</Button>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col sm = {12} className = "card-space">
                                                <Card>
                                                    <Card.Header as="h5">Deuda #1</Card.Header>
                                                    <Card.Body>
                                                        <Card.Title>Special title treatment</Card.Title>
                                                        <Card.Text>
                                                        With supporting text below as a natural lead-in to additional content.
                                                        </Card.Text>
                                                        <Card.Text>
                                                            <p>Status: Activo</p>
                                                        </Card.Text>
                                                        <Button variant="success">Agregar Favorito</Button>
                                                        <Button variant="outline-primary" className = "ml-4" >Modificar</Button>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col sm = {12} className = "card-space">
                                                <Card>
                                                    <Card.Header as="h5">Deuda #1</Card.Header>
                                                    <Card.Body>
                                                        <Card.Title>Special title treatment</Card.Title>
                                                        <Card.Text>
                                                        With supporting text below as a natural lead-in to additional content.
                                                        </Card.Text>
                                                        <Card.Text>
                                                            <p>Status: Activo</p>
                                                        </Card.Text>
                                                        <Button variant="success">Agregar Favorito</Button>
                                                        <Button variant="outline-primary" className = "ml-4" >Modificar</Button>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        </CardDeck>
                                    </Row>
                                </Content>
                            </Layout>
                        </Content>
                    </Layout>
                </Col>
                <Col>
                    <Footer className = "center">PrestApp ©2020 Derechos reservados</Footer>
                </Col>
            </Row>
            </Container>
        )
    }
}

export default DashClients