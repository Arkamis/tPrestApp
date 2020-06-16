import React from 'react';
import { Input, Row, Col, Button } from 'antd';
import { FilterOutlined, SortAscendingOutlined, AlignCenterOutlined } from '@ant-design/icons'

const { Search } = Input;

class Searcher extends React.Component {

    render(){
        return(
            <Row>
                <Col >
                    <Search className = "mb-5 mr-3" placeholder="Buscar" onSearch={value => console.log(value)} enterButton />
                </Col>
                <Col className = "mx-3">
                    <Button ghost><FilterOutlined/>Filtrar</Button>
                </Col>
                <Col className = "mx-3">
                    <Button ghost><AlignCenterOutlined/>Vista</Button>
                </Col>
                <Col className = "mx-3">
                    <Button ghost><SortAscendingOutlined/>Orden</Button>
                </Col>
            </Row>
        )
    }
}

export default Searcher