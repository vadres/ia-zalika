import React, { Component } from 'react';
import ReactDOM from "react-dom";

import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container, Navbar } from 'react-bootstrap';

import "./assets/css/custom.css";
import CdStats from './views/cdStats';
import InitDB from './views/initDB';

class App extends Component {
  render() {
    return (
    <>
      <Navbar bg="light">
        <Navbar.Brand href="/cd-stats">
          IA Zalika
        </Navbar.Brand>
      </Navbar>
      <Router>
        <div style={{marginTop: "10px" }}>
          <Route exact path="/" component={CdStats} />
          <Route path="/init-db" component={InitDB} />
          <Route path="/cd-stats" component={CdStats} />
        </div>
      </Router>
    </>);
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
