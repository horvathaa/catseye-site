import React from 'react'
import '../App.css'

const firstAnnotation = [
    {
        name: 'Open Your Code and Catseye',
        description: (
            <ul className="list-disc list-inside m-2">
                <li>
                    If you do not already have a file open, open a code file or
                    project folder by clicking "File" then "Open File" or "Open
                    Folder".
                </li>
                <li>
                    Next, open Catseye - you can do this either by using the
                    Command Palette or by using a keyboard shortcut.
                </li>
                <ul className="list-disc list-inside ml-4">
                    <li>
                        To open Catseye with the keyboard shortcut, press
                        Ctrl/Cmd+Shift+A.
                    </li>
                    <li>
                        To open with the Command Palette, use the keyboard
                        shortcut Ctrl/Cmd + Shift + P or click “View” on the top
                        bar, then “Command Palette”. In the Command Palette,
                        click "Catseye: Launch Catseye".
                    </li>
                </ul>
                <li>
                    Note that Catseye works like any other pane in Visual Studio
                    Code -- this means you can drag, resize, open, and close the
                    pane as you wish.
                </li>
            </ul>
        ),

        // 'If you do not already have a file open, open a code file or project folder. \nClick File then “Open File” or “Open Folder”. \nNext, open Catseye - you can do this either by using the Command Palette or by using a keyboard shortcut. \nTo open Catseye with the keyboard shortcut, press Ctrl/Cmd+Shift+A. \nTo open with the Command Palette, use the keyboard shortcut Ctrl/Cmd + Shift + P or click “View” on the top bar, then “Command Palette”. In the Command Palette, click "Catseye: Launch Catseye".\n Note that Catseye works like any other pane in Visual Studio Code -- this means you can drag, resize, open, and close the pane as you wish.',
        image: './catseye-open.png',
        imageAlt:
            'VS Code with two panes open -- code in the left pane and Catseye in the right pane',
    },
    {
        name: 'Select the Code You Want to Annotate',
        description: (
            <ul className="list-disc list-inside m-2">
                <li>
                    Select the code you would like to annotate then, in the
                    right-click menu, select "Catseye: Create Annotation".
                </li>
                <li>
                    You can also use the keyboard shortcut "Ctrl/Cmd+Alt+S" to
                    make an annotation.
                </li>
            </ul>
        ),
        // 'Select the code you would like to annotate then, in the right-click menu, select "Catseye: Create Annotation".\n You can also use the keyboard shortcut "Ctrl/Cmd+Alt+S" to make an annotation.',
        image: './catseye-right-click.png',
        imageAlt:
            'JavaScript code is selected and a context menu is open above the code, with the cursor hovering over the menu option "Catseye: Create Annotation".',
    },
    {
        name: 'Write Your Annotation',
        description: (
            <ul className="list-disc list-inside m-2">
                <li>
                    The Catseye pane should update with the code you selected
                    and a text box where you can add your annotation.
                </li>
                <li>
                    When posting, you can also choose whether or not to share
                    your annotation with your teammates, and (optionally) label
                    whether this annotation is a question, task, issue, or
                    proposal and whether this annotation should be pinned.
                </li>
                <li>
                    You can also add an additional code snippet (or code
                    "anchor") to the annotation by clicking the anchor button.
                </li>
            </ul>
        ),
        // 'The Catseye pane should update with the code you selected and a text box where you can add your annotation.\n When posting, you can also choose whether or not to share your annotation with your teammates, and (optionally) label whether this annotation is a question, task, issue, or proposal and whether this annotation should be pinned. \n You can also add an additional code snippet (or code "anchor") to the annotation by clicking the anchor button.',
        image: './catseye-new-annotation.png',
        imageAlt:
            'A code snippet, some labels, and a text box are shown with the user having added the text "Considering renaming this function" in the text box.',
    },
    {
        name: 'Ta-da!',
        description: (
            <ul className="list-disc list-inside m-2">
                <li>
                    The Catseye pane should update with your new annotation --
                    it will initially appear collapsed and clicking on the
                    annotation will expand it, with the expanded version shown
                    in the screenshot.
                </li>
                <li>
                    In the code editor, your annotated code will have a light
                    gray highlight around it and hovering over the highlight
                    will show your annotation text.
                </li>
            </ul>
        ),
        // 'The Catseye pane should update with your new annotation -- it will initially appear collapsed and clicking on the annotation will expand it, with the expanded version shown in the screenshot. \n In the code editor, your annotated code will have a light gray highlight around it and hovering over the highlight will show your annotation text.',
        image: './catseye-published-annotation.png',
        imageAlt:
            'VS Code with two panes open -- code in the left pane and Catseye in the right pane with the newly-created annotation open and visible.',
    },
]

