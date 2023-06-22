import { Link } from 'react-router-dom';
import { appStore } from '../../store/appStore';
import './page404.scss';
import { observer } from 'mobx-react-lite';

export const Page404 = observer(() => {
    const { theme } = appStore;

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
});
