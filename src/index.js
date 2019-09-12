import React, { Component } from 'react';
import ReactDOM from "react-dom";

import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDatabase, faSubscript, faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./assets/css/custom.css";
import CdStats from './views/CdStats';
import InitDB from './views/InitDB';
import Sidebar from './components/sidebar/Sidebar';
import SidebarItem from './components/sidebar/SidebarItem';
import Footer from './components/footer/Footer';

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
        <Sidebar title="Navegação">
          <SidebarItem href="/">
            <FontAwesomeIcon className="sideicon" icon={faDatabase}/>Informações
          </SidebarItem>
          <SidebarItem href="/init-db">
            <FontAwesomeIcon className="sideicon" icon={faSubscript}/>Confrontos
          </SidebarItem>
          <SidebarItem href="/init-db" disabled={true} onClick={() => { toast.error("Usuário Sem Permissão") } }>
            <FontAwesomeIcon className="sideicon" icon={faUserSecret}/>Admin
          </SidebarItem>
        </Sidebar>
        <Router>
          <section className="content">
            <div className="content-header">
              <h1>Zalika Dashboard <small>Version 1.0.0</small></h1>
            </div>

            <Route exact path="/" component={CdStats} />
            <Route path="/init-db" component={InitDB} />
            
            <Footer />
          </section>
        </Router>

        <ToastContainer 
          closeOnClick
          autoClose={2000}
          position="top-left"
          pauseOnVisibityChange
          pauseOnHover={false}
        />       
      </div>
    </>);
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
