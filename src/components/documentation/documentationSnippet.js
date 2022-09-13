import '../../App.css'

export function DocumentationSnippet({ title, steps, id }) {
    return (
        <div className="lg:text-center border-t-2 mt-4">
            <h2
                id={id}
                className="mt-4 mb-4 font-bold leading-8 tracking-tight text-lime-600 sm:text-4xl lg:text-2xl"
            >
                {title}
            </h2>
            <div className={'mt-2 ' + id}>
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
                                        className="mt-2 ml-16 text-left font-sans text-base text-gray-500 mt-1 text-base text-gray-900 sm:col-span-2 sm:mt-0"
                                    >
                                        <p className="text-lg text-center font-bold leading-6 text-gray-900">
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
