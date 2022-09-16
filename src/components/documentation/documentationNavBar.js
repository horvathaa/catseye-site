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
        : 'text-slate-700 hover:text-slate-900 hover:border-slate-400 '
    return (
        <li
            onClick={() => {
                scrollToId(id)
            }}
            className={
                isActive +
                'block cursor-pointer border-l pl-4 -ml-px border-transparent'
            }
        >
            {title}
        </li>
    )
}

const NavBarSection = ({ items, title, navInView }) => {
    return (
        <li className="mt-12 lg:mt-8">
            <h4 className="mb-8 lg:mb-3 font-semibold text-slate-900 dark:text-slate-200">
                {title}
            </h4>
            <ul className="space-y-6 lg:space-y-2 border-l border-slate-100 dark:border-slate-800">
                {items.map((item) => (
                    <SideNavigationBarItem
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        navInView={navInView}
                    />
                ))}
            </ul>
        </li>
    )
}

export const SideNavigationBar = ({ navInView }) => {
    return (
        <aside className="sticky top-8 p-4 mx-8 w-1/5">
            {' '}
            <div className="sticky top-4 -ml-0.5">
                <ul>
                    <NavBarSection
                        items={sectionIds}
                        title={'Getting Started with Catseye'}
                        navInView={navInView}
                    />
                </ul>
            </div>
        </aside>
    )
}
