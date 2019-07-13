import { Link } from "gatsby";
import React from "react";
import ("./Nav.scss")

const Nav = () => (

    <div className="nav">
    <ul>
      <li><Link to="/" activeClassName="nav__activePage">HOME</Link></li>
      <li><Link to="/about" activeClassName="nav__activePage">ABOUT</Link></li>
      <li><Link to="/blog" activeClassName="nav__activePage">BLOG</Link></li>
      <li><Link to="/instagram" activeClassName="nav__activePage">INSTAGRAM</Link></li>
      {/* <li><Link to="" activeClassName="nav__activePage">ESSENTIALS</Link></li>
      <li><Link to="" activeClassName="nav__activePage">CURRENTLY READING</Link></li> */}
    </ul>
  </div>
)

export default Nav