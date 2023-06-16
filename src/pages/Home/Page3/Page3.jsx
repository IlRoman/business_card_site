import { useTranslation } from 'react-i18next';
import './main.scss';

export const Page3 = () => {
    const { t } = useTranslation();

    return (
        <div className='page3'>
            <h1 className='title'>{`${t("Do not judge me strictly for the design, I'm not a designer")} =)`}</h1>
        </div>
    )
};