function DocumentationSnippet({ title, steps, id }) {
    return (
        <div className="lg:text-center border-t-2 mt-4">
            <h2
                id={id}
                className="mt-4 mb-4 font-bold leading-8 tracking-tight text-lime-600 sm:text-4xl lg:text-2xl"
            >
                {title}
            </h2>
            <div className={'mt-2 ' + id}>
                <dl
                    className="rounded-md"
                    // className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0"
                >
                    {steps.map((feature, i) => {
                        const grayOrWhite =
                            i % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                        return (
                            <div
                                key={feature.name}
                                className={
                                    grayOrWhite +
                                    ' relative px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-2 sm:px-6 rounded-md'
                                }
                            >
                                <dt>
                                    <div className="flex h-full w-full items-center justify-center rounded-md text-white">
                                        <img
                                            src={feature.image}
                                            className="h-full w-full rounded-md"
                                            aria-hidden="true"
                                            alt={feature.imageAlt}
                                        />
                                    </div>
                                </dt>
                                <dt>
                                    <pre
                                        style={{
                                            whiteSpace: 'pre-wrap',
                                        }}
                                        className="mt-2 ml-16 text-left font-sans text-base text-gray-500 mt-1 text-base text-gray-900 sm:col-span-2 sm:mt-0"
                                    >
                                        <p className="text-lg text-center font-bold leading-6 text-gray-900">
                                            {feature.name}
                                        </p>
                                        {feature.description}
                                    </pre>
                                </dt>
                            </div>
                        )
                    })}
                </dl>
            </div>
        </div>
    )
}

const annotationDeepDiveImage = {
    src: './catseye-detailed-anno-v2.png',
    alt: 'An annotation with two code anchors, text saying "consider renaming this function", and a reply from a collaborator saying "I think we should call it wipeCanvase since that is what the code is actually doing -- see second anchor".',
}

