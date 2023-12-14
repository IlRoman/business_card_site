import { Link } from "react-router-dom";
import "./page404.scss";

export const Page404 = () => {
  return (
    <div className="page404">
      <div className="page404__container">
        <h2>Oops! Page not found.</h2>
        <h1>404</h1>
        <p>We can't find the page you're looking for.</p>
        <Link className="page404__link" to="/">
          Go back home
        </Link>
      </div>
    </div>
  );
};
