import React, { Component } from 'react';
import { Content, Row, Col, Box, Button, Inputs, Alert } from 'adminlte-2-react';

import { teams, saveStats } from '../services/team';
import { compound, onlyNumber } from '../services/format';

const { Select, Text } = Inputs;

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

    return (<Content title="Save Stats" subTitle="Send stats to database" browserTitle="Zalika - Save Stats">
      <Row>
        <Col xs={3}>
          {(this.state.message.length > 0)? <Alert closable type="danger" icon="fa-ban" title="Algo deu errado!">{this.state.message}</Alert>: null}
        </Col>
        <Col xs={12}>
          <Box
            type="info"
            title="Estatísticas"
            footer={(
              <React.Fragment>
                <Button onClick={this.handleClickSave} text="Salvar" type="info" pullLeft />
                <Button onClick={this.resetState} text="Cancelar" pullRight />
              </React.Fragment>  
            )}
            border>
              <Row>
                <Col md={4} lg={3}>
                    <Select
                      onChange={this.handleChangeSel}
                      id="Time" label="Time"
                      labelPosition="above"
                      options={options}
                      value={this.state.team}
                    />
                </Col>
              </Row>
              <Row>
                <Col md={4} lg={1}>
                  <Text onChange={this.handleChangeInput} 
                        id="PS" label="PS" labelPosition="above" 
                        placeholder="00" value={this.state.stats.ps} />
                </Col> 
                <Col md={4} lg={1}>
                  <Text onChange={this.handleChangeInput} 
                        id="GP" label="GP" labelPosition="above" 
                        placeholder="00" value={this.state.stats.gp} />
                </Col> 
                <Col md={4} lg={1}>
                  <Text onChange={this.handleChangeInput} 
                        id="GC" label="GC" labelPosition="above" 
                        placeholder="00" value={this.state.stats.gc} />
                </Col>  
                <Col md={4} lg={1}>
                  <Text onChange={this.handleChangeInput} 
                        id="NSG" label="NSG" labelPosition="above" 
                        placeholder="00" value={this.state.stats.nsg} />
                </Col>  
                <Col md={4} lg={1}>
                  <Text onChange={this.handleChangeInput} 
                        id="NM" label="NM" labelPosition="above" 
                        placeholder="00" value={this.state.stats.nm} />
                </Col>  
                <Col md={4} lg={2}>
                  <Text onChange={this.handleChangeInput} 
                        id="MD" label="MD [J-V-E-D]" labelPosition="above" 
                        placeholder="J-V-E-D" value={this.state.stats.md} />
                </Col>  
                <Col md={4} lg={2}>
                  <Text onChange={this.handleChangeInput} 
                        id="VS" label="VS [J-V-E-D]" labelPosition="above" 
                        placeholder="J-V-E-D" value={this.state.stats.vs} />
                </Col>  
                <Col md={4} lg={2}>
                  <Text onChange={this.handleChangeInput} 
                        id="U6" label="U6 [PT-GP]" labelPosition="above" 
                        placeholder="PT-GP" value={this.state.stats.u6} />
                </Col>  
                  
              </Row>
          </Box>
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
    </Content>);
  }
}

export default CdStats;