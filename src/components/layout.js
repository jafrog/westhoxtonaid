import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import Footer from "./footer"

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
        {children}
      </main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
