import React, { Component } from 'react';
import { Container, Row, Col, Button, Form, ListGroup } from 'react-bootstrap';

class StatsEditComponent extends Component {
  componentDidMount(){
    this.props.fetchTeams();
    document.title = "IA Zalika - Estatísticas";
  }

  render() {
    const { teams, team, stats, changeStat, changeTeam, saveStats, resetState } = this.props;

    let options = [];

    return (<Container fluid className="ml-1">
      <Row>
        <Col xs={12}>
          <div className="box box-success">
            <div className="box-header with-border">
              <h3 className="box-title">Estatísticas Gerais</h3>
            </div>
            <div className="box-body">
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Button>Flamengo</Button>
                  <ListGroup>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                    <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                  </ListGroup>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button>Flamengo</Button>
                  <ListGroup>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                    <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                  </ListGroup>
                </ListGroup.Item>
              </ListGroup>
            </div>
          </div>  
        </Col>
      </Row>
      
    </Container>);
  }
}

export default StatsEditComponent;