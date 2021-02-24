import React from 'react';
import{ Link ,NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
export const NavBar = () => {
  const navStyle ={
    color:'#a8eb34',
    fontWeight:'600',
    fontSize: '18px',
    listStyle:'none'
  }
    return (
   <nav className="nav-bar bg-dark fixed-top">
    <div className="nav-wrapper">
      <Link to="/" className="brand-logo"style={{color: "#ffff",fontWeight:"600",marginLeft:"10px"}}>WorkBook</Link>
      <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
      <ul class="right hide-on-med-and-down">
        <li><Link  style={navStyle} to="/Home">Home</Link></li>
        <li><Link style={navStyle} to="/contacts">Contacts</Link></li>
        <li><Link style={navStyle} to="/components">Components</Link></li>
        <li> <Link to="/login" ><Button className="mr-2"variant="warning">Login</Button></Link></li>
        </ul>
     </div>
   </nav>
    )
}

export default NavBar;
