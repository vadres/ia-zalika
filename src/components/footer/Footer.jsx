import React from 'react';

class Footer extends React.Component {
  state = {  }
  render() { 
    return ( 
      <footer className="main-footer">
        <div className="float-right hidden-xs">
          <b>Version</b> 1.0.0
        </div>
        <strong>© 2019 <a href="#">IAZalika</a>.</strong> All rights
        reserved.
      </footer> );
  }
}
 
export default Footer;