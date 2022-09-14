import '../App.css'
import { Popover } from '@headlessui/react'

const navigation = [
    { name: 'Get Started', value: 'home', href: 'home-getStarted' },
    { name: 'Documentation', value: 'documentation', href: 'documentation' },
]

export function Navigation({ setViewing, viewing }) {
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
                        {navigation.map((item) => {
                            const chosenTextWeight =
                                item.value === viewing
                                    ? 'text-gray-800'
                                    : 'text-gray-500'
                            return (
                                <button
                                    onClick={() => setViewing(item.href)}
                                    key={item.name}
                                    className={`font-medium ${chosenTextWeight} hover:text-gray-900`}
                                >
                                    {item.name}
                                </button>
                            )
                        })}
                    </div>
                </nav>
            </div>
        </Popover>
    )
}
