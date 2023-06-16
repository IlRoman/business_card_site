import React, { useState, useEffect, useRef } from 'react';
import './modal.scss';

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

    return (
        <div className={`custom-modal ${animation ? 'custom-modal_animated' : ''}`} ref={ref}>
            <div className="custom-modal__background" onClick={handleClose} />
            <form className={`custom-modal__container ${animation ? 'custom-modal__container_animated' : ''}`} onSubmit={(e) => {
                e.preventDefault()
            }}>
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

                <div className="custom-modal__footer">
                    {isCancelBtn && (
                        <div className="custom-modal__cancel-btn">
                            {/* <CustomButton
                                type="button"
                                name={cancelBtn || "Cancel"}
                                variant="grey"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleClose();
                                }}
                            /> */}
                        </div>
                    )}

                    {isSubmitBtn && submit && (
                        <div className="custom-modal__submit-btn">
                            {/* <CustomButton
                                variant="green"
                                name={submitBtn || "Save"}
                                onClick={(e) => {
                                    e.preventDefault();
                                    submit();
                                }}
                                disabled={disabled || false}
                                type="submit"
                            /> */}
                        </div>
                    )}
                </div>

                <div className="custom-modal__spacer" />
            </form>
        </div>
    )
};
