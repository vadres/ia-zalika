import React, { Component } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';

import { initCollection } from '../../services/team';

class StatsComponent extends Component {
  componentDidMount(){
    this.props.fetchTeams();
    document.title = "IA Zalika - Estatísticas";
  }

  render() {
    const { teams, team, stats, changeStat, changeTeam, saveStats, resetState } = this.props;

    let options = teams.sort((a,b) => a.nome.localeCompare(b.nome)).map(el => (
      <option key={el.sigla} value={el.sigla}>{el.nome}</option>
    ));

    return (<Container fluid className="ml-1">
      <Row>
        <Col xs={12}>
          <div className="box box-success">
            <div className="box-header with-border">
              <h3 className="box-title"><font style={{verticalAlign: "inherit"}}><font style={{verticalAlign: "inherit"}}>Cadastrando Estatísticas</font></font></h3>
            </div>
            <Form>
              <div className="box-body">
                <Row>
                  <Col md={4} lg={3}>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                      <Form.Label>Time</Form.Label>
                      <Form.Control as="select" onChange={ (e) => changeTeam(e.target.value) } value={team}>
                        {options} 
                      </Form.Control>  
                    </Form.Group>  
                  </Col>
                </Row>
                <Row>
                  <Col md={4} lg={1}>
                    <Form.Group>
                      <Form.Label>PS</Form.Label>
                      <Form.Control onChange={ (e) => changeStat("ps", e.target.value) } 
                          id="PS" placeholder="00" value={stats.ps} />
                    </Form.Group>    
                  </Col> 
                  <Col md={4} lg={1}>
                    <Form.Group>
                      <Form.Label>GP</Form.Label>
                      <Form.Control onChange={ (e) => changeStat("gp", e.target.value) } 
                          id="GP" placeholder="00" value={stats.gp} />
                    </Form.Group>      
                  </Col> 
                  <Col md={4} lg={1}>
                    <Form.Group>
                      <Form.Label>GC</Form.Label>
                      <Form.Control onChange={ (e) => changeStat("gc", e.target.value) } 
                          id="GC" placeholder="00" value={stats.gc} />
                    </Form.Group>      
                  </Col>  
                  <Col md={4} lg={1}>
                    <Form.Group>
                      <Form.Label>NSG</Form.Label>
                      <Form.Control onChange={ (e) => changeStat("nsg", e.target.value) } 
                          id="NSG" placeholder="00" value={stats.nsg} />
                    </Form.Group>      
                  </Col>  
                  <Col md={4} lg={1}>
                    <Form.Group>
                      <Form.Label>NM</Form.Label>
                      <Form.Control onChange={ (e) => changeStat("nm", e.target.value) } 
                          id="NM" placeholder="00" value={stats.nm} />
                    </Form.Group>      
                  </Col>  
                  <Col md={4} lg={2}>
                    <Form.Group>
                      <Form.Label>MD [J-V-E-D]</Form.Label>
                      <Form.Control onChange={ (e) => changeStat("md", e.target.value) } 
                          id="MD" placeholder="J-V-E-D" value={stats.md} />
                    </Form.Group>      
                  </Col>  
                  <Col md={4} lg={2}>
                    <Form.Group>
                      <Form.Label>VS [J-V-E-D]</Form.Label>
                      <Form.Control onChange={ (e) => changeStat("vs", e.target.value) } 
                          id="VS" placeholder="J-V-E-D" value={stats.vs} />
                    </Form.Group>      
                  </Col>  
                  <Col md={4} lg={2}>
                    <Form.Group>
                      <Form.Label>U6 [PT-GP]</Form.Label>
                      <Form.Control onChange={ (e) => changeStat("u6", e.target.value) } 
                          id="U6" placeholder="PT-GP" value={stats.u6} />
                    </Form.Group>      
                  </Col>  
                </Row>
              </div>  
              <div className="box-footer">
                <Button onClick={ () => { saveStats() } } variant="success">Salvar</Button>  
                <Button onClick={ () => { resetState() } } className="float-right" variant="info">Cancelar</Button>  
              </div>
            </Form>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={3}>
          <ul className="">
            <li>PS  - Posição</li>
            <li>GP  - Gols pró</li>
            <li>GC  - Gols contra</li>
            <li>NSG - Não sofreu gol</li>
            <li>NM  - Não marcou</li>
            <li>MD  - Mandante</li>
            <li>VS  - Visitante</li>
            <li>U6  - Últimos 6</li>
          </ul>
        </Col>
      </Row>
    </Container>);
  }
}

export default StatsComponent;