const annotationDeepDiveList = [
    {
        number: <span class="dot content">1</span>,
        key: "The original author of the annotations's name and profile picture",
        description: (
            <div>
                <i className="font-medium">
                    The original author of the annotations's name and profile
                    picture
                </i>
                , along with the time at which the annotation was originally
                created, and when it was last edited. Clicking on the username
                will open the user's GitHub page.
            </div>
        ),
    },
    {
        number: <span class="dot content">2</span>,

        key: 'Operations a user can perform on an annotation',
        description: (
            <div>
                Operations a user can perform on an annotation. This includes
                (from left to right):
                <ul>
                    <li className="ml-4 mb-2 flex items-center">
                        <div className="p-2">
                            <img
                                src="./add-anchor-icon.png"
                                alt="Add anchor button"
                                className="w-auto rounded-md max-w-none"
                            ></img>
                        </div>
                        <div>
                            <i className="font-medium">
                                Adding a new code anchor to the annotation.
                            </i>{' '}
                            You can add a new code anchor by selecting some code
                            in the editor, then clicking this button. Adding a
                            new code anchor can help with creating connections
                            between different parts of your code, better
                            contextualizing your annotation or reply, and for
                            creating navigational "bookmarks" to different parts
                            of the code you find yourself going to frequently.
                        </div>
                    </li>
                    <li className="ml-4 mb-2 flex items-center">
                        <div className="p-2 flex flex-col">
                            <img
                                src="./not-pinned-pin-icon.png"
                                alt="Button to pin an annotation"
                                className="w-auto rounded-md max-w-none mb-4"
                            ></img>
                            <img
                                src="./pinned-pin-icon.png"
                                alt="Button to un-pin an annotation"
                                className="w-auto rounded-md max-w-none"
                            ></img>
                        </div>
                        <div>
                            <i className="font-medium">
                                Pinning an annotation.
                            </i>{' '}
                            You can pin an annotation by clicking the not
                            filled-in pin button. Pinning an annotation allows
                            the annotation to be seen across projects, ignore
                            any filters that you may have in place, and allows
                            you to use a keyboard shortcut to jump to the pinned
                            annotations' code anchors. When the annotation is
                            pinned, it will show the filled-in pin icon -- you
                            can un-pin the annotation by clicking the filled-in
                            pin button.
                        </div>
                    </li>
                    <li className="ml-4 mb-2 flex items-center">
                        <div className="p-2 flex flex-col">
                            <img
                                src="./unresolved-resolve-icon.png"
                                alt="Button to resolve an annotation"
                                className="w-auto rounded-md max-w-none mb-4"
                            ></img>
                            <img
                                src="./resolved-resolve-icon.png"
                                alt="Button to un-resolve an annotation"
                                className="w-auto rounded-md max-w-none"
                            ></img>
                        </div>
                        <div>
                            <i className="font-medium">
                                Resolving an annotation.
                            </i>{' '}
                            You can resolve an annotation by clicking the not
                            filled-in checkmark button. Resolving an annotation
                            removes the annotation from view, essentially
                            marking the annotation as "done". Resolved
                            annotations can be viewed by setting your filters to
                            show resolved annotations -- you can then
                            "un-resolve" the annotation by clicking the
                            filled-in checkmark button, in the case that the
                            discussion or issue is not truly resolved.
                        </div>
                    </li>
                    <li className="ml-4 mb-2 flex items-center">
                        <div className="p-2 flex flex-col">
                            <img
                                src="./delete-icon.png"
                                alt="Button to delete an annotation"
                                className="w-auto rounded-md max-w-none mb-4"
                            ></img>
                        </div>
                        <div>
                            <i className="font-medium">
                                Deleting an annotation.
                            </i>{' '}
                            You can delete an annotation by clicking the
                            trashcan button. Once an annotation is deleted, it
                            will be removed and inaccessible from Catseye. Only
                            the original author of an annotation may delete it.
                        </div>
                    </li>
                </ul>
            </div>
        ),
        // 'Operations a user can perform on an annotation -- this includes (from left to right) adding a new code anchor to the annotation, pinning the annotation, resolving the annotation, and deleting the annotation. You can add a new anchor to your annotation by selecting some code, then clicking the anchor button. A pinned annotation will ignore all filters such that it is always accessible, and its code anchor(s) can be navigated to using a keyboard shortcut or using the Catseye context menu. Resolving an annotation is like resolving a Google Doc comment, in that it will remove the annotation but be archived. Deleting an annotation removes the annotation.',
    },
    {
        number: <span class="dot content">3</span>,
        description: (
            <div>
                <i className="font-medium">
                    The metadata for the annotation's first code anchor
                </i>
                . This includes the filename (in this case,
                "space-invaders.js"), the line number (or range of line numbers,
                if it is a multi-line code anchor), what Git branch and commit
                the anchor is on, and the time at which the anchor was created
                (in this case, 16:35 on September 12th, 2022). The anchor icon
                to the right indicates that the code anchor is currently
                anchored -- we will discuss un-anchored annotations in more
                depth later.
            </div>
        ),
        key: "The metadata for the annotation's first code anchor",
    },
    {
        number: <span class="dot content">4</span>,
        description: (
            <div>
                <i className="font-medium">
                    The annotation's first code anchor
                </i>
                . The code that the user annotated (in this case,{' '}
                <code>function preDrawImages()</code>) is shown in a gray block
                with white text, while the surrounding code context is shown in
                light green. Code anchors are updated on each keystroke, meaning
                the code anchor, the surrounding code, and the line number(s)
                will be kept up to date while you are editing. Clicking on the
                code anchor will navigate you to that line of code. Code anchors
                are also automatically versioned, meaning that, on each Git
                commit, a version of the code anchor will be saved and can be
                viewed in a carousel view.
            </div>
        ),
        key: "The annotation's first code anchor",
        // 'Each anchor is versioned, meaning we capture a version of each anchor at every Git commit. These prior versions can be viewed by clicking the dots below the anchor, like a photo carousel.',
    },
    {
        number: <span class="dot content">5</span>,
        description: (
            <div>
                <i className="font-medium">
                    A second code anchor attached to this annotation
                </i>
                , in this case, a multi-line code anchor showing the context in
                which the original code anchor function is invoked . This second
                anchor seeks to better contextualize the reply another user
                made. Any user may add a code anchor to an annotation that is
                shared with them.
            </div>
        ),
        key: 'A second code anchor attached to this annotation',
    },
    {
        number: <span class="dot content">6</span>,
        description: (
            <div>
                <i className="font-medium">
                    The different, optional labels that can be assigned to an
                    annotation
                </i>
                . This annotation is labeled as a "proposal", since the user is
                proposing renaming the function. Annotations can also be marked
                as questions (in the case that a user has a question about some
                code), tasks (for lightweight task-tracking), and issues (in the
                case the user believes they found a bug in the code).
                Annotations can have multiple labels, such that, for example, an
                annotation can be both a question and an issue if the user
                believes some code is incorrect, but is not sure and wants to
                ask their collaborators. Once an annotation is labeled, these
                labels can be filtered upon to help you and your collaborators
                find any outstanding annotations that need addressing.
            </div>
        ),
        key: 'The different, optional labels that can be assigned to an annotation',
        // 'The different, optional labels that can be assigned to an annotation. This annotation is labeled as a "proposal".',
    },
    {
        number: <span class="dot content">7</span>,
        description: (
            <div>
                <i className="font-medium">
                    The edit button for the annotation
                </i>
                . Only the original author of an annotation may edit it. Editing
                an annotation allows you to change the annotation text body and
                who the annotation is visible to. An annotation can either be
                private and only viewable by the original author, or it can be
                shared with all collaborators that are on the particular GitHub
                project the annotation is associated with.
            </div>
        ),
        key: 'The edit button for the annotation',
    },
    {
        number: <span class="dot content">8</span>,
        description: (
            <div>
                <i className="font-medium">The annotation text body</i>. In this
                case, the annotation author is proposing renaming{' '}
                <code>function preDrawImages()</code>. An annotation can be
                about whatever you want -- whether it be a note to yourself, a
                question for a teammate, or just an empty space for bookmarking
                some code.
            </div>
        ),
        key: 'The annotation text body',
        // 'The annotation text body -- in this case, the user proposed renaming "preDrawImages" to something else.',
    },
    {
        number: <span class="dot content">9</span>,
        description: (
            <div>
                <i className="font-medium">
                    A reply to the original annotation by another user
                </i>
                . In this case, the user "cat" is suggesting a new name for the
                function, given the context they have provided in the second
                code anchor they added. Replies can also be edited or deleted by
                the reply's author.
            </div>
        ),
        key: 'A reply to the original annotation by another user',
        // 'A reply to the original annotation by another user -- in this case, "cat" suggested a new name for the function and added an anchor pointing to where the function is invoked.',
    },
    {
        number: <span class="dot content">10</span>,
        description: (
            <div>
                <i className="font-medium">
                    The reply field for this annotation
                </i>
                . In this case, the original author is starting a reply that
                says "Good idea!". Any user who can see an annotation may reply
                to it.
            </div>
        ),
        key: 'The reply field',
        // 'The reply field -- the original author is replying to "cat" here. ',
    },
]

