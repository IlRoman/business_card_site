import { PopupText } from './AnimatedBlocks/PopupText/PopupText';
import { AsyncPopup } from './AnimatedBlocks/AsyncPopup/AsyncPopup';
import { Range } from './AnimatedBlocks/Range/Range';
import { Trembling } from './AnimatedBlocks/Trembling/Trembling';
import { Card } from './AnimatedBlocks/Card/Card';
import './animations.scss';

export const Animations = () => {
    return (
        <div className='animations'>
            <div className="table">
                <div className="row">
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
                </div>
                <div className="row">
                    <div className="cell">
                        <Card />
                    </div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                </div>
                <div className="row">
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                </div>
            </div>
        </div>
    )
};
