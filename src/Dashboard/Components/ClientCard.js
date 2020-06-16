import React from "react";
import 'antd/dist/antd.css';
import '../Styles/Dashboard.css'
import { StarOutlined } from '@ant-design/icons'
import { Button, PageHeader, Descriptions, Checkbox, Col } from 'antd';
import Update from './UpdateDebt'

class ClientCard extends React.Component{

    state = {
        primerNombre: "Roberto",
        primerApellido: "Velasco",
        deuda: "ID_Deuda",
        dateStart: "10/10/20",
        email: "gogog@gmail.com",
        phone: "312-125-1444",
    }

    render(){
        return(
            <div className = "light-grnd">
                <Checkbox className = "m-2">Seleccionar</Checkbox>
                <PageHeader
                className="site-page-header"
                title="Cliente"
                extra={[
                    <Col>
                        <Update/>,
                        <Button key="1" type="primary" className = "mt-2" block = {true}>
                        Favorito <StarOutlined />
                        </Button>,
                    </Col>
                ]}
                >
                    <Descriptions size="small" column={3}>
                        <Descriptions.Item label="Primer Nombre: "> {this.state.primerNombre} </Descriptions.Item>
                        <Descriptions.Item label="Primer Apellido: "> {this.state.primerApellido} </Descriptions.Item>
                        <Descriptions.Item label="Tiempo de creación: "> {this.state.dateStart} </Descriptions.Item>
                        <Descriptions.Item label="E-mail: "> {this.state.email} </Descriptions.Item>
                        <Descriptions.Item label="Phone: "> {this.state.phone} </Descriptions.Item>
                    </Descriptions>
                </PageHeader>
                <br/>
            </div>
        )
    }
}

export default ClientCard