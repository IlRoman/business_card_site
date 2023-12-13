import classNames from 'classnames';
import './bg-animation.scss';
import { useSelector } from 'react-redux';

export const BGAnimation = ({ children }) => {
    const { theme } = useSelector(state => state.app);

    const bgAnimationClasses = classNames('bg-animation', theme.data)

    return (
        <div className={bgAnimationClasses}>
            <ul className="circles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>

            <div className='content'>
                {children}
            </div>
        </div>
    )
};
