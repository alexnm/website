import React from 'react'
import { Link } from 'gatsby'
import './header.css'

const Header = ({ siteTitle }) => (
  <header className="header">
    <div className="header-content">
      <Link to="/" className="header-link">
        {siteTitle}
      </Link>
      <nav className="navbar">
        <Link className="header-link" to="/training">
          Training
        </Link>
        <Link className="header-link" to="/speaking">
          Speaking
        </Link>
        <Link className="header-link" to="/mentoring">
          Mentoring
        </Link>
        <a className="header-link" href="mailto:alex.n.moldovan@gmail.com">
          Contact
        </a>
      </nav>
    </div>
  </header>
)

export default Header
