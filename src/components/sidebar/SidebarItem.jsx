import React from 'react';

class SidebarItem extends React.Component {
  render() { 
    const href = (this.props.disabled === true)? "#": this.props.href;
    const onClick = typeof this.props.onClick === "function"? this.props.onClick: ()=>{}; 
    console.log(this.props.onClick);
    return ( <li><a onClick={onClick} href={href}>{this.props.children}</a></li> );
  }
}
 
export default SidebarItem;