export function DeepDive({ steps, image, title, id }) {
    return (
        <div className="lg:text-center lg:text-center border-t-2 mt-4">
            <h2
                id={id}
                className="mt-4 font-bold leading-8 tracking-tight text-lime-600 sm:text-4xl lg:text-2xl"
            >
                {title}
            </h2>
            <div
                className={
                    'mt-2 m-2 px-4 py-5 flex flex-col justify-items-center items-center ' +
                    id
                }
            >
                <img
                    src={image.src}
                    className="sm:h-full sm:w-full lg:h-1/2 lg:w-1/2 rounded-md mb-10"
                    aria-hidden="true"
                    alt={image.alt}
                />
                <dl
                    className="rounded-md flex flex-col justify-items-center items-center"
                    // className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0"
                >
                    {steps.map((feature, i) => {
                        const grayOrWhite =
                            i % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                        return (
                            <div
                                key={'annotation-deep-dive-' + feature.key}
                                className={
                                    grayOrWhite +
                                    ' relative h-auto w-3/4 flex px-4 py-5 sm:gap-2 sm:px-6 rounded-md'
                                }
                            >
                                <dt>
                                    <h2 className="flex text-xl h-full w-full items-center justify-center rounded-md text-gray-900">
                                        {feature.number}
                                    </h2>
                                </dt>
                                <dt>
                                    <pre
                                        style={{
                                            whiteSpace: 'pre-wrap',
                                            textAlign: 'left',
                                        }}
                                        className="mt-2 ml-4 font-sans text-base text-gray-500 mt-1 text-base text-gray-900 sm:col-span-2 sm:mt-0 text-align"
                                    >
                                        {/* <p className="text-lg font-bold leading-6 text-gray-900">
                                            {feature.name}
                                        </p> */}
                                        {feature.description}
                                    </pre>
                                </dt>
                            </div>
                        )
                    })}
                </dl>
            </div>
        </div>
    )
}

