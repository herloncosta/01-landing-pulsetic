import React from 'react'
import { Header } from './components/Header'
import { MadeForYou } from './components/MadeForYou'
import { MonitorFromAround } from './components/MonitorFromAround'
import { GetAlerts } from './components/GetAlerts'
import { BeautifulPublic } from './components/BeautifulPublic'

export const App: React.FC = () => {
    return (
        <>
            <Header />
            <MadeForYou />
            <MonitorFromAround />
            <GetAlerts />
            <BeautifulPublic />
        </>
    )
}
