import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import useMeasure from 'react-use-measure';
import './range.scss';

export const Range = () => {
    const [shown, toggle] = useState(false);
    const [pause, setPause] = useState(false);
    const [ref, { width }] = useMeasure();

    const [props] = useSpring({
        width: shown ? width : 0,
        config: {
            duration: 1000
        },
        pause: pause,
    }, [shown, pause]);

    const handleToggle = () => {
        setPause(false);
        toggle(prev => !prev);
    };

    const handlePause = (e) => {
        e.stopPropagation();
        setPause(true);
    };

    return (
        <div
            className="range"
            onClick={handleToggle}
        >
            <div ref={ref} className="main">
                <animated.div className="fill" style={props} />
                <animated.div className="content">{props.width.to(x => x.toFixed(0))}</animated.div>
            </div>

            <button onClick={handlePause}>Pause</button>
        </div>
    )
};
