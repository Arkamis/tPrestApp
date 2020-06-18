import React from 'react';
import { Modal, Button } from 'antd';

class AddClient extends React.Component{

    constructor(props){
        super(props)
        this.state = { visible: false }
        this.showModal = this.showModal.bind(this);
    }
    
    showModal = () => {
        this.setState( {visible : true} );
        console.log(this.state.visible)
    }

    handleOk = (e) => {
        this.setState({
            visible: false,
        });
        console.log(this.state.visible)
    };

    handleCancel = (e) => {
        this.setState({
            visible: false,
        });
    };

    render(){

        let modal;
        if (this.state.visible) {
        modal = 
            <Modal
            visible={this.state.visible}
            title="Title"
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            footer={[
              <Button key="back" onClick={this.handleCancel}>
                Return
              </Button>,
              <Button key="submit" type="primary" onClick={this.handleOk}>
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
        };

        return(
            <div>
                <Button ghost block = {true} onClick={this.showModal}>
                    Cliente
                </Button>
                {modal}
            </div>
        )
    }
}

export default AddClient