import React from 'react'
import 'antd/dist/antd.css';
import '../Styles/Dashboard.css'
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { SettingOutlined, SwapOutlined, PaperClipOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Sider } = Layout;

class SideMenu extends React.Component{
    state = {
        collapsed: false,
    };

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };
    render(){
        return(
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
        )
    }
}

export default SideMenu