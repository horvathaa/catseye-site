/* This example requires Tailwind CSS v2.0+ */

import './App.css'

import Hero, { Navigation } from './components/hero'
import FeatureList from './components/FeatureList'
import GetStarted from './components/getStarted'
import Documentation from './components/documentation/documentation'
import Footer from './components/footer'
import * as React from 'react'

// https://tailwindcss.com/docs/customizing-colors

function App() {
    const [viewing, _setViewing] = React.useState('home')
    const [scrollTo, setScrollTo] = React.useState(false)

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
        } else if (newViewing === 'documentation-makeYourFirstAnnotation') {
            _setViewing('documentation')
            setScrollTo(true)
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
                    <GetStarted setViewing={setViewing} />
                </>
            ) : (
                <Documentation scrollTo={scrollTo} setScrollTo={setScrollTo} />
            )}
            <Footer />
        </>
    )
}

export default App
