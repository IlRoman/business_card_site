import './bg-animation.scss';

export const BGAnimation = ({ children }) => {
    return (
        <div class="bg-animation">
            <ul class="circles">
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
