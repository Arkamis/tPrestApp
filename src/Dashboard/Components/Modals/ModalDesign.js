import React from 'react';
import {Modal} from 'antd';
import {ModalClient, ModalPago, ModalDeuda} from './Forms';

class ModalDesign extends React.Component{
    render(){
        let visible = this.props.visible;
        let changeState = this.props.handleState;
        let name = this.props.name;
        const title = "Agregar " + name;
        let formDesign;

        if(name === "Cliente"){
            formDesign = <ModalClient />
        }
        else if(name === "Deuda"){
            formDesign = <ModalDeuda />
        }
        else if(name === "Pago"){
            formDesign = <ModalPago />
        }

        return(
            <Modal
                title={title}
                visible={visible}
                onOk={() => {
                    console.log('ok')
                  }}
                onCancel={changeState}
                okText="Agregar"
                cancelText="Cancelar"
            >
            {formDesign}
        </Modal>
        )
    }
}

export default ModalDesign;