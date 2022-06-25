import React from 'react'
import './header.styles.css'

const Header = () => {
  return (
    <div className="navbar">
      <div className="brand-logo">
        Cheers!
      </div>
      <div className="nav_options">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/explore">Explore</a>
          </li>
          <li>
            <a href="/bar">Bar</a>
          </li>
          <li>
            <a href="/Charity">Charity</a>
          </li>
        </ul>
      </div>
        <button className='connect'>Connect Wallet</button>
    </div>
  )
}

export default Header