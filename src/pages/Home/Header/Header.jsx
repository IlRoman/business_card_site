import { useTranslation } from "react-i18next";
import "./header.scss";

export const Header = () => {
    const { t } = useTranslation();

    return (
        <div className='home-header'>
            <h1>{t("hello")}</h1>
            <h2 className='title'>{t("welcome_text")}</h2>
        </div>
    )
};
