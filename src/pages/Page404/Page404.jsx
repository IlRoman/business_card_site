import { Link } from 'react-router-dom';
import './page404.scss';
import { useSelector } from 'react-redux';
import classNames from 'classnames';

export const Page404 = () => {
    const { theme } = useSelector(state => state.app);

    const page404Classes = classNames('page404', theme.data)

    return (
        <div className={page404Classes}>
            <div className='container'>
                <h2>Oops! Page not found.</h2>
                <h1>404</h1>
                <p>We can't find the page you're looking for.</p>
                <Link className="link" to="/">Go back home</Link>
            </div>
        </div>
    )
};
