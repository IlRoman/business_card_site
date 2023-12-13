import './tech-modal.scss';

const stack = [
    "@fullpage/react-fullpage: v0.1.40",
    "@react-spring/web: v9.7.2",
    "@reduxjs/toolkit: v1.9.5",
    "i18next: v22.5.0",
    "i18next-http-backend: v2.2.1",
    "react: v18.2.0",
    "react-dom: v18.2.0",
    "react-i18next: v12.3.1",
    "react-redux: v8.0.7",
    "react-router-dom: v6.11.2",
    "react-scripts: v5.0.1",
    "react-use-measure: v2.1.1",
    "redux: v4.2.1",
    "sass: v1.62.1",
    "classnames: v2.3.2",
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
