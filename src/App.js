import './App.css'

import Hero from './components/hero'
import { Navigation } from './components/navigation'
import FeatureList from './components/FeatureList'
import About from './components/about'
import GetStarted from './components/getStarted'
import Documentation from './components/documentation/documentation'
import Footer from './components/footer'
import { scrollToId } from './components/documentation/documentationNavBar'
import * as React from 'react'

// https://tailwindcss.com/docs/customizing-colors

function App() {
    const [viewing, _setViewing] = React.useState('home')
    const [scrollTo, setScrollTo] = React.useState(false)

    const setViewing = (newViewing) => {
        if (newViewing === 'home-getStarted') {
            // const div = document.getElementById('getStarted')
            // div?.scrollIntoView({
            //     behavior: 'smooth',
            //     block: 'start',
            //     inline: 'center',
            // })
            scrollToId('getStarted')
            _setViewing('home')
            return
        } else if (newViewing === 'documentation-makeYourFirstAnnotation') {
            _setViewing('documentation')
            setScrollTo(true)
            return
        }

        _setViewing(newViewing)
    }

    const getView = () => {
        switch (viewing) {
            case 'home': {
                return (
                    <>
                        <Hero setViewing={setViewing} />
                        <FeatureList />
                        <GetStarted setViewing={setViewing} />
                    </>
                )
            }
            case 'documentation': {
                return (
                    <Documentation
                        scrollTo={scrollTo}
                        setScrollTo={setScrollTo}
                    />
                )
            }
            case 'about': {
                return <About setViewing={setViewing} />
            }
            default: {
                return (
                    <>
                        <Hero setViewing={setViewing} />
                        <FeatureList />
                        <GetStarted setViewing={setViewing} />
                    </>
                )
            }
        }
    }

    return (
        <>
            <Navigation setViewing={setViewing} viewing={viewing} />
            {getView()}
            <Footer setViewing={setViewing} viewing={viewing} />
        </>
    )
}

export default App
