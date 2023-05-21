import React from 'react'
import { CheckCircle } from '@phosphor-icons/react'

import '../styles/monitorfromaround.sass'

export const MonitorFromAround: React.FC = () => {
    return (
        <section className="container--full monitor">
            <div className="container-monitor container">
                <div className="main-content">
                    <div className="left">
                        <h1>Monitor from around the world</h1>
                        <p>
                            Pulsetic now monitors from more data centers around the world to guarantee redundancy and
                            localize outages. We`ll show in which part of the world your website is down or slow.
                        </p>
                    </div>
                    <div className="right">
                        <img src="../src/assets/monitor.svg" alt="monitor" />
                    </div>
                </div>
                <div className="bottom-content-wraper">
                    <div className="info-box">
                        <div className="icon">
                            <CheckCircle size={40} color="#27ae60" />
                        </div>
                        <p>Get detailed regional information, like uptime or response time</p>
                    </div>
                    <div className="info-box">
                        <div className="icon">
                            <CheckCircle size={40} color="#27ae60" />
                        </div>
                        <p>Avoid false positives alerts if one data center loses connection</p>
                    </div>
                    <div className="info-box">
                        <div className="icon">
                            <CheckCircle size={40} color="#27ae60" />
                        </div>
                        <p>Know when your website is down in a certain region</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
