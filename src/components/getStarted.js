import {
    BoltIcon,
    ArrowLeftIcon,
    ChatBubbleBottomCenterTextIcon,
    QuestionMarkCircleIcon,
    RectangleGroupIcon,
    ScaleIcon,
} from '@heroicons/react/24/outline'

import '../App.css'

const people = [
    {
        name: 'Calvin Hawkins',
        email: 'calvin.hawkins@example.com',
        image: 'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Kristen Ramos',
        email: 'kristen.ramos@example.com',
        image: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Ted Fox',
        email: 'ted.fox@example.com',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
]

function GetStarted() {
    return (
        <div className="bg-white py-12">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                        Installing
                    </p>
                </div>
                <ul className="divide-y divide-gray-200">
                    {people.map((person) => (
                        <li key={person.email} className="py-4 flex">
                            <img
                                className="h-10 w-10 rounded-full"
                                src={person.image}
                                alt=""
                            />
                            <div className="ml-3">
                                <p className="text-sm font-medium text-gray-900">
                                    {person.name}
                                </p>
                                <p className="text-sm text-gray-500">
                                    {person.email}
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default GetStarted
