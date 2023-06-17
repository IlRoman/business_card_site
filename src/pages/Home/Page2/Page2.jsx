import { useTranslation } from 'react-i18next';
import './page2.scss';

const stack = [
    'HTML 5',
    'JavaScript ES6+',
    'React',
    'Next.js',
    'Typescript',
    'Redux',
    'Redux toolkit',
    'Redux thunk',
    'Redux saga',
    'CSS 3+',
    'SASS',
    'SCSS',
    'Styled Component',
    'Module css',
    'AJAX',
    'Axios',
    'Web sockets'
];

export const Page2 = () => {
    const { t } = useTranslation();

    return (
        <div className='page2'>
            <div className='page1__wrapper'>
                <h1 className='title'>{`${t("front-end stack")}:`}</h1>
                <div className='table'>
                    {stack.map(elem => {
                        return (
                            <div className='block' key={elem}>
                                {elem}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
};
