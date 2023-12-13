import React, { useState, useEffect, useRef } from 'react';
import './modal.scss';
import classNames from 'classnames';

export const Modal = ({
    children,
    title,
    subtitle,
    close,
    cancelBtn,
    submitBtn,
    submit,
    disabled,
    isCancelBtn = false,
    isSubmitBtn = false,
}) => {
    const [animation, setAnimation] = useState(false);
    const ref = useRef();

    useEffect(() => {
        setTimeout(() => setAnimation(true), 5)
    }, []);

    const handleClose = () => {
        setAnimation(false);
        setTimeout(() => {
            if (ref && ref.current) ref.current.style.display = 'none';
            close();
        }, 500);
    };

    const customModalClasses = classNames('custom-modal', animation && 'custom-modal_animated');
    const customModalContainerClasses = classNames('custom-modal__container', animation && 'custom-modal__container_animated')

    return (
        <div className={customModalClasses} ref={ref}>
            <div className="custom-modal__background" onClick={handleClose} />
            <form
                className={customModalContainerClasses}
                onSubmit={(e) => e.preventDefault()}
            >
                <div className="custom-modal__header">
                    <div>
                        <div className="custom-modal__title">{title}</div>
                        {subtitle && <div className="custom-modal__subtitle">{subtitle}</div>}
                    </div>
                    <div className="custom-modal__close-btn" onClick={handleClose}>
                        &#10006;
                    </div>
                </div>
                <div className="custom-modal__main">
                    {children}
                </div>
                <div className="custom-modal__footer"/>
                <div className="custom-modal__spacer"/>
            </form>
        </div>
    )
};
