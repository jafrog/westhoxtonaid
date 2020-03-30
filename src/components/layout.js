import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"

import Header from "./header"

import '../styles/global.scss'

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <link href="https://fonts.googleapis.com/css?family=Work+Sans&display=swap" rel="stylesheet" />
      </Helmet>
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
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
