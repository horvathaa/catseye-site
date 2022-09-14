export const firstAnnotation = [
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

export const annotationDeepDiveImage = {
    src: './catseye-detailed-anno-v2.png',
    alt: 'An annotation with two code anchors, text saying "consider renaming this function", and a reply from a collaborator saying "I think we should call it wipeCanvase since that is what the code is actually doing -- see second anchor".',
}

export const annotationDeepDiveList = [
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

export const sidebarDeepDiveList = [
    {
        number: <span class="dot content">1</span>,
        description: (
            <div>
                <i className="font-medium">The search bar</i>. You can search
                across your annotation's text body, the filename and file path,
                and the code anchor content. Only annotations that match the
                search query will show up in the annotation list.
            </div>
        ),
        key: 'The search bar',
    },
    {
        number: <span class="dot content">2</span>,
        description: (
            <div>
                <i className="font-medium">The Catseye menu</i>. From this
                dropdown menu, you can export your annotations into a JSON file
                called "output.json", view this documentation, and see what
                version of Catseye you are running.
            </div>
        ),
        key: 'The Catseye menu',
    },
    {
        number: <span class="dot content">3</span>,
        description: (
            <div>
                <i className="font-medium">
                    The annotation sorting and scope options
                </i>
                .{' '}
                <ul>
                    <li className="ml-4 mb-2 flex-col items-center ">
                        <div className="p-2">
                            <img
                                src="./sort-location-menu.png"
                                alt="Sort by location or time dropdown"
                                className="w-auto m-auto rounded-md max-w-none"
                            ></img>
                        </div>
                        <div>
                            You can <i className="font-medium">sort</i> your
                            annotations across two dimensions -- time and
                            location. Time will have the newest annotations at
                            the top of the list, while location will sort by
                            placing annotations that are in your
                            currently-opened file first, and sort those
                            annotations by line number, such that annotations at
                            the top of the file will be at the top of the list.
                            For annotations not in the current file, they will
                            be sorted by time. By default, Catseye sorts
                            annotations by <i>location</i>.
                        </div>
                    </li>
                    <li className="ml-4 mb-2 flex-col items-center ">
                        <div className="p-2">
                            <img
                                src="./scope-project-menu.png"
                                alt="Choose the scope of annotations you want to view -- from file, to project, to all annotations that are viewable to you"
                                className="w-auto m-auto rounded-md max-w-none"
                            ></img>
                        </div>
                        <div>
                            You can view annotations across three different{' '}
                            <i className="font-medium">scopes</i> -- annotations
                            in the current project, annotations in the current
                            file, and all annotations that are viewable to you.
                            Choosing a different scope will allow you to filter
                            and sort across that set of annotations. By default,
                            Catseye sets the annotation scope to <i>project</i>.
                        </div>
                    </li>
                </ul>
            </div>
        ),
        key: 'The annotation sorting and scope options',
    },
    {
        number: <span class="dot content">4</span>,
        description: (
            <div>
                <i className="font-medium">The annotation filtering options</i>.
                You can filter your annotations across three dimensions: who{' '}
                <i>authored</i> the annotation, the annotation <i>type</i>, and
                the <i>state</i> of the annotation.{' '}
                <ul>
                    <li className="ml-4 mb-2 flex-col items-center ">
                        <div className="p-2">
                            <img
                                src="./author-filter.png"
                                alt="Two chips for choosing either the author of the annotation or others"
                                className="w-auto m-auto rounded-md max-w-none"
                            ></img>
                        </div>
                        <div>
                            You can filter your annotations by who originally
                            authored the annotation -- either show annotations
                            only authored by yourself (i.e., your signed-in
                            GitHub account), and/or annotations authored by
                            other collaborators. In this example, the user has
                            set the filters to only show annotations written by
                            themselves, "horvathaa". By default, Catseye shows
                            annotations written both by yourself and others.
                        </div>
                    </li>
                    <li className="ml-4 mb-2 flex-col items-center ">
                        <div className="p-2">
                            <img
                                src="./type-filter.png"
                                alt="all 4 annotation types - issue, proposal, task, and question, along with untyped"
                                className="w-auto m-auto rounded-md max-w-none"
                            ></img>
                        </div>
                        <div>
                            You can filter annotations by what type they have
                            been assigned, along with showing and/or hiding
                            annotations that do not have a type. In this
                            example, the user has set their filters to show
                            every annotation type except task-type annotations.
                            By default, Catseye filters to show every annotation
                            type, along with untyped annotations.
                        </div>
                    </li>
                    <li className="ml-4 mb-2 flex-col items-center ">
                        <div className="p-2">
                            <img
                                src="./state-filter.png"
                                alt="checkboxes for including or hiding the three special states an annotation may have - 'show resolved' is selected in this case"
                                className="w-auto m-auto rounded-md max-w-none"
                            ></img>
                        </div>
                        <div>
                            You can filter your annotation dependent upon
                            whether it is in a certain state or not. You can set
                            your filters to revisit resolved annotations, only
                            show your most important pinned annotations, and
                            unanchored annotations that you want to{' '}
                            <button>reanchor</button>. By default, all 3 of
                            these checkboxes are unchecked, meaning Catseye
                            hides resolved annotations, and shows pinned and
                            unanchored annotations among all other viewable
                            annotations.
                        </div>
                    </li>
                </ul>
            </div>
        ),
        key: 'The annotation filtering options',
    },
    {
        number: <span class="dot content">5</span>,
        description: (
            <div>
                <i className="font-medium">The annotation creation view</i>.
                Catseye shows a preview of the annotation you are about to make,
                including the new code anchor (in this case,{' '}
                <code>toDataURL</code>) along with the surrounding code context.
                Optionally, you can select the annotation type, add more anchors
                and pin the annotation. This user is writing an annotation that
                says "My new annotation!". By default, annotations will be set
                to "Post to Collaborators", but can be made private by selecting
                "Post as Private" from the dropdown.
            </div>
        ),
        key: 'The new annotation creation view',
    },
    {
        number: <span class="dot content">6</span>,
        description: (
            <div>
                <i className="font-medium">The mass operation bar</i>. Catseye
                allows you to act on your annotations in batch to support easier
                information management. You can select annotations to act upon
                by clicking the checkbox to the left of an annotation (see{' '}
                <span className="dot content small-inline">9</span>
                ), or by selecting the checkbox to the left of the mass
                operation bar. For any annotation that is selected, you can
                perform the following operations:
                <ul>
                    <li className="ml-4 mb-2 flex items-center">
                        <div className="p-2">
                            <img
                                src="./merge-icon.png"
                                alt="Merge button"
                                className="w-auto rounded-md max-w-none"
                            ></img>
                        </div>
                        <div>
                            <i className="font-medium">Merge annotations.</i>{' '}
                            You can transform multiple annotations into one
                            annotation by selecting what parts of each
                            annotation you want to keep, including code anchors,
                            replies, and annotation text bodies. Mergining
                            annotations will create a new annotation, and delete
                            the annotations that were included in the merge. You
                            can read more about merging <button>here</button>.
                        </div>
                    </li>
                    <li className="ml-4 mb-2 flex items-center">
                        <div className="p-2">
                            <img
                                src="./not-pinned-pin-icon.png"
                                alt="Pin button"
                                className="w-auto rounded-md max-w-none"
                            ></img>
                        </div>
                        <div>
                            <i className="font-medium">Pin annotations.</i> Mass
                            pinning annotations will pin un-pinned annotations,
                            and will un-pin already-pinned annotations.
                        </div>
                    </li>
                    <li className="ml-4 mb-2 flex items-center">
                        <div className="p-2">
                            <img
                                src="./share-icon.png"
                                alt="Share button"
                                className="w-auto rounded-md max-w-none"
                            ></img>
                        </div>
                        <div>
                            <i className="font-medium">Share annotations.</i>{' '}
                            Sharing annotations will set all selected
                            annotations to be viewable by your teammates, if
                            they were not already set to "Post to
                            Collaborators".
                        </div>
                    </li>
                    <li className="ml-4 mb-2 flex items-center">
                        <div className="p-2">
                            <img
                                src="./unresolved-resolve-icon.png"
                                alt="Resolve button"
                                className="w-auto rounded-md max-w-none"
                            ></img>
                        </div>
                        <div>
                            <i className="font-medium">Resolve annotations.</i>{' '}
                            Resolving annotations, like mass pinning
                            annotations, will set all already-resolved
                            annotations back to the unresolved state, and will
                            resolve all unresolved annotations.
                        </div>
                    </li>
                    <li className="ml-4 mb-2 flex items-center">
                        <div className="p-2">
                            <img
                                src="./delete-icon.png"
                                alt="Delete button"
                                className="w-auto rounded-md max-w-none"
                            ></img>
                        </div>
                        <div>
                            <i className="font-medium">Delete annotations.</i>{' '}
                            Be careful when mass deleting annotations, as they
                            cannot be recovered!
                        </div>
                    </li>
                </ul>
            </div>
        ),
        key: 'The mass operation bar',
    },
    {
        number: <span class="dot content">7</span>,
        description: (
            <div>
                <i className="font-medium">A collapsed annotation</i>.
                Annotations are collapsed by default and will expand when
                clicked on. The collapsed view shows the following information
                (from left to right):
                <ul>
                    <li className="ml-4 mb-2 flex items-center">
                        <div className="p-2">
                            <img
                                src="./user-profile-icon.png"
                                alt="Small user profile icon"
                                className="w-auto rounded-md max-w-none"
                            ></img>
                        </div>
                        <div>
                            <i className="font-medium">
                                The annotation author's GitHub profile icon.
                            </i>{' '}
                        </div>
                    </li>
                    <li className="ml-4 mb-2 flex items-center">
                        <div className="p-2">
                            <img
                                src="./anchored-icon.png"
                                alt="Anchored icon"
                                className="w-auto rounded-md max-w-none"
                            ></img>
                            <img
                                src="./unanchored-icon.png"
                                alt="Unanchored icon"
                                className="w-99 mt-1 rounded-md max-w-none"
                            ></img>
                        </div>
                        <div>
                            <i className="font-medium">
                                Whether or not the annotation is currently
                                anchored.
                            </i>{' '}
                            If the annotation is anchored, it will show the top
                            icon (see{' '}
                            <span className="dot content small-inline">7</span>
                            ), while an unanchored annotation will show the
                            bottom icon (see{' '}
                            <span className="dot content small-inline">10</span>
                            ). You can read more about reanchoring an unanchored
                            annotation <button>here</button>.
                        </div>
                    </li>
                    <li className="ml-4 mb-2 flex-col items-center">
                        <div className="p-2">
                            <img
                                src="./collapsed-anchor-text.png"
                                alt="Collapsed anchor text"
                                className="w-auto m-auto rounded-md max-w-none"
                            ></img>
                        </div>
                        <div>
                            <i className="font-medium ml-2">The code anchor.</i>{' '}
                            If the annotation has multiple code anchors, the
                            collapsed view will show the code from the first
                            code anchor. If the code anchor is too long (i.e.,
                            over 60 characters), the collapsed view will show a
                            truncated version of the code.
                        </div>
                    </li>
                    <li className="ml-4 mb-2 flex-col items-center">
                        <div className="p-2">
                            <img
                                src="./collapsed-annotation-text.png"
                                alt="Collapsed annotation text"
                                className="w-auto m-auto rounded-md max-w-none"
                            ></img>
                        </div>
                        <div>
                            <i className="font-medium ml-2">
                                The annotation text body.
                            </i>
                        </div>
                    </li>
                    When collapsed, users can also perform some operations on
                    their annotations. These operations include:
                    <li className="ml-4 mb-2 flex items-center">
                        <div className="p-2">
                            <img
                                src="./pinned-pin-icon.png"
                                alt="Pinned icon"
                                className="w-auto rounded-md max-w-none"
                            ></img>
                        </div>
                        <div>
                            <i className="font-medium">
                                Pinning an annotation.
                            </i>{' '}
                            This annotation is pinned. Clicking on the button
                            will unpin the annotation.
                        </div>
                    </li>
                    <li className="ml-4 mb-2 flex items-center">
                        <div className="p-2">
                            <img
                                src="./resolved-resolve-icon.png"
                                alt="Resolved icon"
                                className="w-auto rounded-md max-w-none"
                            ></img>
                        </div>
                        <div>
                            <i className="font-medium">
                                Resolving an annotation.
                            </i>{' '}
                            This annotation is resolved. Clicking on the button
                            will unresolve the annotation.
                        </div>
                    </li>
                    <li className="ml-4 mb-2 flex items-center">
                        <div className="p-2">
                            <img
                                src="./delete-icon.png"
                                alt="Delete icon"
                                className="w-auto rounded-md max-w-none"
                            ></img>
                        </div>
                        <div>
                            <i className="font-medium">
                                Deleting an annotation.
                            </i>{' '}
                            Clicking on the button will delete the annotation.
                        </div>
                    </li>
                </ul>
            </div>
        ),
        key: 'A collapsed annotation',
    },
    {
        number: <span class="dot content">8</span>,
        description: (
            <div>
                <i className="font-medium">An expanded annotation</i>. You can
                collapse an annotation by clicking the top part of the
                annotation (e.g., where the{' '}
                <span className="dot content small-inline">8</span> is). You can
                read more about all of the different parts of an annotation{' '}
                <button>here</button>.
            </div>
        ),
        key: 'An expanded annotation',
    },
    {
        number: <span class="dot content">9</span>,
        description: (
            <div>
                <i className="font-medium">
                    The annotation selection checkboxes
                </i>
                . The annotation at{' '}
                <span className="dot content small-inline">8</span> is not
                selected, while the annotation at{' '}
                <span className="dot content small-inline">10</span> is
                selected. Selected annotations can be operated on with the mass
                operation bar.
            </div>
        ),
        key: 'The annotation selection checkboxes',
    },
]

export const sidebarDeepDiveImage = {
    src: './catseye-pane-detailed-numbered-v2.png',
    alt: 'The Catseye pane with numbers calling out the search bar, dropdown menu, filters, sorts, new annotation dialogue, mass operations bar, a collapsed anotation, an open annotation, checkboxes for selecting annotations, and another unanchored, collapsed annoation.',
}
