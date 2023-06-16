import './bg-animation.scss';

export const BGAnimation = ({ children }) => {
    return (
        <div className="bg-animation">
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
