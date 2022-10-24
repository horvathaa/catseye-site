import { useEffect } from 'react'
import { scrollToId } from './documentation/documentationNavBar'
import '../App.css'

const teammates = [
    {
        id: 1,
        name: 'Amber Horvath',
        href: 'http://www.amberhorvath.com',
        role: 'Lead Researcher, Developer, and Designer',
        description:
            '5th year Ph.D. student in the Human-Computer Interaction Institute at Carnegie Mellon University. Leading this project as part of her doctoral thesis work.',
        className: 'thumbnail portrait',
        imageSrc: 'https://www.amberhorvath.com/resources/amber.jpeg',
        imageAlt:
            'Picture of Amber Horvath, Ph.D. student at Carnegie Mellon University',
    },
    {
        id: 2,
        name: 'Dr. Brad Myers',
        href: 'https://www.cs.cmu.edu/~bam/',
        role: 'Professor, Advisor',
        description:
            'Professor in the Human-Computer Interaction Institute in the School of Computer Science at Carnegie Mellon University. Oversees the research and development of Catseye.',
        className: 'thumbnail portrait',
        imageSrc: 'https://www.cs.cmu.edu/~bam/myers_brad_2015_head_small.jpg',
        imageAlt:
            'Picture of Brad Myers, professor of Computer Science at Carnegie Mellon University',
    },
    {
        id: 3,
        name: 'Matthew Shu',
        href: 'http://www.matthewshu.com/',
        className: 'thumbnail portrait',
        role: 'Developer, Designer',
        description: (
            <>
                2nd year undergraduate in Statistics and Sociology at Yale
                University, assisted in the design and development of Catseye
                through the{' '}
                <a
                    href="https://www.hcii.cmu.edu/summer-research-program"
                    target={'_blank'}
                    rel="noreferrer"
                    className="text-green-500 hover:text-green-400 hover:underline"
                >
                    2022 Human-Computer Interaction Institute REU program
                </a>
                .
            </>
        ),
        imageSrc: 'http://www.matthewshu.com/assets/matthew_shu_headshot.png',

        imageAlt: 'Picture of Matthew Shu, undergraduate at Yale University',
    },
    {
        id: 4,
        name: 'Shannon Bonet',
        href: 'https://shannon.gtsb.io/',
        role: 'Developer, Designer',
        description: (
            <>
                4th year undergraduate in Cognitive Science at University of
                California, Berkeley, assisted in the design and development of
                Catseye through the{' '}
                <a
                    href="https://www.hcii.cmu.edu/summer-research-program"
                    target={'_blank'}
                    rel="noreferrer"
                    className="text-green-500 hover:text-green-400 hover:underline"
                >
                    2022 Human-Computer Interaction Institute REU program
                </a>
                .
            </>
        ),
        className: 'thumbnail portrait',
        imageSrc: 'https://avatars.githubusercontent.com/u/63089231?v=4',
        imageAlt:
            'Picture of Shannon Bonet, undergraduate at University of California, Berkeley',
    },
    {
        id: 5,
        name: 'Andrew Macvean',
        href: 'https://www.linkedin.com/in/andrew-macvean-5b948b2b/',
        role: 'Advisor',
        description: 'Consults on the research and development of Catseye.',
        className: 'thumbnail portrait',
        imageSrc:
            'https://media-exp1.licdn.com/dms/image/C5603AQFTaChjvNag2w/profile-displayphoto-shrink_800_800/0/1517619642171?e=1668643200&v=beta&t=1HfzVvUJ0NqMkg6dVfX7AJIc4fb907xtCx6BGdBcm2k',
        imageAlt:
            'Picture of Andrew Macvean, Staff User Experience Researcher at Google',
    },
]

