import React from 'react';
import { Modal, Button } from 'antd';


class UpdateDebt extends React.Component{
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

  render() {
    let modal;
    if (this.state.visible) {
      modal = <Modal
          title="Basic Modal"
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
        <Button type="primary" onClick={this.showModal}>
          Open Modal
        </Button>
        {modal}
      </div>
    );
  }
}

export default UpdateDebt;