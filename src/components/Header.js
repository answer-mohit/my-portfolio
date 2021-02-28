import React from 'react'
import { NavLink } from 'react-router-dom'
import "../App.css";
function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
  <div className="container-fluid">
    <cite className="navbar-brand">Portfolio</cite>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item px-5">
        <NavLink exact to="/" className="nav-link" activeClassName="active">Home</NavLink>
        </li>
        <li className="nav-item px-5">
        <NavLink exact to="/about" className="nav-link" activeClassName="active">About us</NavLink>
        </li>
        <li className="nav-item px-5">
        <NavLink exact to="/service" className="nav-link" activeClassName="active">Services</NavLink>
        </li>
        <li className="nav-item px-5">
        <NavLink exact to="/contact" className="nav-link" activeClassName="active">Contact</NavLink>
        </li>
        
      </ul>

    </div>
  </div>
</nav>
        </div>
    )
}

export default Header
