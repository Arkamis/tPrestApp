import React from "react";
import 'antd/dist/antd.css';
import '../Styles/Dashboard.css'
import { Layout, Row, Col } from 'antd';
import FooterD from "./FooterDash";
import SideMenu from './Menu'
import BreadCrumbs from './Breadcrumb'
import ClientCard from './ClientCard'
import Pager from './Pager'
import Search from './Searching'

const { Content } = Layout;

class SiderNav extends React.Component {
    render(){
        return(
            <Layout style={{ minHeight: '100vh' }}>
                <SideMenu/>
                <Layout style={{ padding: '0 24px 24px', background: "black" }}>
                    <BreadCrumbs/>
                    <Content className="site-layout-background" style={{ padding: 24, margin: 0, minHeight: 280, }}>
                        <Row>
                            <Col sm = {24}>
                                <h3 className = "fieldArnd center text-white">Historial de Clientes</h3>
                            </Col>
                            <Search/>
                            <ClientCard primerNombre = ""  primerApellido = "" dateStart = "" email = "" phone = "" />
                            <hr/>
                            <ClientCard primerNombre = ""  primerApellido = "" dateStart = "" email = "" phone = "" />
                            <hr/>
                            <ClientCard primerNombre = ""  primerApellido = "" dateStart = "" email = "" phone = "" />
                        </Row>
                        <Pager/>
                        <FooterD/>
                    </Content>
                </Layout>
            </Layout>
        )    
    }
    
}

export default SiderNav