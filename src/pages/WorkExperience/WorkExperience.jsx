import { useSelector } from 'react-redux';
import { BGAnimation } from '../BGAnimation/BGAnimation';
import './work-experience.scss';

const experienceArray = [
    {
        date: "2022 - 2023",
        description: "Application for real-time incident information exchange (video, chat, audio, position on google map)",
        technologies: "HTML5, CSS3, SCSS, JavaScript (ES6+), React, Redux, Redux saga, Web sockets, BEM Methodology, Git, REST API, npm, Trello",
        responsibilities: "Create pages of application, connecting sockets, and logic on frontend making different requests to the server.",
    },
    {
        date: "2021 - 2022",
        description: "Application for monitoring employees of the enterprise.",
        technologies: "HTML5, CSS3, Sass, JavaScript (ES6+), React, Redux, BEM Methodology, Git, REST API, npm, Trello",
        responsibilities: "Create pages of application and logic on frontend making different requests to the server.",
    },
    {
        date: "2020 - 2020",
        description: "Application for finding speakers and finding customers.",
        technologies: "HTML5, CSS3, Sass, JavaScript (ES6+), React, Redux, BEM Methodology, Git, REST API, npm, Trello, Styled Component, React-Slick, Libraries for React-animations",
        responsibilities: "HTML5, CSS3, Sass, JavaScript (ES6+), React, Redux, BEM Methodology, Git, REST API, npm, Trello, Styled Component, React-Slick, Libraries for React-animations",
    },
    {
        date: "2019 - 2020",
        description: "Application for tourists visiting London.",
        technologies: " HTML5, CSS3, Sass, JavaScript (ES6+), React, Redux, BEM Methodology, Git, REST API, npm, Trello, Next.js,Styled Component, Material-UI",
        responsibilities: "Create pages of application and logic on frontend making different requests to the server.",
    },
    {
        date: "2019 - 2019",
        description: "The site of a company providing fitness services. People who register on the site and keep their fitness-diaries under the supervision of a trainer",
        technologies: "HTML5, CSS3, Sass, JavaScript (ES6+), React, Redux, BEM Methodology, Git, REST API, npm",
        responsibilities: "HTML5, CSS3, Sass, JavaScript (ES6+), React, Redux, BEM Methodology, Git, REST API, npm",
    },
    {
        date: "2018- 2019",
        description: "The site of a company providing fitness services. People who  register on the site and keep their fitness-diaries under the supervision of a trainer",
        technologies: "HTML5, CSS3, Sass, JavaScript (ES6+), React, Redux, BEM Methodology, Git, REST API, npm",
        responsibilities: "Create pages of application and logic on frontend making different requests to the server",
    },
    {
        date: "2017 - 2018",
        description: "Website of the ministry of infrastructure of Ukraine. Admin panel for registration of certificates for vehicles",
        technologies: "HTML5, CSS3, Sass, JavaScript (ES6+), React, Redux, TypeScript, BEM Methodology, Git, REST API, npm, Trello, React-toprint and other libraries",
        responsibilities: "Create pages of application and logic on frontend making different requests to the server.",
    },
];

export const WorkExperience = () => {
    const { language, theme } = useSelector(state => state.app);

    return (
        <div className={`work-experience ${theme.data}`}>
            <BGAnimation>
                <div className='container'>
                    {experienceArray.map((elem, index) => {
                        return (
                            <div className='block' key={index}>
                                <h2>{`Frontend Developer ${elem.date}`}</h2>
                                <p>{elem.description}</p>
                                <h2>Tools & technologies:</h2>
                                <p>{elem.technologies}</p>
                                <h2>Responsibilities:</h2>
                                <p>{elem.responsibilities}</p>
                            </div>
                        )
                    })}
                    <h2 style={{ marginTop: 20 }}>And other small projects...</h2>
                </div>
            </BGAnimation>
        </div>
    )
};
