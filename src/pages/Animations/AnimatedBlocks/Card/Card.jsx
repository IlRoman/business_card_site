import { useSpring, animated } from '@react-spring/web';
import { useState } from 'react';
import './card.scss';

export const Card = () => {
    const [flipped, setFlipped] = useState(true);

    const { opacity, transform } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(600px) rotateX(${flipped ? '180' : '0'}deg)`,
        config: {
            duration: 500
        },
    });

    const handleToggle = () => {
        setFlipped(prev => !prev);
    };

    return (
        <div className='flip-card'>
            <div className='wrapper' onClick={handleToggle}>
                <animated.div
                    className="card card__front"
                    style={{ opacity: opacity.to(o => 1 - o), transform }}
                />

                <animated.div
                    className="card card__back"
                    style={{
                        opacity,
                        transform,
                        rotateX: '180deg',
                    }}
                />
                <div className='done'>done</div>
            </div>
        </div>
    )
};
