import {
    BoltIcon,
    ArrowLeftIcon,
    ChatBubbleBottomCenterTextIcon,
    QuestionMarkCircleIcon,
    RectangleGroupIcon,
    ScaleIcon,
} from '@heroicons/react/24/outline'
import '../App.css'

const features = [
    {
        name: 'Keep Track of Code-Related Information',
        description:
            'Keep track of your questions, bugs, and tasks by annotating the code you care about.',
        icon: QuestionMarkCircleIcon,
    },
    {
        name: 'Navigate Your Code Easily',
        description:
            "Catseye's annotation anchors can be used as bookmarks for the parts of your code you want to go to.",
        icon: ArrowLeftIcon,
    },
    {
        name: 'Collaborate',
        description:
            'Keep your conversations in the code with annotations -- ask questions, reply with answers, document issues, all while staying in the context of the code.',
        icon: ChatBubbleBottomCenterTextIcon,
    },
    {
        name: 'Manage Your Information',
        description:
            "Catseye provides a suite of features to make finding and managing your annotations easy -- merge, filter, search and sort so you can find the information that's important to you.",
        icon: RectangleGroupIcon,
    },
]

function FeatureList() {
    return (
        <div className="bg-white py-12">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <h2 className="text-lg font-semibold text-lime-600">
                        Features
                    </h2>
                    <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                        With annotations, you can...
                    </p>
                </div>

                <div className="mt-10">
                    <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative">
                                <dt>
                                    <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-lime-500 text-white">
                                        <feature.icon
                                            className="h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    </div>
                                    <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
                                        {feature.name}
                                    </p>
                                </dt>
                                <dd className="mt-2 ml-16 text-base text-gray-500">
                                    {feature.description}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}

export default FeatureList
