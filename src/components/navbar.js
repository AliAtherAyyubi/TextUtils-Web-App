import React from 'react'

import { Link } from 'react-router-dom'

export default function navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg text-white bg-${props.mode}`} >
  <div className="container-fluid text-white" >
    <Link className={`navbar-brand text-${props.mode==='dark'?"light":"dark"}`} to="/">{props.title}</Link>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarScroll">
      <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link" to="/services" >
            Services
          </Link>
          
        </li>
        <li className="nav-item">
          <Link className="nav-link disabled" to="/">Link</Link>
        </li>
      </ul>
      
    </div>

    <div className="form-check form-switch" >
  <input className="form-check-input" type="checkbox" onClick={props.darkmode} role="switch" id="flexSwitchCheckDefault" style={{height:"30px",width:"70px"}} />
  <label className={`form-check-label text-${props.mode==='dark'?"light":"dark"}`} htmlFor="flexSwitchCheckDefault">Dark Mode</label>
</div>
  </div>
</nav>
  )
}
