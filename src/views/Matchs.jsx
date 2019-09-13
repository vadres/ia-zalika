import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

import { getTeams } from '../services/team'; 

class Matchs extends React.Component {
  constructor(props) {
    super(props);
    getTeams().then(teams => console.log(teams));
  }
  

  state = { 
    teams: []
  };

  render() { 
    const options = this.state.teams.sort((a,b) => a.nome.localeCompare(b.nome)).map(el => (
      <option key={el.sigla} value={el.sigla}>{el.nome}</option>
    ));

    return ( 
      <Container fluid className="ml-1">
        <Row>
          <Col xs={12}>
            <div className="box box-success">
              <div className="box-header with-border">
                <h3 className="box-title"><font style={{verticalAlign: "inherit"}}><font style={{verticalAlign: "inherit"}}>Cadastrando Confrontos</font></font></h3>
              </div>
              <Form>
                <div className="box-body">
                  <Row>
                    <Col md={3}>
                      <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Mandante</Form.Label>
                        <Form.Control as="select" onChange={this.handleChangeSel} value={this.state.team}>
                          {options} 
                        </Form.Control>  
                      </Form.Group>
                    </Col>
                    <Col md={2}>
                      <Form.Group>
                        <Form.Label>Gols</Form.Label>
                        <Form.Control 
                            id="PS" placeholder="00"  />
                      </Form.Group> 
                    </Col>
                    <Col md={1} style={{textAlign: "center"}}>X</Col>
                    <Col md={3}>
                      <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Mandante</Form.Label>
                        <Form.Control as="select" onChange={this.handleChangeSel} value={this.state.team}>
                          {options} 
                        </Form.Control>  
                      </Form.Group>
                    </Col>
                    <Col md={2}>
                      <Form.Group>
                        <Form.Label>Gols</Form.Label>
                        <Form.Control 
                            id="PS" placeholder="00"  />
                      </Form.Group> 
                    </Col>      
                  </Row>
                </div>  
                <div className="box-footer">
                  <Button onClick={this.handleClickSave} variant="success">Salvar</Button>  
                  <Button onClick={this.resetState} className="float-right" variant="info">Cancelar</Button>  
                </div>
              </Form>
            </div>
          </Col>
        </Row> 
      </Container>  
    );
  }
}
 
export default Matchs;