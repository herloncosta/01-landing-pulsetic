import React from 'react'
import '../styles/BeautifulPublic.sass'

import beautifulPublic from '../assets/BeautifulPublic.svg'

export const BeautifulPublic: React.FC = () => {
    return(
        <section className='container--full container-full-beautiful'>
            <div className="container content-beautiful">
                <div className="left">
                    <h2 className='title-beautiful'>Beautiful public status pages</h2>
                    <p className='info-beautiful'>Create public status pages to show how your website is performing. A status page is a way of communicating between you and your customers. Customize colors, add your logo or even link your custom domain. Send status updates via an email to your Status page subscribers.</p>
                    <button className='btn-beautiful'>Learn More</button>
                </div>
                <div className="right">
                    <div className="img">
                        <img src={beautifulPublic} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}