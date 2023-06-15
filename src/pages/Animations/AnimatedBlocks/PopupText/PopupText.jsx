import { useSpring, animated } from '@react-spring/web';
import { useState } from 'react';
import './popuptext.scss';

export const PopupText = () => {
    const [shown, toggle] = useState(true);

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
            duration: 400
        },
        reverse: !shown,
    }, [shown]);

    const handleToggle = () => {
        toggle(prev => !prev);
    };

    return (
        <div className='popuptext' onClick={handleToggle}>
            <div className='text'>
                <animated.div style={props}>
                    Popup Text
                </animated.div>
            </div>

            <div className='done'>done</div>
        </div>
    )
};
