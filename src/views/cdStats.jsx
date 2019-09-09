import React, { Component } from 'react';
import { Content, Divider, Row, Col, Box, Button, Inputs } from 'adminlte-2-react';

import { teams, saveStats } from '../services/team';
import { compound, onlyNumber } from '../services/format';

const { Select, Text } = Inputs;

class CdStats extends Component {
  state = {
    team: "ala",
    ps:"",gp:"",gc:"",nsg:"",nm:"",md:"",vs:"",u6:"",
    message: "",
  }
  
  handleChangeSel = (e) => {
    this.setState({ ...this.state, team: e.target.value });
  }
  
  formatInput = (id, input) => {
    id = id.toUpperCase();
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
    id = id.toUpperCase();
    switch(id) {
      case "PS":  
      case "GP":  
      case "GC":  
      case "NSG":  
      case "NM":  
        return true;
      case "MD":  
      case "VS":  
        return compound(input, 4);
      case "U6":  
        return compound(input, 2);
      default:
        return true;  
    }
  }

  handleChangeInput = (e) => {
    try {
      const id = e.target.id.toLowerCase();
      let stat = this.state[id];
      
      if (!this.formatCompound(id, e.target.value)) {
        this.setState({ ...this.state, message: "Algum campo está com formato errado" });
      } else {
        console.log("-" + this.formatInput(id, e.target.value))
        stat = this.formatInput(e.target.value);  
        const newState = this.state;
        newState[id] = stat;
        this.setState(newState);
      }
    } catch(e){ 
      console.error(e); 
    }
  }

  handleClickSave = (e) => {
    
  }

  render() {
    const options = teams.sort((a,b) => a.nome.localeCompare(b.nome)).map(el => (
      { text: el.nome, value: el.sigla }
    ));

    return (<Content title="Save Stats" subTitle="Send stats to database" browserTitle="Zalika - Save Stats">
      <Row>
        <Col xs={12}>
          <Box
            type="info"
            title="Estatísticas"
            bodyClassName="form-horizontal"
            footer={(
              <React.Fragment>
                <Button text="Salvar" type="info" pullLeft />
                <Button text="Cancelar" pullRight />
              </React.Fragment>  
            )}
            border>
            <div className="container">
              <Row>
                <Col xs={3}>
                    <Select
                      onChange={this.handleChangeSel}
                      id="Time" label="Time"
                      labelPosition="above"
                      options={options}
                      value={this.team}
                    />
                </Col>
              </Row>
              <Row>
            <Col xs={1}>
              <Text onChange={this.handleChangeInput} id="PS" label="PS" labelPosition="above" placeholder="00" value={this.state.ps} />
            </Col> 
            <Col xs={1}>
              <Text onChange={this.handleChangeInput} id="GP" label="GP" labelPosition="above" placeholder="00" value={this.state.gp} />
            </Col> 
            <Col xs={1}>
              <Text onChange={this.handleChangeInput} id="GC" label="GC" labelPosition="above" placeholder="00" value={this.state.gc} />
            </Col>  
            <Col xs={1}>
              <Text onChange={this.handleChangeInput} id="NSG" label="NSG" labelPosition="above" placeholder="00" value={this.state.nsg} />
            </Col>  
            <Col xs={1}>
              <Text onChange={this.handleChangeInput} id="NM" label="NM" labelPosition="above" placeholder="00" value={this.state.nm} />
            </Col>  
            <Col xs={2}>
              <Text onChange={this.handleChangeInput} id="MD" label="MD" labelPosition="above" placeholder="J-V-E-D" value={this.state.md} />
            </Col>  
            <Col xs={2}>
              <Text onChange={this.handleChangeInput} id="VS" label="VS" labelPosition="above" placeholder="J-V-E-D" value={this.state.vs} />
            </Col>  
            <Col xs={2}>
              <Text onChange={this.handleChangeInput} id="U6" label="U6" labelPosition="above" placeholder="PT-GP" value={this.state.u6} />
            </Col>  
              
          </Row>
            </div>
          </Box>
        </Col>
      </Row>
      <Row>
        <Col xs={3}>
          <ul class="">
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