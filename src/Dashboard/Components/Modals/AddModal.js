import React from 'react';
import { Button } from 'antd';
import ModalDesign from './ModalDesign';


class Add extends React.Component{
  constructor(props){
    super(props)
    this.state = { 
      visible: false,
    }
  }
  
  showModal = () => {
    this.setState( {visible : true} );
  }

  handleState = (e) => {
    this.setState({
        visible: false
    })
  };

  render() {
    let modal;
    if (this.state.visible === true && this.props.name === "Cliente") {
      modal = <ModalDesign name={"Cliente"} visible={this.state.visible} handleState={this.handleState} handleOk={this.handleOk}/>;
    }
    else if(this.state.visible === true && this.props.name === "Pago"){
      modal = <ModalDesign name={"Pago"} visible={this.state.visible} handleState={this.handleState} handleOk={this.handleOk}/>;
    }
    else if(this.state.visible === true && this.props.name === "Deuda"){
      modal = <ModalDesign name={"Deuda"} visible={this.state.visible} handleState={this.handleState} handleOk={this.handleOk}/>;
    };

    return (
        <div>
            <Button type="link" onClick={this.showModal}>
              Agregar {this.props.name}
            </Button>
            {modal}
        </div>
    );
  }
}

export default Add;