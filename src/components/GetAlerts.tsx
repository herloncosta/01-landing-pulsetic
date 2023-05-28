import React from 'react'
import '../styles/getalerts.sass'
import { ChatCircleDots, EnvelopeSimple, Phone, SlackLogo, TelegramLogo } from '@phosphor-icons/react'

import getAlerts from '../assets/getAlerts.svg'

export const GetAlerts: React.FC = () => {
    return (
        <section className="getalerts--container container--full">
            <div className="getalerts--container__wrapper container">
                <div className="left">
                    <h2>Get alerts in a way you prefer</h2>
                    <p>
                        When your site is down, we send notifications in a way that suits you so you can act as fast as
                        possible and minimise any downtime. Receive instant alerts via email, SMS, Slack and more to you
                        and your&nbsp;teammates.
                    </p>
                    <div className="icons">
                        <SlackLogo size={32} color='#26AD60'/>
                        <TelegramLogo size={32} color='#26AD60'/>
                        <EnvelopeSimple size={32} color='#26AD60'/>
                        <ChatCircleDots size={32} color='#26AD60'/>
                        <Phone size={32} color='#26AD60'/>
                    </div>
                </div>
                <div className="right">
                    <div className="image">
                        <img src={getAlerts} alt="get alerts image" />
                    </div>
                </div>
            </div>
        </section>
    )
}
