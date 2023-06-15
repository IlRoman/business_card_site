import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import { Main } from "./Main/Main";
import { useSelector } from "react-redux";
import "./home.scss";

export const Home = ({
    language,
    setLanguage,
}) => {
    const { theme } = useSelector(state => state.app);

    return (
        <div className={`home ${theme.data}`}>
            <Header
                language={language}
                setLanguage={setLanguage}
            />
            <Main />
            <Footer />
        </div>
    )
};
