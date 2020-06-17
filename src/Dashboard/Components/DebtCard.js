import React from "react";
import 'antd/dist/antd.css';
import '../Styles/Dashboard.css'
import { StarOutlined } from '@ant-design/icons'
import { Row, Button, PageHeader, Descriptions, Statistic, Checkbox, Col  } from 'antd';
import Update from './UpdateDebt'

class Debtcard extends React.Component{

    render(){

        const { debtCreator, title, descripcion, cliente, dateStart, dueDate, tags, frecPagos, totaldue, estado } = this.props

        return(
            <div className = "light-grnd">
                <Checkbox className = "m-2">Seleccionar</Checkbox>
                <PageHeader
                className="site-page-header"
                title= {title}
                extra={[
                    <Col>
                        <Update/>,
                        <Button key="1" type="primary" className = "mt-2" block = {true}>
                        Favorito <StarOutlined />
                        </Button>
                    </Col>
                ]}
                >
                    <Descriptions size="small" column={3}>
                        <Descriptions.Item style = {{color: "white"}} label="Creado Por: "> {debtCreator} </Descriptions.Item>
                        <Descriptions.Item label="Cliente: "> {cliente} </Descriptions.Item>
                        <Descriptions.Item label="Tiempo de creación: "> {dateStart} </Descriptions.Item>
                        <Descriptions.Item label="Vencimiento: "> {dueDate} </Descriptions.Item>
                        <Descriptions.Item label="Descripción: "> {descripcion} </Descriptions.Item>
                        <Descriptions.Item label = "Frecuencia de pago: "> {frecPagos} </Descriptions.Item>
                        <Descriptions.Item label = "Etiquetas: "> {tags} </Descriptions.Item>
                    </Descriptions>
                    <Row>
                        <Statistic title="Estado" value= {estado} />
                        <Statistic
                        title="Deuda inicial"
                        prefix="$"
                        value={totaldue}
                        style={{
                            margin: '0 32px',
                        }}
                        />
                    </Row>
                </PageHeader>
                <br />
            </div>
        )
    }
}

export default Debtcard