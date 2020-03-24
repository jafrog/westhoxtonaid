import React from "react"
import PropTypes from "prop-types"

import Header from "./header"

import '../styles/global.scss'

const Layout = ({ children }) => {
  return (
    <>
      <Header/>
      <main>
        <div className="container">
          {children}
        </div>
      </main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
