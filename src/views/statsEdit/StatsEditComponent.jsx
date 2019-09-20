import React, { Component } from 'react';
import { Container, Row, Col, Button, Form, ListGroup, Badge } from 'react-bootstrap';

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
        <ListGroup.Item key={key}>
          <b style={{marginRight: "15px", fontSize: "16px" }}>Data:<Badge variant="info">{formatDate(new Date(stat.time))}</Badge></b>
          <b style={{marginLeft: "15px", fontSize: "16px" }}>PS:<Badge variant="success">{stat.ps}</Badge></b>
          <b style={{marginLeft: "15px", fontSize: "16px" }}>GP:<Badge variant="success">{stat.gp}</Badge></b>
          <b style={{marginLeft: "15px", fontSize: "16px" }}>GC:<Badge variant="success">{stat.gc}</Badge></b>
          <b style={{marginLeft: "15px", fontSize: "16px" }}>NSG:<Badge variant="success">{stat.nsg}</Badge></b>
          <b style={{marginLeft: "15px", fontSize: "16px" }}>NM:<Badge variant="success">{stat.nm}</Badge></b>
          <b style={{marginLeft: "15px", fontSize: "16px" }}>MD:<Badge variant="success">{stat.md}</Badge></b>
          <b style={{marginLeft: "15px", fontSize: "16px" }}>VS:<Badge variant="success">{stat.vs}</Badge></b>
          <b style={{marginLeft: "15px", fontSize: "16px" }}>U6:<Badge variant="success">{stat.u6}</Badge></b> 
        </ListGroup.Item>
      ))
    );

    const list = teams.map((team, key) => {
      return (
        <ListGroup.Item key={key}>
          <Button>{team.name}</Button>
          <ListGroup>
            {mapStats(team.data)}
          </ListGroup>
        </ListGroup.Item>
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
              <ListGroup variant="flush">
                {list}
              </ListGroup>
            </div>
          </div>  
        </Col>
      </Row>
      
    </Container>);
  }
}

export default StatsEditComponent;