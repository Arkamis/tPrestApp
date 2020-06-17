import React from "react";
import 'antd/dist/antd.css';
import '../Styles/Dashboard.css'
import { StarOutlined } from '@ant-design/icons'
import { Row, Col, Button, PageHeader, Descriptions, Statistic, Checkbox  } from 'antd';
import Update from './UpdateDebt'

class PaymentCard extends React.Component{

    render(){

        const { noPago, cliente, deuda, dateStart, totalToPay, totaldue, estado } = this.props

        return(
            <div className = "light-grnd">
                <Checkbox className = "ml-3 mt-3">Seleccionar</Checkbox>
                <PageHeader
                className="site-page-header"
                title={"Pago " + noPago}
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
                        <Descriptions.Item label="Cliente: "> {cliente} </Descriptions.Item>
                        <Descriptions.Item label="Deuda: "> {deuda} </Descriptions.Item>
                        <Descriptions.Item label="Tiempo de creación: "> {dateStart} </Descriptions.Item>
                    </Descriptions>
                    <Row>
                        <Statistic title="Estado" value = {estado} />
                        <Statistic
                        title="Cantidad de pago: "
                        prefix="$"
                        value={totalToPay}
                        style={{
                            margin: '0 32px',
                        }}
                        />
                        <Statistic title="Balance" prefix="$" value={totaldue} />
                    </Row>
                </PageHeader>
                <br />
            </div>
        )
    }
}

export default PaymentCard