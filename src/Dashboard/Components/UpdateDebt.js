import React from 'react';
import { Modal, Button } from 'antd';

class UpdateDebt extends React.Component{

    state = {
        loading: false,
        visible: false,
    };
    
    showModal = () => {
        this.setState({
        visible: true,
        });
    };
    
    handleOk = () => {
        this.setState({ loading: true });
        setTimeout(() => {
        this.setState({ loading: false, visible: false });
        }, 3000);
    };
    
    handleCancel = () => {
        this.setState({ visible: false });
    };

    render(){
        const { visible, loading } = this.state;

        return(
            <div>
                <Button className = "mb" block = {true} ghost onClick={this.showModal}>
                Modificar
                </Button>
                <Modal
                    visible={visible}
                    title="Modificar Deuda"
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={[
                        <Button key="back" onClick={this.handleCancel}>
                        Return
                        </Button>,
                        <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
                        Submit
                        </Button>,
                    ]}
                    >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
            </div>
        )
    }
}

export default UpdateDebt