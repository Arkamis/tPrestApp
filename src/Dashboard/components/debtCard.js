import React from "react";
import 'antd/dist/antd.css';
import '../styles/Dashboard.css'

import { Row, Button, PageHeader, Descriptions, Statistic } from 'antd';

class Debtcard extends React.Component{
    render(){
        return(
            <div className = "light-grnd">
                <PageHeader
                className="site-page-header"
                title="Deuda #1"
                subTitle="Subtitulo"
                extra={[
                    <Button key="3">Modificar</Button>,
                    <Button key="2">Seleccionar</Button>,
                    <Button key="1" type="primary">
                    Eliminar
                    </Button>,
                ]}
                >
                    <Descriptions size="small" column={3}>
                        <Descriptions.Item style = {{color: "white"}} label="Created">Lili Qu</Descriptions.Item>
                        <Descriptions.Item label="Association">
                        <a>421421</a>
                        </Descriptions.Item>
                        <Descriptions.Item label="Creation Time">2017-01-10</Descriptions.Item>
                        <Descriptions.Item label="Effective Time">2017-10-10</Descriptions.Item>
                        <Descriptions.Item label="Remarks">
                        Gonghu Road, Xihu District, Hangzhou, Zhejiang, China
                        </Descriptions.Item>
                    </Descriptions>
                    <Row>
                        <Statistic title="Status" value="Pending" />
                        <Statistic
                        title="Price"
                        prefix="$"
                        value={568.08}
                        style={{
                            margin: '0 32px',
                        }}
                        />
                        <Statistic title="Balance" prefix="$" value={3345.08} />
                    </Row>
                </PageHeader>
                <br />
            </div>
        )
    }
}

export default Debtcard