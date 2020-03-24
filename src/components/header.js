import { Link } from "gatsby"
import React from "react"

const Header = () => (
  <header>
    <nav
      className="navbar navbar-expand-sm navbar-dark justify-content-center py-5"
    >
      <ul className="navbar-nav justify-content-between">
        <li className="nav-item">
          <Link
            className="nav-link"
            to="/"
            activeClassName="active"
            >
            Home
          </Link>
        </li>

        <li className="nav-item">
          <Link
            className="nav-link"
            to="/volunteer"
            activeClassName="active"
            >
            Volunteer
          </Link>
        </li>
        
        <li className="nav-item">
          <Link
            className="nav-link"
            to="/help"
            activeClassName="active"
            >
            Get help
          </Link>
        </li>
        
        <li className="nav-item">
          <Link
            className="nav-link"
            to="/health"
            activeClassName="active"
            >
            Health & safety
          </Link>
        </li>

        <li className="nav-item">
          <Link
            className="nav-link"
            to="/about"
            activeClassName="active"
            >
            About us
          </Link>
        </li>

        <li className="nav-item">
          <Link
            className="nav-link"
            to="/resources"
            activeClassName="active"
            >
            Resources
          </Link>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
