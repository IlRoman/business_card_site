import { Slide1 } from './Slides/Slide1/Slide1';
import { Slide2 } from './Slides/Slide2/Slide2';
import { Slide3 } from './Slides/Slide3/Slide3';
import './main.scss';

export const Page1 = () => {
    return (
        <>
            <div className='slide page1 home-slide'>
                <Slide1 />
            </div>
            <div className='slide page1 home-slide'>
                <Slide2 />
            </div>
            <div className='slide page1 home-slide'>
                <Slide3 />
            </div>
        </>
    )
};
