import React from "react";
import 'antd/dist/antd.css';
import '../styles/Dashboard.css'
import { Link } from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Row } from 'antd';
import { SettingOutlined, SwapOutlined, PaperClipOutlined } from '@ant-design/icons';
import FooterD from "./footerDash";
import DebtCard from './debtCard'

const { SubMenu } = Menu;
const { Sider, Content } = Layout;

class SiderNav extends React.Component {
    
    state = {
        collapsed: false,
    };

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };
    render(){
        return(
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse} width={200} className="site-layout-background">
                    <Menu
                    theme = "dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{ height: '100%', borderRight: 0 }}
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
                <Layout style={{ padding: '0 24px 24px', background: "black" }}>
                    <Breadcrumb style={{ margin: '16px 0', color: "white" }}>
                        <Breadcrumb.Item >Home</Breadcrumb.Item>
                        <Breadcrumb.Item >List</Breadcrumb.Item>
                        <Breadcrumb.Item >App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content
                    className="site-layout-background"
                    style={{
                        padding: 24,
                        margin: 0,
                        minHeight: 280,
                    }}
                    >
                        <Row>
                            <DebtCard/>
                            <hr/>
                            <DebtCard/>
                            <hr/>
                            <DebtCard/>
                        </Row>
                        <FooterD/>
                    </Content>
                </Layout>
            </Layout>
        )    
    }
    
}

export default SiderNav