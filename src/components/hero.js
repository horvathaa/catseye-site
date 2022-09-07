import '../App.css'

import { Popover } from '@headlessui/react'

const navigation = [
    { name: 'Documentation', href: 'documentation' },
    { name: 'Get Started', href: 'home-getStarted' },
]

export function Navigation({ setViewing }) {
    return (
        <Popover>
            <div className="relative px-4 pt-6 sm:px-6 lg:px-8">
                <nav
                    className="relative flex items-center justify-between sm:h-10 lg:justify-start"
                    aria-label="Global"
                >
                    <div className="flex flex-shrink-0 flex-grow items-center lg:flex-grow-0">
                        <div className="flex w-full items-center justify-between md:w-auto">
                            <button onClick={() => setViewing('home')} href="">
                                <img
                                    alt="Catseye"
                                    className="h-8 w-auto sm:h-10"
                                    src="./catseye.png"
                                />
                            </button>
                        </div>
                    </div>
                    <div className="hidden md:ml-10 md:block md:space-x-8 md:pr-4">
                        {navigation.map((item) => (
                            <button
                                onClick={() => setViewing(item.href)}
                                key={item.name}
                                className="font-medium text-gray-500 hover:text-gray-900"
                            >
                                {item.name}
                            </button>
                        ))}
                    </div>
                </nav>
            </div>
        </Popover>
    )
}

function Hero({ setViewing }) {
    return (
        <div className="relative overflow-hidden bg-white">
            <div className="mx-auto max-w-7xl">
                <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
                    <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                        <div className="sm:text-center lg:text-left">
                            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                                <span className="block xl:inline">
                                    Code collaboratively with
                                </span>{' '}
                                <span className="block text-lime-600 xl:inline">
                                    annotations
                                </span>{' '}
                                using{' '}
                                <span className="block text-lime-600 xl:inline">
                                    Catseye
                                </span>
                            </h1>
                            <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                                Keep track of and share information with your
                                teammates, all while staying in the code and not
                                cluttering your code with extra comments.
                            </p>
                            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                <div className="rounded-md shadow">
                                    <button
                                        // href="#"
                                        onClick={() =>
                                            setViewing('home-getStarted')
                                        }
                                        className="flex w-full items-center justify-center rounded-md border border-transparent bg-lime-500 px-8 py-3 text-base font-medium text-white hover:bg-lime-400 md:py-4 md:px-10 md:text-lg"
                                    >
                                        Get started
                                    </button>
                                </div>
                                <div className="mt-3 sm:mt-0 sm:ml-3">
                                    <button
                                        // href="#"
                                        onClick={() =>
                                            setViewing('documentation')
                                        }
                                        className="flex w-full items-center justify-center rounded-md border border-transparent bg-lime-100 px-8 py-3 text-base font-medium text-lime-700 hover:bg-lime-200 md:py-4 md:px-10 md:text-lg"
                                    >
                                        Learn More
                                    </button>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                <img
                    className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
                    src="./catseye-fs.png"
                    alt=""
                />
            </div>
        </div>
    )
}

export default Hero
