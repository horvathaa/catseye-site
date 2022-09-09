/* This example requires Tailwind CSS v2.0+ */

import './App.css'

import Hero, { Navigation } from './components/hero'
import FeatureList from './components/FeatureList'
import GetStarted from './components/getStarted'
import Documentation from './components/documentation'
import Footer from './components/footer'
import * as React from 'react'

// https://tailwindcss.com/docs/customizing-colors

function App() {
    const [viewing, _setViewing] = React.useState('home')

    const setViewing = (newViewing) => {
        if (newViewing === 'home-getStarted') {
            const div = document.getElementById('getStarted')
            div?.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'center',
            })
            _setViewing('home')
            return
        }
        _setViewing(newViewing)
    }

    return (
        <>
            <Navigation setViewing={setViewing} viewing={viewing} />
            {viewing === 'home' ? (
                <>
                    <Hero setViewing={setViewing} />
                    <FeatureList />
                    <GetStarted />
                </>
            ) : (
                <Documentation />
            )}
            <Footer />
        </>
    )
}

export default App
