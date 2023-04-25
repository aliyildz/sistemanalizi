import React from 'react'
import { Link } from 'react-router-dom'
import headerLogo from "../assets/images/berber x.png"

const Header = () => {
  return (
    <header className='header'>
        <div className="container">
            <a href='#!' className="logo">
                <img src={headerLogo} alt="Header logo" />
            </a>
            <nav className='navbar'>
                <a href="#home">Anasayfa</a>
                <a href="#about">Hakkımızda</a>
                <a href="#prices">Fiyatlar</a>
                <Link to='/randevu'>
                    <button>Randevu Al</button>
                </Link>
            </nav>
        </div>
    </header>
)
}

export default Header