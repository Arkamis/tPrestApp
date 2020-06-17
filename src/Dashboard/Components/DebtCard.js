import React from "react";
import 'antd/dist/antd.css';
import '../Styles/Dashboard.css'
import { StarOutlined } from '@ant-design/icons'
import { Row, Button, PageHeader, Descriptions, Statistic, Checkbox, Col  } from 'antd';
import Update from './UpdateDebt'

class Debtcard extends React.Component{

    state = {
        debtCreator: "Mike",
        title: "Deuda de cliente",
        descripcion: "...",
        cliente: "ID_Cliente",
        dateStart: "10/10/20",
        dueDate: "20/10/20",
        tags: ["#dude","#Yolo"],
        frecPagos: 0,
        totaldue: 0,
        estado: [
            "Pendiente",
            "Completado",
            "Activo",
            "Atrasado"
        ]
    }

    render(){
        return(
            <div className = "light-grnd">
                <Checkbox className = "m-2">Seleccionar</Checkbox>
                <PageHeader
                className="site-page-header"
                title= {this.state.title}
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
                        <Descriptions.Item style = {{color: "white"}} label="Creado Por: ">Lili Qu</Descriptions.Item>
                        <Descriptions.Item label="Cliente: "> {this.state.userName} </Descriptions.Item>
                        <Descriptions.Item label="Tiempo de creación: "> {this.state.dateStart} </Descriptions.Item>
                        <Descriptions.Item label="Vencimiento: "> {this.state.dueDate} </Descriptions.Item>
                        <Descriptions.Item label="Descripción: "> {this.state.descripcion} </Descriptions.Item>
                        <Descriptions.Item label = "Frecuencia de pago: "> {this.state.frecPagos} </Descriptions.Item>
                        <Descriptions.Item label = "Etiquetas: "> {this.state.tags} </Descriptions.Item>
                    </Descriptions>
                    <Row>
                        <Statistic title="Estado" value= {this.state.estado[0]} />
                        <Statistic
                        title="Deuda inicial"
                        prefix="$"
                        value={this.state.totaldue}
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