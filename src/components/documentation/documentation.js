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
    vscodeEditorDeepDiveImage,
    vscodeEditorDeepDiveList,
} from './documentationConstants'
import '../../App.css'

export const sectionIds = [
    { id: 'makeYourFirstAnnotation', title: 'Making Your First Annotation' },
    { id: 'whatIsAnAnnotation', title: 'What is an Annotation?' },
    { id: 'catseyePane', title: 'The Catseye Pane' },
    { id: 'catseyeVscodeEditor', title: 'Catseye in the VS Code Editor' },
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

    const initViewports = () => {
        let newViewports = new Map()
        sectionIds.forEach((sec) => {
            newViewports.set(sec.id, sec.id === 'makeYourFirstAnnotation')
        })
        setNavInView(newViewports)
    }

    const getViewportInRange = (id, pos) => {
        const el = document.querySelector('.' + id)
        const rect = el.getBoundingClientRect()
        return rect.bottom >= 0 && rect.top <= pos
    }

    return (
        <div className="relative bg-white">
            <div className="mx-auto flex max-w-screen-2xl">
                <SideNavigationBar navInView={navInView} />
                <div className="relative flex z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">
                    <main className="mx-auto mt-4 w-4/5">
                        <div className="lg:text-center p-4">
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
                        <DeepDive
                            title={'Catseye in the VS Code Editor'}
                            id={'catseyeVscodeEditor'}
                            steps={vscodeEditorDeepDiveList}
                            image={vscodeEditorDeepDiveImage}
                        />
                    </main>
                </div>
            </div>
        </div>
    )
}
