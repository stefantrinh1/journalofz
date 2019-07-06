import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Nav from "./Nav"
import("./header.scss");

const Header = ({ title }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `2rem 0`,
      }}
    >
      <h1>
        <Link to="/">{title}</Link>
      </h1>

      <p className="header__subtitle">Adventures in medicine, food, and travel</p>
      </div>
      <hr />
      <Nav />
      <hr />
    
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  title: 'Journal of Z'
}

export default Header
