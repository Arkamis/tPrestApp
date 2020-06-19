import React from 'react';
import {Modal,Button} from 'antd';
import {ModalClient, ModalPago, ModalDeuda} from './Forms';

class ModalDesign extends React.Component{
    render(){
        let visible = this.props.visible;
        let changeState = this.props.handleState;
        let handleOk = this.props.handleOk;
        let name = this.props.name;
        const title = "Agregar " + name;
        let form;

        if(name === "Cliente"){
            form = <ModalClient />
        }
        else if(name === "Deuda"){
            form = <ModalDeuda />
        }
        else if(name === "Pago"){
            form = <ModalPago />
        }

        return(
            <Modal
                title={title}
                visible={visible}
                onOk={handleOk}
                onCancel={changeState}
                footer={[
                    <Button key="submit" type="primary" onClick={handleOk} >
                        Agregar
                    </Button>,
                    <Button key="back" type="primary" onClick={changeState}>
                        Regresar
                    </Button>
                ]}
            >
            {form}
        </Modal>
        )
    }
}

export default ModalDesign;