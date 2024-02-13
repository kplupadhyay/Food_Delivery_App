import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/logo.jpg"

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
  <div className="container-fluid">
    <Link className="navbar-brand" href="#"><img src={logo} alt='logo' style={{height:60, width:60}}/></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        
        <li className="nav-item">
          <Link className="nav-link" href="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/about">About us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/services">Services</Link>
        </li>
        <li className="nav-item">
        <button type="button" className="btn btn-dark">Contact</button>
        </li>
       
      </ul>
      
    </div>
  </div>
</nav>
    </div>
  )
}
