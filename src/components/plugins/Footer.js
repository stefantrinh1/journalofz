import React from "react";
import ("./Footer.scss")

const Footer = () => (
        
  <footer>
    © {new Date().getFullYear()},
    {` `}
    <a href="https://www.gatsbyjs.org">Journal of Z</a>
  </footer>

)

export default Footer