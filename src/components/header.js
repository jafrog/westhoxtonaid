import { Link } from "gatsby"
import React from "react"
import {
  Navbar
} from "react-bootstrap"

import twitterIcon from "../assets/twitter_icon.svg"
import facebookIcon from "../assets/facebook_icon.svg"
import instagramIcon from "../assets/instagram_icon.svg"
import whatsappIcon from "../assets/whatsapp_icon.svg"

const Header = () => (
  <header>
    <Navbar variant="dark" expand="md" className="py-5">
      <Navbar.Toggle aria-controls="navbarToggler" />

      <Navbar.Collapse id="navbarToggler" className="justify-content-center">
        <ul className="navbar-nav justify-content-between">
          <li className="nav-item home">
            <Link
              className="nav-link"
              to="/"
              activeClassName="active">
              Home
            </Link>
            <div className="underline"/>
          </li>

          <li className="nav-item">
            <Link
              className="nav-link"
              to="/volunteer"
              activeClassName="active">
              Volunteer
            </Link>
            <div className="underline"/>
          </li>

          <li className="nav-item">
            <Link
              className="nav-link"
              to="/help"
              activeClassName="active">
              Get help
            </Link>
            <div className="underline"/>
          </li>

          <li className="nav-item">
            <Link
              className="nav-link"
              to="/health"
              activeClassName="active">
              Health & safety
            </Link>
            <div className="underline"/>
          </li>

          <li className="nav-item">
            <Link
              className="nav-link"
              to="/resources"
              activeClassName="active">
              More support
            </Link>
            <div className="underline"/>
          </li>

          <li className="nav-item">
            <Link
              className="nav-link"
              to="/contact"
              activeClassName="active">
              Contact us
            </Link>
            <div className="underline"/>
          </li>

          <li className="nav-item">
            <Link
              className="nav-link"
              to="/about"
              activeClassName="active">
              About us
            </Link>
            <div className="underline"/>
          </li>

          <li className="nav-item social">
            <a
              href="https://twitter.com/HoxtonWestAid"
              target="_blank" rel="noopener noreferrer"
              className="nav-link twitter"
            >
              <img src={twitterIcon} alt="Twitter" />
            </a>

            <a
              href="https://www.facebook.com/groups/791760537983496/"
              target="_blank" rel="noopener noreferrer"
              className="nav-link"
            >
              <img src={facebookIcon} alt="Facebook" />
            </a>

            <a
              href="https://instagram.com/hoxtonwestmutualaid"
              target="_blank" rel="noopener noreferrer"
              className="nav-link"
            >
              <img src={instagramIcon} alt="Instagram" />
            </a>

            <a
              href="https://chat.whatsapp.com/ExfTKM1Cpdz9V9o9nWRDnX"
              target="_blank" rel="noopener noreferrer"
              className="nav-link"
            >
              <img src={whatsappIcon} alt="Whatsapp" />
            </a>
            <div className="underline"/>
         </li>
        </ul>
      </Navbar.Collapse>
    </Navbar>
  </header>
)

export default Header
