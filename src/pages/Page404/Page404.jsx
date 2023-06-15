import { Link } from 'react-router-dom';
import './page404.scss';
import { useSelector } from 'react-redux';

export const Page404 = () => {
    const { theme } = useSelector(state => state.app);

    return (
        <div className={`page404 ${theme.data}`}>
            <div className='container'>
                <h2>Oops! Page not found.</h2>
                <h1>404</h1>
                <p>We can't find the page you're looking for.</p>
                <Link className="link" to="/">Go back home</Link>
            </div>
        </div>
    )
};
