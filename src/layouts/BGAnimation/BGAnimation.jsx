import './bg-animation.scss';
import { useSelector } from 'react-redux';

export const BGAnimation = ({ children }) => {
    const { theme } = useSelector(state => state.app);

    return (
        <div className={`bg-animation ${theme.data}`}>
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
