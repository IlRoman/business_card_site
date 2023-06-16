import { PopupText } from './AnimatedBlocks/PopupText/PopupText';
import { AsyncPopup } from './AnimatedBlocks/AsyncPopup/AsyncPopup';
import { Range } from './AnimatedBlocks/Range/Range';
import { Trembling } from './AnimatedBlocks/Trembling/Trembling';
import { Card } from './AnimatedBlocks/Card/Card';
import './animations.scss';
import { useSelector } from 'react-redux';
import { BGAnimation } from '../BGAnimation/BGAnimation';

export const Animations = () => {
    const { theme } = useSelector(state => state.app);

    return (
        <div className={`animations ${theme.data}`}>
            <BGAnimation>
                <div className="table">
                    <div className="cell">
                        <PopupText />
                    </div>
                    <div className="cell">
                        <AsyncPopup />
                    </div>
                    <div className="cell">
                        <Range />
                    </div>
                    <div className="cell">
                        <Trembling />
                    </div>
                    <div className="cell">
                        <Card />
                    </div>
                </div>
            </BGAnimation>
        </div>
    )
};
