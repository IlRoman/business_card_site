import { useTranslation } from 'react-i18next';
import './tech-modal.scss';

const stack = [
    "@fullpage/react-fullpage: ^0.1.40",
    "@react-spring/web: ^9.7.2",
    "@reduxjs/toolkit: ^1.9.5",
    "i18next: ^22.5.0",
    "i18next-http-backend: ^2.2.1",
    "react: ^18.2.0",
    "react-dom: ^18.2.0",
    "react-i18next: ^12.3.1",
    "react-redux: ^8.0.7",
    "react-router-dom: ^6.11.2",
    "react-scripts: 5.0.1",
    "react-use-measure: ^2.1.1",
    "redux: ^4.2.1",
    "sass: ^1.62.1",
];

export const TechModal = () => {
    return (
        <div className='tech-modal'>
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
    )
};
