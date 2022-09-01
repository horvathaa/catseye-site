/* This example requires Tailwind CSS v2.0+ */

import './App.css'

import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Hero from './components/hero'
import FeatureList from './components/FeatureList'
import GetStarted from './components/getStarted'

const navigation = [
    { name: 'Documentation', href: '#' },
    { name: 'Get Started', href: '#' },
]

// https://tailwindcss.com/docs/customizing-colors

function App() {
    return (
        <>
            <Hero />
            <FeatureList />
            <GetStarted />
        </>
    )
}

export default App
