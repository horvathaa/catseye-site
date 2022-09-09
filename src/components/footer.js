export default function Footer() {
    return (
        <footer class="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
            <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                2022{' '}
                <a
                    href="http://www.amberhorvath.com/"
                    target={'_blank'}
                    rel="noreferrer"
                    class="hover:underline"
                >
                    Amber Horvath
                </a>
                . All Rights Reserved.
            </span>
            <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                <li>
                    <button href="#" class="mr-4 hover:underline md:mr-6 ">
                        About
                    </button>
                </li>
                <li>
                    <button href="#" class="mr-4 hover:underline md:mr-6">
                        Privacy Policy
                    </button>
                </li>
                <li>
                    <button href="#" class="mr-4 hover:underline md:mr-6">
                        Licensing
                    </button>
                </li>
                <li>
                    <button href="#" class="hover:underline">
                        Contact
                    </button>
                </li>
            </ul>
        </footer>
    )
}
