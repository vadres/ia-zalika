import React from 'react';

class Sidebar extends React.Component {
  state = {  }
  render() { 
    return ( <aside>
      <ul className="sidemenu">
        {this.props.children}
      </ul>
    </aside> );
  }
}
 
export default Sidebar;