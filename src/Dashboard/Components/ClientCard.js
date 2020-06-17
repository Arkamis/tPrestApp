import React from "react";
import 'antd/dist/antd.css';
import '../Styles/Dashboard.css'
import { StarOutlined } from '@ant-design/icons'
import { Button, PageHeader, Descriptions, Checkbox, Col } from 'antd';
import Update from './UpdateDebt'

class ClientCard extends React.Component{

    render(){
        const { primerNombre, primerApellido, dateStart, email, phone } = this.props
        return(
            <div className = "light-grnd">
                <Checkbox className = "m-2">Seleccionar</Checkbox>
                <PageHeader
                className="site-page-header"
                title={primerNombre + primerApellido}
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
                        <Descriptions.Item label="Primer Nombre: "> {primerNombre} </Descriptions.Item>
                        <Descriptions.Item label="Primer Apellido: "> {primerApellido} </Descriptions.Item>
                        <Descriptions.Item label="Tiempo de creación: "> {dateStart} </Descriptions.Item>
                        <Descriptions.Item label="E-mail: "> {email} </Descriptions.Item>
                        <Descriptions.Item label="Phone: "> {phone} </Descriptions.Item>
                    </Descriptions>
                </PageHeader>
                <br/>
            </div>
        )
    }
}

export default ClientCard