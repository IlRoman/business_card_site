import { useEffect, useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import avatar from '../../../../../assets/images/no-photo.png';
import './slide1.scss';

export const Slide1 = () => {
    const [flipped, setFlipped] = useState(true);

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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br /><br />Dolores, corrupti ducimus quae mollitia pariatur repudiandae,
                    <br /><br />quam odit neque, modi alias quibusdam rem doloremque
                    <br /><br />libero incidunt numquam iusto minus nam quaerat ab.
                    <br /><br />Nam possimus officia cum eveniet saepe, quibusdam aliquam voluptas.
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
