import React from "react";
import 'antd/dist/antd.css';
import '../Styles/Dashboard.css'
import { StarOutlined } from '@ant-design/icons'
import { Row, Col, Button, PageHeader, Descriptions, Statistic, Checkbox  } from 'antd';
import Update from './UpdateDebt'

class PaymentCard extends React.Component{

    state = {
        noPago: "1",
        cliente: "ID_Cliente",
        deuda: "ID_Deuda",
        dateStart: "10/10/20",
        dueDate: "20/10/20",
        totalToPay: 500,
        totaldue: 3000,
        estado: [
            "Pendiente",
            "Completado",
            "Activo",
            "Atrasado"
        ],
    }

    render(){
        return(
            <div className = "light-grnd">
                <Checkbox className = "ml-3 mt-3">Seleccionar</Checkbox>
                <PageHeader
                className="site-page-header"
                title={"Pago "+this.state.noPago}
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
                        <Descriptions.Item label="Cliente: "> {this.state.cliente} </Descriptions.Item>
                        <Descriptions.Item label="Deuda: "> {this.state.deuda} </Descriptions.Item>
                        <Descriptions.Item label="Tiempo de creación: "> {this.state.dateStart} </Descriptions.Item>
                    </Descriptions>
                    <Row>
                        <Statistic title="Estado" value = {this.state.estado[0]} />
                        <Statistic
                        title="Cantidad de pago: "
                        prefix="$"
                        value={this.state.totalToPay}
                        style={{
                            margin: '0 32px',
                        }}
                        />
                        <Statistic title="Balance" prefix="$" value={this.state.totaldue} />
                    </Row>
                </PageHeader>
                <br />
            </div>
        )
    }
}

export default PaymentCard