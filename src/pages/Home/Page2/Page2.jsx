import { useTranslation } from 'react-i18next';
import { frontensStack } from '../../../helpers/constants';
import './page2.scss';

export const Page2 = () => {
    const { t } = useTranslation();

    return (
        <div className='page2'>
            <div className='page2__wrapper'>
                <h1 className='title'>{`${t("front-end stack")}:`}</h1>
                <div className='table'>
                    {frontensStack.map(elem => {
                        return (
                            <div className='block' key={elem}>
                                {elem}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
};
