import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Nav from "../Navigation/Nav"
import("./header.scss");

const Header = () => (
  <header >
    <Nav />
  </header>
)

export default Header
