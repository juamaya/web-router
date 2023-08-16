import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/images/ok.png'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <img src={logo} width={40} alt="" />
                <NavLink to="/" className="navbar-brand"  >Navbar</NavLink>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse menu react" id="navbarTogglerDemo02">

          
                        <NavLink to="/" className="btn btn-outline-primary  mx-3">
                        <i className="fas fa-home"></i>  Home
                        </NavLink>
                        <NavLink to="/about" className="btn btn-outline-primary mx-3">
                        <i className="fa-solid fa-user-tie"></i>   About
                        </NavLink>
                        <NavLink to="/services" className="btn btn-outline-primary mx-3 ">
                        <i className="fa-solid fa-desktop"></i>     Services
                        </NavLink>
                        <NavLink to="/blog" className="btn btn-outline-primary mx-3">
                        <i className="fa-solid fa-blog"></i>   Blog
                        </NavLink>
                        <NavLink to="/contact" className="btn btn-outline-primary mx-3">
                        <i className="fa-regular fa-address-card"></i>    Contact
                        </NavLink>

                      
                </div>
            </div>
        </nav>
    )
}

export default Navbar