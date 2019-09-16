import React from 'react';
import { Modal as ModalB, Button, Form, Col, Row } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

import { variables } from '../../variables';

class Modal extends React.Component {
  state = {
    credential: "",
    redirect: false
  }
  
  changeCredential = (e) => {
    this.setState({ 
      ...this.state, 
      credential: e.target.value 
    });
  }

  auth = () => {
    this.setState({
      ...this.state,
      redirect: variables.credential === this.state.credential
    });
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      this.props.onHide();
      return <Redirect to="/admin-iaz" />;
    }
  }

  render() { 
    return (
      <ModalB
        {...this.props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        {this.renderRedirect()}
        
        <ModalB.Body>
          <Form>
            <div className="box-body">
              <Row>
                <Col>
                  <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Credencial</Form.Label>
                    <Form.Control 
                      placeholder="0000.0000.000-00" 
                      onChange={ this.changeCredential } />
                  </Form.Group>  
                </Col>
              </Row>
            </div>
          </Form>    
        </ModalB.Body>
        <ModalB.Footer>
          <Button variant="success" onClick={this.auth}>Enviar</Button>
          <Button variant="info" onClick={this.props.onHide}>Fechar</Button>
        </ModalB.Footer>
      </ModalB>
    );
  }
}

export default Modal;