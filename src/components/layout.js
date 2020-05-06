import React from "react"
import PropTypes from "prop-types"

import Header from "./header"

import '../styles/global.scss'

const Layout = ({ location, children }) => {
  var page = (location || "").split("/")[1]
  if (page === "") {
    page = "index"
  }

  return (
    <div className={`wrapper ${page}`}>
      <Header/>
      <main style={{ minHeight: "100vh" }}>
        <div className="container">
          {children}
        </div>
      </main>
      <footer className="mt-5">
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
