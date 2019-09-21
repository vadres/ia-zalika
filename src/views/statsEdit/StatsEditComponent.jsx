import React, { Component } from 'react';
import { Container, Row, Col, Button, Form, Table } from 'react-bootstrap';

import { formatDate } from '../../services/format';

class StatsEditComponent extends Component {
  componentDidMount(){
    this.props.fetchTeams();
    document.title = "IA Zalika - Estatísticas";
  }

  render() {
    const { teams, team, stats, changeStat, changeTeam, saveStats, resetState } = this.props;
    console.log(teams);
    const mapStats = (stats) => (
      stats.map((stat, key) => (
        <tr>
          <td key={key}>{formatDate(new Date(stat.time))}</td>
          <td key={key}>{stat.ps}</td>
          <td key={key}>{stat.gp}</td>
          <td key={key}>{stat.gc}</td>
          <td key={key}>{stat.nsg}</td>
          <td key={key}>{stat.nm}</td>
          <td key={key}>{stat.md}</td>
          <td key={key}>{stat.vs}</td>
          <td key={key}>{stat.u6}</td>
        </tr>  
      ))
    );

    const list = teams.map((team, key) => {
      return (
        <div class="list-teams">
          <span className="h4">{team.name}</span>
          <Table striped bordered hover key={key}>
            <thead>
              <tr>
                <th>Data</th>
                <th>PS</th>
                <th>GP</th>
                <th>GC</th>
                <th>NSG</th>
                <th>NM</th>
                <th>MD</th>
                <th>VS</th>
                <th>U6</th>
              </tr>
            </thead>
            <tbody>
              {mapStats(team.data)}
            </tbody>
          </Table>
        </div>
      );
    });

    return (<Container fluid className="ml-1">
      <Row>
        <Col xs={12}>
          <div className="box box-success">
            <div className="box-header with-border">
              <h3 className="box-title">Estatísticas Gerais</h3>
            </div>
            <div className="box-body">
              <span variant="flush">
                {list}
              </span>
            </div>
          </div>  
        </Col>
      </Row>
      
    </Container>);
  }
}

export default StatsEditComponent;