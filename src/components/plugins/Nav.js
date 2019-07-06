import { Link } from "gatsby";
import React from "react";
import ("./Nav.scss")

const Nav = () => (

    <div className="nav">
    <ul>
      <li><Link to="/" activeClassName="nav__activePage">Home</Link></li>
      <li><Link to="/about" activeClassName="nav__activePage">About</Link></li>
      <li><Link to="/blog" activeClassName="nav__activePage">Blog</Link></li>
      <li><Link to="/instagram" activeClassName="nav__activePage">Instagram</Link></li>
      <li><Link to="" activeClassName="nav__activePage">Essentials</Link></li>
      <li><Link to="" activeClassName="nav__activePage">Currently Reading</Link></li>
    </ul>
  </div>
)

export default Nav