export default function Footer({ setViewing, viewing }) {
    return (
        <footer className="p-4 bg-white rounded-lg border-t md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                2022{' '}
                <a
                    href="http://www.amberhorvath.com/"
                    target={'_blank'}
                    rel="noreferrer"
                    className="hover:underline"
                >
                    Amber Horvath
                </a>
                . All Rights Reserved.
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                <li>
                    <svg
                        viewBox="0 0 24 24"
                        className="mr-4 h-6 w-6 fill-slate-900 cursor-pointer"
                        // href="https://www.github.com/horvathaa/catseye-vscode"
                        onClick={() =>
                            window.open(
                                'https://www.github.com/horvathaa/catseye-vscode'
                            )
                        }
                        target={'_blank'}
                        rel="noreferrer"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule={'evenodd'}
                            d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0 1 12 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2Z"
                        ></path>
                    </svg>
                </li>
                <li>
                    <button
                        onClick={() => setViewing('about')}
                        className="mr-4 hover:underline md:mr-6 "
                    >
                        About
                    </button>
                </li>
                <li>
                    <a
                        href={'https://adamite.netlify.app/'}
                        target={'_blank'}
                        rel="noreferrer"
                        className="mr-4 hover:underline md:mr-6 "
                    >
                        Adamite
                    </a>
                </li>
                <li>
                    <a
                        href="./cmu-irb-consent-jan-24-no-comp-vscode.pdf"
                        target={'_blank'}
                        rel="noreferrer"
                        className="mr-4 hover:underline md:mr-6"
                    >
                        IRB
                    </a>
                </li>
                <li>
                    <a
                        href="mailto:ahorvath@andrew.cmu.edu"
                        className="mr-4 hover:underline md:mr-6"
                    >
                        Contact
                    </a>
                </li>
                <li>
                    <a
                        href="https://forms.gle/Q2BSeAreCBAeGa29A"
                        target={'_blank'}
                        rel="noreferrer"
                        className="hover:underline"
                    >
                        Report a Bug
                    </a>
                </li>
            </ul>
        </footer>
    )
}
