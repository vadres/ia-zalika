import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDatabase, faSubscript, faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./assets/css/custom.css";
import Stats from './views/stats/StatsContainer';
import InitDB from './views/Admin';
import Sidebar from './components/sidebar/Sidebar';
import SidebarItem from './components/sidebar/SidebarItem';
import Footer from './components/footer/Footer';
import Clashes from './views/clashes/ClashesContainer';

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
          <SidebarItem href="/matchs">
            <FontAwesomeIcon className="sideicon" icon={faSubscript}/>Confrontos
          </SidebarItem>
          <SidebarItem href="/init-db" disabled={true} onClick={() => { toast.error("Usuário Sem Permissão") } }>
            <FontAwesomeIcon className="sideicon" icon={faUserSecret}/>Admin
          </SidebarItem>
        </Sidebar>
        <Router>
          <section className="content">
            <div>
              <div className="content-header">
                <h1>Zalika Dashboard <small>Version 1.0.0</small></h1>
              </div>

              <Route exact path="/" component={Stats} />
              <Route path="/init-db" component={InitDB} />
              <Route path="/matchs" component={Clashes} />
            </div>
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

export default App;
