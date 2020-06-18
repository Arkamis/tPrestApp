import React from "react";
import 'antd/dist/antd.css';
import '../Styles/Dashboard.css'
import { Row, Col, Layout } from 'antd';


const { Footer } = Layout;

function FooterD(){
    return(
        <Row className = "center">
            <Col>
                <Footer className = "black-ground white-text">PrestApp ©2020 Derechos reservados</Footer>
            </Col>
        </Row>
    )
}

export default FooterD