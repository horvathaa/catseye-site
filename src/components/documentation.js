import '../App.css'

const firstAnnotation = [
    {
        name: 'Open Your Code and Catseye',
        description:
            'If you do not already have a file open, open a code file or project folder. \nClick File then “Open File” or “Open Folder”. \nNext, open Catseye - you can do this either by using the Command Palette or by using a keyboard shortcut. \nTo open Catseye with the keyboard shortcut, press Ctrl/Cmd+Shift+A. \nTo open with the Command Palette, use the keyboard shortcut Ctrl/Cmd + Shift + P or click “View” on the top bar, then “Command Palette”. In the Command Palette, click "Catseye: Launch Catseye".\n Note that Catseye works like any other pane in Visual Studio Code -- this means you can drag, resize, open, and close the pane as you wish.',
        image: './catseye-open.png',
        imageAlt:
            'VS Code with two panes open -- code in the left pane and Catseye in the right pane',
    },
    {
        name: 'Select the Code You Want to Annotate',
        description:
            'Select the code you would like to annotate then, in the right-click menu, select "Catseye: Create Annotation".\n You can also use the keyboard shortcut "Ctrl/Cmd+Alt+S" to make an annotation.',
        image: './catseye-right-click.png',
        imageAlt:
            'JavaScript code is selected and a context menu is open above the code, with the cursor hovering over the menu option "Catseye: Create Annotation".',
    },
    {
        name: 'Write Your Annotation',
        description:
            'The Catseye pane should update with the code you selected and a text box where you can add your annotation.\n When posting, you can also choose whether or not to share your annotation with your teammates, and (optionally) label whether this annotation is a question, task, issue, or proposal and whether this annotation should be pinned. \n You can also add an additional code snippet (or code "anchor") to the annotation by clicking the anchor button.',
        image: './catseye-new-annotation.png',
        imageAlt:
            'A code snippet, some labels, and a text box are shown with the user having added the text "Considering renaming this function" in the text box.',
    },
    {
        name: 'Ta-da!',
        description:
            'The Catseye pane should update with your new annotation -- it will initially appear collapsed and clicking on the annotation will expand it, with the expanded version shown in the screenshot. \n In the code editor, your annotated code will have a light gray highlight around it and hovering over the highlight will show your annotation text.',
        image: './catseye-published-annotation.png',
        imageAlt:
            'VS Code with two panes open -- code in the left pane and Catseye in the right pane with the newly-created annotation open and visible.',
    },
]

function DocumentationSnippet({ title, steps }) {
    return (
        <div className="lg:text-center">
            <h2 className="mt-2 text-3xl font-bold leading-8 tracking-tight text-lime-700 sm:text-4xl">
                {title}
            </h2>
            <div className="mt-10">
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
                                        className="mt-2 ml-16 font-sans text-base text-gray-500 mt-1 text-base text-gray-900 sm:col-span-2 sm:mt-0"
                                    >
                                        <p className="text-lg font-bold leading-6 text-gray-900">
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
    src: './catseye-detailed-annotation-numbered.png',
    alt: 'An annotation with two code anchors, text saying "consider renaming this function", and a reply from a collaborator saying "I think we should call it wipeCanvase since that is what the code is actually doing -- see second anchor".',
}

const annotationDeepDiveList = [
    {
        number: '1',
        description:
            "The original author of the annotations's name and profile picture, along with the time at which the annotation was originally created, and when it was last edited. Clicking on the username will open the user's GitHub page.",
    },
    {
        number: '2',
        description:
            'Operations a user can perform on an annotation -- this includes (from left to right) adding a new code anchor to the annotation, pinning the annotation, resolving the annotation, and deleting the annotation. You can add a new anchor to your annotation by selecting some code, then clicking the anchor button. A pinned annotation will ignore all filters such that it is always accessible, and its code anchor(s) can be navigated to using a keyboard shortcut or using the Catseye context menu. Resolving an annotation is like resolving a Google Doc comment, in that it will remove the annotation but be archived. Deleting an annotation removes the annotation.',
    },
    {
        number: '3',
        description:
            'The annotation\'s first code anchor. The top of the code anchor shows where the anchor point is located -- in this case, the anchor is in the "space-invaders.js" file, on line 497, and was made at 14:50 on September 7th. The annotated code is shown below, with the text in bold being what the user actually annotated (in this case, "function preDrawImage()") and the lighter green lines show some of the surrounding code. Clicking on the code anchor will navigate to that particular line(s) of code. Code anchors are updated on every keystroke, so if the user is actively editing, the anchor will reflect those changes.',
    },
    {
        number: '4',
        description:
            'Each anchor is versioned, meaning we capture a version of each anchor at every Git commit. These prior versions can be viewed by clicking the dots below the anchor, like a photo carousel.',
    },
    {
        number: '5',
        description: 'A second anchor attached to this annotation.',
    },
    {
        number: '6',
        description:
            'The different, optional labels that can be assigned to an annotation. This annotation is labeled as a "proposal".',
    },
    {
        number: '7',
        description:
            'The edit button for the annotation -- only the original author of an annotation may edit it.',
    },
    {
        number: '8',
        description:
            'The annotation text body -- in this case, the user proposed renaming "preDrawImages" to something else.',
    },
    {
        number: '9',
        description:
            'A reply to the original annotation by another user -- in this case, "cat" suggested a new name for the function and added an anchor pointing to where the function is invoked.',
    },
    {
        number: '10',
        description:
            'The reply field -- the original author is replying to "cat" here. ',
    },
]

export function DeepDive({ steps, image, title }) {
    return (
        <div className="lg:text-center">
            <h2 className="mt-2 text-3xl font-bold leading-8 tracking-tight text-lime-700 sm:text-4xl">
                {title}
            </h2>
            <div className="mt-10 m-2 px-4 py-5 flex flex-col justify-items-center items-center">
                <img
                    src={image.src}
                    className="h-1/2 w-1/2 rounded-md mb-10"
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
                                key={feature.description}
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
                                        className="mt-2 ml-16 font-sans text-base text-gray-500 mt-1 text-base text-gray-900 sm:col-span-2 sm:mt-0 text-align"
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

export default function Documentation() {
    return (
        <div className="relative overflow-hidden bg-white">
            <div className="mx-auto max-w-7xl">
                <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">
                    <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
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
                            steps={firstAnnotation}
                        />
                        <DeepDive
                            title={'What is an Annotation?'}
                            steps={annotationDeepDiveList}
                            image={annotationDeepDiveImage}
                        />
                    </main>
                </div>
            </div>
        </div>
    )
}
