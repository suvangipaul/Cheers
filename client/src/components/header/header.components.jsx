import React from 'react'
import './header.styles.css'
import { useDesoAuth } from '../../context/desoauthcontext'
const Header = () => {
  const { user, LoginDeso, LogoutDeso } = useDesoAuth()
  console.log(user)
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
        { !user && (
          <div>
            <button className='connect' onClick={LoginDeso}>Connect Wallet</button>
          </div>
        )}
        {
          user && (
          <div>
            <button className='connect' onClick={LogoutDeso && console.log(user)}>Disconnect</button>
          </div>
          )
        }
        
    </div>
  )
}

export default Header