import '../App.css'

const adamiteAccountLink = (
    <a
        className="text-green-500 hover:text-green-400 hover:underline"
        href="https://adamite.netlify.app/Login"
    >
        here
    </a>
)
const catseyeDownloadLink = (
    <a
        className="text-green-500 hover:text-green-400 hover:underline"
        href="./catseye.vsix"
        download="catseye.vsix"
    >
        here
    </a>
)
const vscodeDownloadLink = (
    <>
        &nbsp;
        <a
            className="text-green-500 hover:text-green-400 hover:underline"
            href="https://code.visualstudio.com/download"
        >
            here
        </a>
    </>
)

const installationSteps = [
    {
        name: 'Create an Adamite Account',
        step: `If you do not already have an Adamite account, create one by clicking `,
        link: adamiteAccountLink,
        image: 'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        subSteps: [
            { step: `Click the 'Login with GitHub' button`, image: '' },
            {
                step: `You should see a pop-up from GitHub asking you if it's okay to use your account to sign in to Adamite.`,
                image: '',
            },
            {
                step: `If creating an Adamite account with GitHub worked, you should be redirected to your Adamite annotation dashboard page.`,
                image: '',
            },
        ],
    },
    {
        name: 'Download Catseye',
        step: `Download the current, stable release of Catseye `,
        link: catseyeDownloadLink,
        image: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Install Catseye',
        step: '',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        subSteps: [
            {
                step: `If you don't already have Visual Studio Code, you can install it`,
                link: vscodeDownloadLink,
                image: '',
            },
            { step: 'Open Visual Studio Code', image: '' },
            {
                step: 'Open the Extensions pane -- you can do this by either hitting Ctrl/Cmd + Shift + X or clicking the Extensions button on the left side panel',
                image: './extensions-pane.png',
            },
            {
                step: 'Click the three-dot menu in the Extensions panel',
                image: './extensions-three-dot.png',
            },
            {
                step: "Click the 'Install from VSIX...' menu option",
                image: './extensions-install-from-vsix.png',
            },
            {
                step: "Find and select the catseye.vsix file, then click 'Install' -- note that the installation may take some time. After it is finished, if Catseye does not appear in your installed extensions list as follows, then quit and restart Visual Studio Code.",
                image: '',
            },
            {
                step: "Once installed, the extension should prompt you to authenticate with GitHub -- you should see a pop-up that says 'The extension Catseye wants to sign-in using GitHub' - click 'Allow'.",
                image: '',
            },
        ],
    },
]

function GetStarted() {
    return (
        <div className="bg-white py-12" id="getStarted">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                        Installing
                    </p>
                </div>
                <ul className="divide-y divide-gray-200">
                    {installationSteps.map((install) => (
                        <li key={install.name} className="py-4 flex">
                            <div className="ml-3">
                                <p className="text-base font-medium text-gray-900">
                                    {install.name}
                                </p>
                                <p className="text-base font-normal text-gray-800">
                                    {install.step}{' '}
                                    {install.link ? install.link : null}
                                </p>

                                {install.subSteps ? (
                                    <ul className="ml-4">
                                        {install.subSteps.map((ss) => {
                                            const between = ss.link
                                                ? ''
                                                : 'w-full'

                                            return (
                                                <li
                                                    key={ss.step}
                                                    className="py-4 flex w-full content-between"
                                                >
                                                    <p
                                                        style={{
                                                            alignItems: '',
                                                        }}
                                                        className={
                                                            'text-base font-normal text-gray-800 flex justify-between ' +
                                                            between
                                                        }
                                                    >
                                                        {ss.step}
                                                        {ss.link
                                                            ? ss.link
                                                            : null}
                                                        {ss.image ? (
                                                            <img
                                                                className="h-25 w-25 p-2"
                                                                src={ss.image}
                                                                alt={ss.step}
                                                            />
                                                        ) : null}
                                                    </p>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                ) : null}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default GetStarted