const formerTeammates = [
    {
        id: 0,
        name: 'Imtiaz Rahman',
        href: 'https://www.linkedin.com/in/imtiaz-rahman-835237169/',
        className: 'thumbnail portrait',
        role: 'Developer',
        description: (
            <>
                4th year undergraduate in Computer Science at Hunter College,
                assisted in the development of Catseye through the{' '}
                <a
                    href="https://www.hcii.cmu.edu/summer-research-program"
                    target={'_blank'}
                    rel="noreferrer"
                    className="text-green-500 hover:text-green-400 hover:underline"
                >
                    2021 Human-Computer Interaction Institute REU program
                </a>
                .
            </>
        ),
        imageSrc:
            'https://media-exp1.licdn.com/dms/image/C4D03AQFtrdSssfgQcg/profile-displayphoto-shrink_200_200/0/1654571690615?e=1668643200&v=beta&t=xUzeWPATxkpm-feoxycHrd2MW2ZMxcEr7v_lJUbA8mg',
        imageAlt: 'Picture of Imtiaz Rahman, undergraduate at Hunter College',
    },
]

const Teammates = ({ team, title }) => {
    return (
        <>
            <h1 className="text-2xl font-medium text-gray-700 mb-4 mt-4">
                {title}
            </h1>
            <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {team.map((member) => (
                    <div className="group">
                        <a key={member.name + member.id} href={member.href}>
                            <div
                                className={
                                    member.className +
                                    'aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8'
                                }
                            >
                                <img
                                    src={member.imageSrc}
                                    alt={member.imageAlt}
                                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                                />
                            </div>

                            <h3 className="mt-4 text-md text-gray-700">
                                <span className="text-green-500 font-medium hover:text-green-400 hover:underline">
                                    {member.name}
                                </span>
                            </h3>
                        </a>
                        <h4 className="mt-2 font-medium text-sm text-gray-700">
                            {member.role}
                        </h4>
                        <p className="mt-1 text-sm text-gray-900">
                            {member.description}
                        </p>
                    </div>
                ))}
            </div>
        </>
    )
}

const HeaderAndText = ({ obj }) => {
    return (
        <div className="mt-4">
            <h1
                id={'about'}
                className="text-2xl font-medium text-gray-700 mb-4"
            >
                {obj.title}
            </h1>
            <p className="text-lg text-gray-700 mb-4">{obj.text}</p>
        </div>
    )
}

export default function About({ setViewing }) {
    useEffect(() => {
        scrollToId('about')
    }, [])

    const about = {
        about: {
            title: 'About Us',
            text: (
                <>
                    We are a team of researchers invested in making programming
                    more human-centered through developing tools that make
                    various aspects of software development easier, more
                    intuitive, and comprehensible. Catseye is just one of many
                    projects in the{' '}
                    <a
                        target={'_blank'}
                        rel="noreferrer"
                        className="text-green-500 hover:text-green-400 hover:underline"
                        href="http://www.cs.cmu.edu/~NatProg/index.html"
                    >
                        Natural Programming Project
                    </a>{' '}
                    that have this goal. For more information about Catseye,{' '}
                    <button
                        className="text-green-500 hover:text-green-400 hover:underline"
                        onClick={() => setViewing('home-getStarted')}
                    >
                        try it out
                    </button>{' '}
                    or read our{' '}
                    <a
                        href={'./horvath-catseye-uist22.pdf'}
                        target="_blank"
                        rel="noreferrer"
                        className="text-green-500 hover:text-green-400 hover:underline"
                    >
                        {' '}
                        UIST 2022 paper
                    </a>
                    . Catseye is also part of the Adamite project, which allows
                    developers to use annotations in a variety of contexts for
                    information tracking and sharing. You can read more about
                    Adamite{' '}
                    <a
                        href={'https://adamite.netlify.app'}
                        target="_blank"
                        rel="noreferrer"
                        className="text-green-500 hover:text-green-400 hover:underline"
                    >
                        here
                    </a>
                    .
                </>
            ),
        },
        funding: {
            title: 'Funding',
            text: (
                <>
                    This work is funded by NSF grant "Personalizing API
                    Documentation" (award CCF-2007482) and Google. Any opinions,
                    findings and conclusions or recommendations expressed in
                    this material are those of the author(s) and do not
                    necessarily reflect those of the National Science Foundation
                    or any other sponsor.
                </>
            ),
        },
    }

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl py-8 px-4 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8">
                <HeaderAndText obj={about['about']} />
                <Teammates title={'Our Team'} team={teammates} />
                <Teammates
                    title={'Former Team Members'}
                    team={formerTeammates}
                />
                <HeaderAndText obj={about['funding']} />
            </div>
        </div>
    )
}
