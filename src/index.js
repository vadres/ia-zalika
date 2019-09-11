import React, { Component } from 'react';
import ReactDOM from "react-dom";

import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container, Navbar } from 'react-bootstrap';

import "./assets/css/custom.css";
import CdStats from './components/CdStats';
import InitDB from './components/InitDB';
import Sidebar from './components/sidebar/Sidebar';
import SidebarItem from './components/sidebar/SidebarItem';

class App extends Component {
  render() {
    return (
    <>
      <Navbar>
        <Navbar.Brand href="/cd-stats">
          <b>IA Z</b>alika
        </Navbar.Brand>
      </Navbar>
      <div className="wrapper">
        <Sidebar>
          <SidebarItem href="/init-db">HEe</SidebarItem>
        </Sidebar>
        <Router>
          <section className="content" style={{marginTop: "10px" }}>
            <Route exact path="/" component={CdStats} />
            <Route path="/init-db" component={InitDB} />
            <Route path="/cd-stats" component={CdStats} />
          </section>
        </Router>
      </div>
    </>);
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
