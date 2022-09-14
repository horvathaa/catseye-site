import '../App.css'

const adamiteAccountLink = (
    <a
        className="text-green-500 hover:text-green-400 hover:underline"
        href="https://adamite.netlify.app/Login"
        target={'_blank'}
        rel="noreferrer"
    >
        here
    </a>
)
const catseyeDownloadLink = (
    <a
        className="text-green-500 hover:text-green-400 hover:underline"
        // href="./catseye.vsix" -- would be better to host locally but too big rn sigh
        href="https://drive.google.com/file/d/1LWNAByCSimZSbs0P976K-Ri8LhuRGJLH/view?usp=sharing"
        target={'_blank'}
        rel="noreferrer"
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
            target={'_blank'}
            rel="noreferrer"
        >
            here
        </a>
    </>
)

const installationSteps = [
    {
        name: 'Create an Adamite Account',
        description: (
            <ul className="list-disc list-inside m-2">
                <li>
                    If you do not already have an Adamite account, create one by
                    clicking {adamiteAccountLink}.
                </li>
                <li>
                    You should see a pop-up from GitHub asking you if it's okay
                    to use your account to sign in to Adamite.
                </li>
                <li>
                    If creating an Adamite account with GitHub worked, you
                    should be redirected to your Adamite annotation dashboard
                    page.
                </li>
            </ul>
        ),
        step: ` `,
    },
    {
        name: 'Download Catseye',
        description: (
            <p>
                Download the current, stable release of Catseye{' '}
                {catseyeDownloadLink}.
            </p>
        ),
        step: ` `,
        // link: ,
    },
    {
        name: 'Install Catseye',
        description: (
            <ul className="list-inside m-2">
                <li className="bg-gray-200 px-4 py-5 rounded-t-xl">
                    If you do not already have Visual Studio Code, you can
                    install it{vscodeDownloadLink}.
                </li>
                <li className="bg-white px-4 py-5">Open Visual Studio Code.</li>
                <li className="bg-gray-200 px-4 py-5">
                    <div className="flex justify-between">
                        <div className="pr-4 pt-2">
                            Open the Extensions pane - you can do this by either
                            hitting Ctrl/Cmd + Shift + X or clicking the
                            Extensions button on the left side panel.
                        </div>
                        <img
                            src={'./extensions-pane.png'}
                            className={'rounded-md'}
                            alt={
                                'Screenshot showing location of extensions button in VS Code Activity Bar.'
                            }
                        />
                    </div>
                </li>
                <li className="bg-white px-4 py-5">
                    <div className="flex justify-between">
                        <div className="pr-4 pt-2">
                            Click the three-dot menu in the Extensions panel.
                        </div>
                        <img
                            src={'./extensions-three-dot.png'}
                            className={'rounded-md'}
                            alt={
                                'Screenshot showing location of three-dot menu button in VS Code Extensions Bar.'
                            }
                        />
                    </div>
                </li>
                <li className="bg-gray-200 px-4 py-5">
                    <div className="flex justify-between">
                        <div className="pr-4 pt-2">
                            Click the "Install from VSIX..." menu option.
                        </div>
                        <img
                            src={'./extensions-install-from-vsix.png'}
                            className={'rounded-md'}
                            alt={
                                'Screenshot showing location of "Install from VSIX..." option in dropdown menu.'
                            }
                        />
                    </div>
                </li>
                <li className="bg-white px-4 py-5">
                    Find and select the catseye.vsix file, then click "Install"
                    - note that the installation may take some time. After it is
                    finished, if Catseye does not appear in your installed
                    extensions list, then quit and restart Visual Studio Code.
                </li>
                <li className="bg-gray-200 px-4 py-5">
                    <div className="flex justify-between">
                        <div className="pr-4 pt-2">
                            Once installed, the extension should prompt you to
                            authenticate with GitHub - you should see a pop-up
                            that says "The extension Catseye wants to sign-in
                            using GitHub" - click "Allow".
                        </div>
                        <img
                            src={'./catseye-github-auth-popup.png'}
                            className={'rounded-md sm:w-full lg:w-2/5'}
                            alt={
                                'Screenshot showing VS Code GitHub authentication pop-up.'
                            }
                        />
                    </div>
                </li>
                <li className="bg-white px-4 py-5">
                    <div className="flex justify-between">
                        <div className="pr-4 pt-2">
                            Your default internet browser should open to a
                            GitHub webpage that displays a pop-up prompting you
                            to re-open Visual Studio Code. Click "Open Visual
                            Studio Code".
                        </div>
                        <img
                            src={'./github-auth-browser.png'}
                            className={'rounded-md sm:w-full lg:w-2/5'}
                            alt={
                                'Screenshot showing GitHub authentication pop-up in browser.'
                            }
                        />
                    </div>
                </li>
                <li className="bg-gray-200 px-4 py-5 rounded-b-xl">
                    <div className="flex justify-between">
                        <div className="pr-4 pt-2">
                            Visual Studio Code will now display a pop-up asking
                            you to open "vscode.github-authentication" - click
                            "Open". This will sign you in to your GitHub account
                            in Visual Studio Code and authenticate Catseye with
                            your GitHub account. This will complete the
                            authentication process, and you should now be able
                            to use Catseye!
                        </div>
                        <img
                            src={'./vscode-uri-auth.png'}
                            className={'rounded-md sm:w-full lg:w-2/5'}
                            alt={
                                'Screenshot showing GitHub Authentication pop-up in VS Code.'
                            }
                        />
                    </div>
                </li>
            </ul>
        ),
        step: '',
    },
]

function GetStarted({ setViewing }) {
    return (
        <div className="bg-white py-12" id="getStarted">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <h1 className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                        Installing
                    </h1>
                </div>
                <ul className="divide-y divide-gray-200">
                    {installationSteps.map((install, i) => {
                        const grayOrWhite =
                            i % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                        return (
                            <li key={install.name} className="py-4">
                                <div className="ml-3">
                                    <div
                                        className={
                                            grayOrWhite +
                                            ' relative px-4 py-5 sm:gap-2 sm:px-6 rounded-md'
                                        }
                                    >
                                        <h2 className="text-base font-medium text-gray-900">
                                            {install.name}
                                        </h2>
                                        {install.description}
                                    </div>
                                </div>
                            </li>
                        )
                    })}
                </ul>
                <div className="lg:text-center">
                    <h1 className="mt-2 font-bold leading-8 tracking-tight text-gray-800 lg:text-2xl sm:text-4xl">
                        Congratulations, you now have Catseye installed! Learn
                        how to make your first Catseye annotation{' '}
                        <button
                            className="text-green-500 hover:text-green-400 hover:underline"
                            onClick={() =>
                                setViewing(
                                    'documentation-makeYourFirstAnnotation'
                                )
                            }
                        >
                            here
                        </button>
                        .
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default GetStarted
