import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

class ClashesComponent extends React.Component {
  componentDidMount(){
    this.props.fetchTeams();
  }
  
  render() { 
    const { teams, client, clientGols, visitor, visitorGols, changeAttr, resetState, saveClash } = this.props;

    const options = teams.sort((a,b) => a.nome.localeCompare(b.nome)).map(el => (
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
                        <Form.Control as="select" onChange={(e) => { changeAttr("client", e.target.value) } } value={client}>
                          {options} 
                        </Form.Control>  
                      </Form.Group>
                    </Col>
                    <Col md={2}>
                      <Form.Group>
                        <Form.Label>Gols</Form.Label>
                        <Form.Control 
                            id="PS" placeholder="00" 
                            onChange={(e) => { changeAttr("clientGols", e.target.value) } } 
                            value={clientGols} />
                      </Form.Group> 
                    </Col>
                    <Col md={1} style={{textAlign: "center"}}>X</Col>
                    <Col md={3}>
                      <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Visitante</Form.Label>
                        <Form.Control as="select" onChange={(e) => { changeAttr("visitor", e.target.value) } } value={visitor}>
                          {options} 
                        </Form.Control>  
                      </Form.Group>
                    </Col>
                    <Col md={2}>
                      <Form.Group>
                        <Form.Label>Gols</Form.Label>
                        <Form.Control 
                            id="PS" placeholder="00"
                            onChange={(e) => { changeAttr("visitorGols", e.target.value) } } 
                            value={visitorGols}  />
                      </Form.Group> 
                    </Col>      
                  </Row>
                </div>  
                <div className="box-footer">
                  <Button onClick={() => { saveClash() } } variant="success">Salvar</Button>  
                  <Button onClick={() => { resetState() } } className="float-right" variant="info">Cancelar</Button>  
                </div>
              </Form>
            </div>
          </Col>
        </Row> 
      </Container>  
    );
  }
}
 
export default ClashesComponent;