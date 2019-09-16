import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDatabase, faSubscript, faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./assets/css/custom.css";
import Stats from './views/stats/StatsContainer';
import Sidebar from './components/sidebar/Sidebar';
import SidebarItem from './components/sidebar/SidebarItem';
import Footer from './components/footer/Footer';
import Clashes from './views/clashes/ClashesContainer';
import Admin from './views/admin/AdminContainer';
import Modal from './components/modal/Modal';

const App = () => {
  const [modalShow, setModalShow] = React.useState(false);

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
        <SidebarItem href="/clashes">
          <FontAwesomeIcon className="sideicon" icon={faSubscript}/>Confrontos
        </SidebarItem>
        <SidebarItem href="/" disabled onClick={() => { setModalShow(true) } }>
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
            <Route path="/admin-iaz" component={Admin} />
            <Route path="/clashes" component={Clashes} />
          </div>
          <Footer />
        </section>
        
        <Modal 
          show={modalShow}
          onHide={() => setModalShow(false)}
        />

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

export default App;
