import React from 'react'
import { Navbar } from './Navbar'

import '../styles/header.sass'
import bg from '../assets/bg-header.jpg'

export const Header: React.FC = () => {
    return (
        <header>
            <Navbar />
            <section className="header--container container">
                <h2 className="header--container__title">We alert you when your website is down</h2>
                <p className="header--container__subtitle">
                    Get website downtime alerts by phone call, SMS, email or Slack if your website is down. Create
                    beautiful status pages & incident management reports and keep your visitors updated.
                </p>
                <div className="header--container__buttons">
                    <a href="#" className="button-primary">
                        Try For Free
                    </a>
                    <a href="#" className="button-secondary">
                        Pricing
                    </a>
                </div>
                <p className="header--container__text-info">No credit card required, seriously.</p>
                <img src={bg} alt="image background header" />
            </section>
        </header>
    )
}
