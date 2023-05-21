import React from 'react'
import { Header } from './components/Header'
import { MadeForYou } from './components/MadeForYou'
import { MonitorFromAround } from './components/MonitorFromAround'

export const App: React.FC = () => {
    return (
        <>
            <Header />
            <MadeForYou />
            <MonitorFromAround />
        </>
    )
}
