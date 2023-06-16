import { useSpring, animated } from '@react-spring/web';
import { useState } from 'react';
import './popuptext.scss';

export const AsyncPopup = () => {
    const [shown, toggle] = useState(true);

    const [props, set] = useSpring({
        from: {
            opacity: 0,
            transform: 'translateY(-4rem)',
            color: 'gray'
        },
        to: [
            {
                opacity: 1,
                transform: 'translateY(0rem)'
            },
            { color: 'red' }
        ],
        config: {
            duration: 500
        },
    }, []);

    const handleToggle = () => {
        set({
            to: shown
                ? [
                    {
                        opacity: 0,
                        transform: 'translateY(-4rem)'
                    },
                    {
                        color: 'gray'
                    }
                ]
                : [
                    {
                        opacity: 1,
                        transform: 'translateY(0rem)'
                    },
                    {
                        color: 'red'
                    }
                ],
            onRest: () => toggle(prev => !prev)
        });
    };

    return (
        <div className='popuptext' onClick={handleToggle}>
            <div className='text'>
                <animated.div style={props}>
                    Two asynchronous animations in order - text float and color change
                </animated.div>
            </div>
        </div>
    )
};
