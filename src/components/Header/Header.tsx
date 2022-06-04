import React from 'react'
import { Link } from 'react-router-dom'
import Search from '../Search/Search'
import ThemeBtn from '../ThemeBtn/ThemeBtn'
import './header.scss'

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-3 logo">
            <Link to="/">RAWG</Link>
          </div>
          <div className="col-9 d-flex">
            <Search />
            <ThemeBtn />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header