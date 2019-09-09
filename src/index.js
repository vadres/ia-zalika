import React, { Component } from 'react';
import ReactDOM from "react-dom";

import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import AdminLTE, { Sidebar } from 'adminlte-2-react';
import CdStats from './views/cdStats';
import InitDB from './views/initDB';

const { Item } = Sidebar;

class App extends Component {
   
  sidebar = [
    <Item icon="fa-th" key="cd-stats" text="Save Stats" to="/cd-stats" />,
    <Item id="xd" icon="fa-upload" key="init-db" text="Initialize" to="/init-db" />
  ]

  render() {
    return (
      <AdminLTE title={["IA", "Zalika"]} titleShort={["IA", "ZA"]} theme="green-light" sidebar={this.sidebar}>
        <CdStats path="/cd-stats" />
        <InitDB path="/init-db" />
        <CdStats path="/" />
      </AdminLTE>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
