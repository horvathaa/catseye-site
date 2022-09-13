import React from 'react'
import { DocumentationSnippet } from './documentationSnippet'
import { SideNavigationBar } from './documentationNavBar'
import { DeepDive } from './documentationDeepDive'
import {
    firstAnnotation,
    annotationDeepDiveList,
    annotationDeepDiveImage,
    sidebarDeepDiveList,
    sidebarDeepDiveImage,
} from './documentationConstants'
import '../../App.css'

export const sectionIds = [
    { id: 'makeYourFirstAnnotation', title: 'Making Your First Annotation' },
    { id: 'whatIsAnAnnotation', title: 'What is an Annotation?' },
    { id: 'catseyePane', title: 'The Catseye Pane' },
]

export default function Documentation({ scrollTo, setScrollTo }) {
    const [navInView, setNavInView] = React.useState(new Map())

    const updateNavInView = React.useCallback((pos) => {
        let newViewports = new Map()
        sectionIds.forEach((sec) => {
            newViewports.set(sec.id, getViewportInRange(sec.id, pos))
        })
        return newViewports
    }, [])

    const handleScroll = React.useCallback(() => {
        setNavInView(updateNavInView(window.scrollY))
    }, [setNavInView, updateNavInView])

    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        initViewports()
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [handleScroll])

    const initViewports = () => {
        let newViewports = new Map()
        sectionIds.forEach((sec) => {
            newViewports.set(sec.id, sec.id === 'makeYourFirstAnnotation')
        })
        setNavInView(newViewports)
    }

    const getViewportInRange = (id, pos) => {
        const el = document.querySelector('.' + id)
        console.log(
            'im losing it scoob',
            el,
            'pos',
            pos,
            'el.getBoundingClientRect()',
            el.getBoundingClientRect()
        )
        const rect = el.getBoundingClientRect()
        return rect.bottom >= 0 && rect.top <= pos
    }

    React.useEffect(() => {
        if (scrollTo) {
            const div = document.getElementById('makeYourFirstAnnotation')
            div?.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'center',
            })
            setScrollTo(false)
        }
    }, [scrollTo, setScrollTo])

    return (
        <div className="relative bg-white">
            <div className="mx-auto max-w-screen-2xl">
                <SideNavigationBar navInView={navInView} />
                <div className="relative z-10 pl-[11.5rem] pb-8 sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">
                    <main className="mx-auto mt-4">
                        <div className="lg:text-center">
                            <h2 className="text-lg font-semibold text-lime-600">
                                Documentation
                            </h2>
                            <p className="text-lg font-medium leading-6 text-gray-900 mt-2">
                                With Catseye, you can create and manage your
                                code-related information with annotations. Here,
                                we will take you through some of the basics.
                            </p>
                        </div>

                        <DocumentationSnippet
                            title={'Making Your First Annotation'}
                            id={'makeYourFirstAnnotation'}
                            steps={firstAnnotation}
                        />
                        <DeepDive
                            title={'What is an Annotation?'}
                            id={'whatIsAnAnnotation'}
                            steps={annotationDeepDiveList}
                            image={annotationDeepDiveImage}
                        />
                        <DeepDive
                            title={'The Catseye Pane'}
                            id={'catseyePane'}
                            steps={sidebarDeepDiveList}
                            image={sidebarDeepDiveImage}
                        />
                    </main>
                </div>
            </div>
        </div>
    )
}
