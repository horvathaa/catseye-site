export function DeepDive({ steps, image, title, id }) {
    return (
        <div className="lg:text-center border-t-2 mt-4">
            <h2
                id={id}
                className="mt-4 font-bold leading-8 tracking-tight text-lime-600 sm:text-4xl lg:text-2xl"
            >
                {title}
            </h2>
            <div
                className={
                    'mt-2 m-2 px-4 py-5 flex justify-items-center items-start ' +
                    id
                }
            >
                <img
                    src={image.src}
                    className="sm:h-full sm:w-full lg:h-1/2 lg:w-1/2 rounded-md mb-10 sticky top-8"
                    aria-hidden="true"
                    alt={image.alt}
                />
                <dl
                    className="rounded-md flex flex-col justify-items-center items-center ml-4"
                    // className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0"
                >
                    {steps.map((feature, i) => {
                        const grayOrWhite =
                            i % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                        return (
                            <div
                                key={'annotation-deep-dive-' + feature.key}
                                className={
                                    grayOrWhite +
                                    ' relative h-auto flex px-4 py-5 sm:gap-2 sm:px-6 rounded-md'
                                }
                            >
                                <dt>
                                    <h2 className="flex text-xl h-full w-full items-center justify-center rounded-md text-gray-900">
                                        {feature.number}
                                    </h2>
                                </dt>
                                <dt>
                                    <pre
                                        style={{
                                            whiteSpace: 'pre-wrap',
                                            textAlign: 'left',
                                        }}
                                        className="mt-2 ml-4 font-sans text-base text-gray-500 mt-1 text-base text-gray-900 sm:col-span-2 sm:mt-0 text-align"
                                    >
                                        {/* <p className="text-lg font-bold leading-6 text-gray-900">
                                            {feature.name}
                                        </p> */}
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
