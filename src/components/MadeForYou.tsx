import React from 'react'
import { RocketLaunch, Suitcase, ShoppingCart, Hammer } from '@phosphor-icons/react'

import '../styles/madeforyou.sass'

export const MadeForYou: React.FC = () => {
    return (
        <section className="container--full">
            <div className="container--services ">
                <div className="container--services__wrapper container">
                    <h2 className="title">Made for you —</h2>
                    <div className="services">
                        <div>
                            <RocketLaunch size={32} color="#27ae60" />
                            <h6>Startups</h6>
                            <p>You’ve just launched your project, and want to minimise risk of downtime</p>
                        </div>
                        <div>
                            <Suitcase size={32} color="#27ae60" />
                            <h6>Business</h6>
                            <p>You need to avoid lost revenue from a website outage</p>
                        </div>
                        <div>
                            <ShoppingCart size={32} color="#27ae60" />
                            <h6>E-Commerce</h6>
                            <p>You need to keep your online retail business running 24/7</p>
                        </div>
                        <div>
                            <Hammer size={32} color="#27ae60" />
                            <h6>Developers</h6>
                            <p>You need advanced settings to set up requests and responses</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
