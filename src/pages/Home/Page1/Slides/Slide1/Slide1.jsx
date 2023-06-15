import avatar from '../../../../../assets/images/no-photo.png';
import './slide1.scss';

export const Slide1 = () => {
    return (
        <div className='slide1'>
            <div className='block'>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br /><br />Dolores, corrupti ducimus quae mollitia pariatur repudiandae,
                    <br /><br />quam odit neque, modi alias quibusdam rem doloremque
                    <br /><br />libero incidunt numquam iusto minus nam quaerat ab.
                    <br /><br />Nam possimus officia cum eveniet saepe, quibusdam aliquam voluptas.
                </p>
            </div>

            <div className='block'>
                <div className='image-container'>
                    <img src={avatar} alt="avatar" />
                </div>
            </div>
        </div>
    )
};
