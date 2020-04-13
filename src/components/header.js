import { Link } from "gatsby"
import React from "react"
import {
  Navbar  
} from "react-bootstrap"

const Header = () => (
  <header>
    <Navbar variant="dark" expand="md" className="py-5">
      <Navbar.Toggle aria-controls="navbarToggler" />

      <Navbar.Collapse id="navbarToggler" className="justify-content-center">
        <ul className="navbar-nav justify-content-between">
          <li className="nav-item">
            <Link
              className="nav-link"
              to="/"
              activeClassName="active">
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link
              className="nav-link"
              to="/volunteer"
              activeClassName="active">
              Volunteer
            </Link>
          </li>

          <li className="nav-item">
            <Link
              className="nav-link"
              to="/help"
              activeClassName="active">
              Get help
            </Link>
          </li>

          <li className="nav-item">
            <Link
              className="nav-link"
              to="/health"
              activeClassName="active">
              Health & safety
            </Link>
          </li>

          <li className="nav-item">
            <Link
              className="nav-link"
              to="/resources"
              activeClassName="active">
              More support
            </Link>
          </li>

          <li className="nav-item">
            <Link
              className="nav-link"
              to="/contact"
              activeClassName="active">
              Contact us
            </Link>
          </li>

          <li className="nav-item">
            <Link
              className="nav-link"
              to="/about"
              activeClassName="active">
              About us
            </Link>
          </li>
        </ul>
      </Navbar.Collapse>
    </Navbar>
  </header>
)

export default Header
