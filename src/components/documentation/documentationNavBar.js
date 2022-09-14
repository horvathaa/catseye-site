import { sectionIds } from './documentation'

export const scrollToId = (id) => {
    const div = document.getElementById(id)
    div?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'center',
    })
}

const SideNavigationBarItem = ({ id, title, navInView }) => {
    const isActive = navInView.get(id)
        ? 'text-lime-600 hover:text-lime-500 border-lime-400 border-l-2 hover:border-lime-300 '
        : 'text-slate-700 hover:text-slate-900 '
    return (
        <li
            onClick={() => {
                scrollToId(id)
            }}
            className={
                isActive +
                'block cursor-pointer border-l pl-4 -ml-px border-transparent hover:border-slate-400'
            }
        >
            {title}
        </li>
    )
}

export const SideNavigationBar = ({ navInView }) => {
    return (
        <div className="hidden lg:block fixed z-20 inset-0 top-[3.8125rem] left-[max(0px,calc(40%-45rem))] right-auto w-[19.5rem] pb-10 px-8 overflow-y-auto">
            <nav className="lg:text-sm lg:leading-6 relative">
                <div className="sticky top-0 -ml-0.5">
                    <ul>
                        <li className="mt-12 lg:mt-8">
                            <h4 className="mb-8 lg:mb-3 font-semibold text-slate-900 dark:text-slate-200">
                                Getting Started with Catseye
                            </h4>
                            <ul className="space-y-6 lg:space-y-2 border-l border-slate-100 dark:border-slate-800">
                                {sectionIds.map((sec) => (
                                    <SideNavigationBarItem
                                        key={sec.id}
                                        id={sec.id}
                                        title={sec.title}
                                        navInView={navInView}
                                    />
                                ))}
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
