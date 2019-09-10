import React, { Component } from 'react';
import { Container, Row, Col, Button, Form, Alert } from 'react-bootstrap';

import { teams, saveStats } from '../services/team';
import { compound, onlyNumber } from '../services/format';

class CdStats extends Component {
  state = {
    team: "ala",
    stats: { ps:"",gp:"",gc:"",nsg:"",nm:"",md:"",vs:"",u6:"" },
    message: "",
  }
  
  handleChangeSel = (e) => {
    this.setState({ ...this.state, team: e.target.value });
  }
  
  formatInput = (id, input) => {
    switch(id) {
      case "PS":  
      case "GP":  
      case "GC":  
      case "NSG":  
      case "NM":  
        return onlyNumber(input);
      case "MD":  
      case "VS":  
      case "U6":  
      default:
        return input;  
    }
  }

  formatCompound = (id, input) => {
    switch(id) {
      case "MD":  
      case "VS":  
        return compound(input, 4);
      case "U6":  
        return compound(input, 2);
      case "PS":  
      case "GP":  
      case "GC":  
      case "NSG":  
      case "NM":  
      default:
        return true;
    }
  }

  handleChangeInput = (e) => {
    try {
      const { id } = e.target;
      let stat = this.formatInput(id, e.target.value);  
      this.setState({ ...this.state, stats: { ...this.state.stats, [id.toLowerCase()]: stat }, message: "" });
    } catch(e){ 
      console.error(e); 
    }
  }

  handleClickSave = (e) => {
    const { team, stats } = this.state;

    for (const [key, stat] of Object.entries(stats)) {
      if (typeof stat === 'undefined' || stat === "" || !this.formatCompound(key.toUpperCase(), stat)){
        this.setState({ ...this.state, message: "Algum campo está no formato incorreto" });
        return;
      }
    }  
    stats["time"] = new Date().getTime();
    saveStats(team, stats); 
    this.resetState();
  }
  
  resetState = (e) => {
    this.setState({
      team: "ala",
      stats: { ps:"",gp:"",gc:"",nsg:"",nm:"",md:"",vs:"",u6:"" },
      message: "",
    });
  }

  render() {
    const options = teams.sort((a,b) => a.nome.localeCompare(b.nome)).map(el => (
      { text: el.nome, value: el.sigla }
    ));

    return (<Container>
      <Row>
        <Col xs={3}>
          {(this.state.message.length > 0)? <Alert closable type="danger" icon="fa-ban" title="Algo deu errado!">{this.state.message}</Alert>: null}
        </Col>
        <Col xs={12}>
          <div className="box box-primary">
            <div class="box-header with-border">
              <h3 class="box-title"><font style={{verticalAlign: "inherit"}}><font style={{verticalAlign: "inherit"}}>Exemplo rápido</font></font></h3>
            </div>
            <Form>
              <div className="box-body">
                <Row>
                  <Col md={4} lg={3}>
                    {/* <Form.Select
                        onChange={this.handleChangeSel}
                        id="Time" label="Time"
                        labelPosition="above"
                        options={options}
                        value={this.state.team}
                    />*/}
                  </Col>
                </Row>
                <Row>
                  <Col md={4} lg={1}>
                    <Form.Control onChange={this.handleChangeInput} 
                          id="PS" label="PS" labelPosition="above" 
                          placeholder="00" value={this.state.stats.ps} />
                  </Col> 
                  <Col md={4} lg={1}>
                    <Form.Control onChange={this.handleChangeInput} 
                          id="GP" label="GP" labelPosition="above" 
                          placeholder="00" value={this.state.stats.gp} />
                  </Col> 
                  <Col md={4} lg={1}>
                    <Form.Control onChange={this.handleChangeInput} 
                          id="GC" label="GC" labelPosition="above" 
                          placeholder="00" value={this.state.stats.gc} />
                  </Col>  
                  <Col md={4} lg={1}>
                    <Form.Control onChange={this.handleChangeInput} 
                          id="NSG" label="NSG" labelPosition="above" 
                          placeholder="00" value={this.state.stats.nsg} />
                  </Col>  
                  <Col md={4} lg={1}>
                    <Form.Control onChange={this.handleChangeInput} 
                          id="NM" label="NM" labelPosition="above" 
                          placeholder="00" value={this.state.stats.nm} />
                  </Col>  
                  <Col md={4} lg={2}>
                    <Form.Control onChange={this.handleChangeInput} 
                          id="MD" label="MD [J-V-E-D]" labelPosition="above" 
                          placeholder="J-V-E-D" value={this.state.stats.md} />
                  </Col>  
                  <Col md={4} lg={2}>
                    <Form.Control onChange={this.handleChangeInput} 
                          id="VS" label="VS [J-V-E-D]" labelPosition="above" 
                          placeholder="J-V-E-D" value={this.state.stats.vs} />
                  </Col>  
                  <Col md={4} lg={2}>
                    <Form.Control onChange={this.handleChangeInput} 
                          id="U6" label="U6 [PT-GP]" labelPosition="above" 
                          placeholder="PT-GP" value={this.state.stats.u6} />
                  </Col>  
                </Row>
              </div>  
              <div className="box-footer">
                <Button variant="success">Salvar</Button>  
                <Button className="float-right" variant="secondary">Cancelar</Button>  
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

export default CdStats;