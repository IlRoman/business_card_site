import { useEffect, useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import avatar from '../../../../../assets/images/no-photo.png';
import './slide1.scss';
import { useTranslation } from 'react-i18next';

export const Slide1 = () => {
    const [flipped, setFlipped] = useState(true);
    const { t } = useTranslation();

    const [props] = useSpring({
        from: {
            opacity: 0,
            transform: 'translateY(-4rem)',
        },
        to: {
            opacity: 1,
            transform: 'translateY(0rem)',
        },
        config: {
            duration: 500
        },
    }, []);

    const { opacity, transform } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(600px) rotateX(${flipped ? '180' : '0'}deg)`,
        config: {
            duration: 500
        },
    });

    useEffect(() => {
        setTimeout(() => {
            setFlipped(prev => !prev);
        }, 500)
    }, [])

    return (
        <div className='slide1'>
            <animated.div className='block' style={props}>
                <p>
                    <p className='top-text'>{t("website developer")}</p>
                    <h1>{t("hello")}</h1>
                    <h2>{t("welcome_text")}</h2>
                    <p className='list-title'>{t("about me")}:</p>
                    <ul>
                        <li>{t("experience: 4+ years in web development")}</li>
                        <li>{`${t("front-end stack")}: React, Next.js, Typescript, Redux.`}</li>
                        <li>{t("area of expertise")}</li>
                        <li>{t("development for me")}</li>
                    </ul>
                </p>
            </animated.div>

            <div className='block'>
                <div className='wrapper'>
                    <animated.div
                        className='image-container'
                        style={{ opacity: opacity.to(o => 1 - o), transform }}
                    >
                        <img src={avatar} alt="avatar" />
                    </animated.div>

                    <animated.div
                        className='image-container back-side'
                        style={{
                            opacity,
                            transform,
                            rotateX: '180deg',
                        }}
                    />
                </div>
            </div>
        </div>
    )
};
