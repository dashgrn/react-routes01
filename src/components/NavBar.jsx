import React, { Component } from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class NavBar extends Component {
    render() {
        return (
            <Nav>
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/geek" className="nav-link">Cuestionario Geek</Link>
                <Link to="/games" className="nav-link">Cuestionario Games</Link>
                <Link to="/harry" className="nav-link">Cuestionario HarryPotter</Link>
                <Link to="/about" className="nav-link">Sobre el formulario</Link>
            </Nav>
        )
    }
}