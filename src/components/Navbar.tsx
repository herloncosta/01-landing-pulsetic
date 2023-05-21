import React, { useState } from 'react'
import '../styles/navbar.sass'

export const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="nav-container container">
            <div className="nav-content">
                <div className="left">
                    <h1>pulsetic</h1>
                </div>
                <div className="right nav-links">
                    <a href="#">Log In</a>
                    <a href="#">Sign Up</a>
                    <a href="#" className="btn-submenu" onClick={() => setIsOpen(!isOpen)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </a>
                </div>
                <div className={`sub-menu-content ${isOpen ? 'show' : ''}`}>
                    <a href="#">Back Home</a>
                    <a href="#">Signup</a>
                    <a href="#">Login</a>
                    <a href="#">Pricing</a>
                    <a href="#">Status Pages</a>
                    <a href="#">Badges</a>
                    <a href="#">Affiliates</a>
                    <a href="#">Terms</a>
                    <a href="#">Privacy</a>
                    <a href="#">Cookies</a>
                    <a href="#">Help</a>
                </div>
            </div>
        </nav>
    )
}
