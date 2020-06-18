import React from 'react';
import { Modal, Button } from 'antd';


class Add extends React.Component{
  constructor(props){
    super(props)
    this.state = { visible: false }
    this.showModal = this.showModal.bind(this);
  }
  
  showModal = () => {
    this.setState( {visible : true} );
  }

  handleOk = (e) => {
    this.setState( {visible: false} );
  };

  handleCancel = (e) => {
    this.setState( {visible: false} );
  };

  render() {
    let modal;
    if (this.state.visible === true && this.props.name === "Cliente") {
      modal = <Modal
          title="Agregar Cliente"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>;
    }
    else if(this.state.visible === true && this.props.name === "Deuda"){
      modal = <Modal
          title="Agregar Deuda"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>;
    }
    else if(this.state.visible === true && this.props.name === "Pago"){
      modal = <Modal
          title="Agregar Pago"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>;
    };

    return (
        <div>
            <Button type="text" onClick={this.showModal}>
            Agregar {this.props.name}
            </Button>
            {modal}
        </div>
    );
  }
}

export default Add;