const sectionIds = [
    { id: 'makeYourFirstAnnotation', title: 'Making Your First Annotation' },
    { id: 'whatIsAnAnnotation', title: 'What is an Annotation?' },
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
        <div className="relative overflow-hidden bg-white">
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
                            {/* <h2 className="text-lg font-semibold text-lime-600 mt-2">
                                Background
                            </h2>
                            <p className="mt-2 ml-16 text-base text-gray-500">
                                Catseye allows you to create, share, and keep
                                track of your code-related information using
                                annotations. Catseye does this by using GitHub
                                to organize and share your annotations by
                                project and uses Google FireStore to store your
                                user and annotation data.
                            </p> */}
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
                    </main>
                </div>
            </div>
        </div>
    )
}

const SideNavigationBarItem = ({ id, title, navInView }) => {
    const isActive = navInView.get(id)
        ? 'text-lime-600 hover:text-lime-700 border-lime-400 border-l-2 hover:border-lime-500 '
        : 'text-slate-700 hover:text-slate-900 '
    return (
        <li
            onClick={() => {
                const div = document.getElementById(id)
                div?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                    inline: 'center',
                })
            }}
            className={
                isActive +
                'block cursor-pointer border-l pl-4 -ml-px border-transparent hover:border-slate-400'
            }
        >
            {title}
        </li>
    )
}

const SideNavigationBar = ({ navInView }) => {
    return (
        <div className="hidden lg:block fixed z-20 inset-0 top-[3.8125rem] left-[max(0px,calc(40%-45rem))] right-auto w-[19.5rem] pb-10 px-8 overflow-y-auto">
            <nav className="lg:text-sm lg:leading-6 relative">
                <div className="sticky top-0 -ml-0.5">
                    <ul>
                        <li className="mt-12 lg:mt-8">
                            <h4 className="mb-8 lg:mb-3 font-semibold text-slate-900 dark:text-slate-200">
                                Getting Started with Catseye
                            </h4>
                            <ul className="space-y-6 lg:space-y-2 border-l border-slate-100 dark:border-slate-800">
                                {sectionIds.map((sec) => (
                                    <SideNavigationBarItem
                                        key={sec.id}
                                        id={sec.id}
                                        title={sec.title}
                                        navInView={navInView}
                                    />
                                ))}
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
