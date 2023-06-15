import { useState, useRef, useEffect, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useClickOutside } from "../hooks/useClickOutside";
import Dropdown from "../Components/Dropdown/Dropdown";
import i18n from "i18next";
import burger from '../assets/icons/burger-menu.svg';
import { languages, themes } from "../helpers/constants";
import { setLanguage, setTheme } from "../redux/appSlice";
import { useSpring, animated } from '@react-spring/web';
import "./navigation.scss";
import "./dark.scss";
import "./green.scss";
import "./violet.scss";
import "./orange.scss";

export const Navigation = ({ children }) => {
    const { language, theme } = useSelector(state => state.app);
    const [menuMobile, setMenuMobile] = useState(false);
    const [isHeader] = useState(true);
    const burgerRef = useRef();
    const mobileMenuRef = useRef();
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [animations, toggle] = useState([true, true, true]);

    const { x, y, z } = useSpring({
        from: { x: 0, y: 0, z: 0 },
        x: animations[0] ? 1 : 0,
        y: animations[1] ? 1 : 0,
        z: animations[2] ? 1 : 0,
        config: { duration: 700 },
    });

    const handleToggle = (index) => {
        toggle(prev => {
            let arr = [...prev];
            arr[index] = !arr[index];
            return arr;
        })
    };

    const onChangeLanguage = (selectedElement = { title: 'English', data: 'en', }) => {
        dispatch(setLanguage(selectedElement));
        i18n.changeLanguage(selectedElement?.data || 'en');
        localStorage.setItem('language', JSON.stringify(selectedElement));
    };

    useEffect(() => {
        const localStorageLang = JSON.parse(localStorage.getItem('language'));
        onChangeLanguage(localStorageLang);
    }, []);

    const onChangeTheme = (theme) => {
        dispatch(setTheme(theme));
        localStorage.setItem('theme', JSON.stringify(theme));
    };

    const handleMenuMobile = () => setMenuMobile(prev => !prev)

    useClickOutside(mobileMenuRef, (e) => {
        if (!burgerRef.current.contains(e.target)) {
            if (menuMobile) setMenuMobile(false);
        }
    });

    return (
        <>
            <div className={`app-navigation ${theme.data}`}>
                {isHeader && (
                    <div className="container">
                        {/* both desktop and mobile */}
                        <div />

                        {/* desktop only */}
                        <animated.div
                            className="column desktop"
                            onClick={() => handleToggle(0)}
                            style={{
                                scale: x.to({
                                    range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                                    output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
                                }),
                            }}
                        >
                            <div className="link-container">
                                <Link to="/" className="link">Home</Link>
                            </div>
                        </animated.div>
                        <animated.div
                            className="column desktop"
                            onClick={() => handleToggle(1)}
                            style={{
                                scale: y.to({
                                    range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                                    output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
                                }),
                            }}
                        >
                            <div className="link-container">
                                <Link to="/404" className="link">Animations</Link>
                            </div>
                        </animated.div>
                        <animated.div
                            className="column desktop"
                            onClick={() => handleToggle(2)}
                            style={{
                                scale: z.to({
                                    range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                                    output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
                                }),
                            }}
                        >
                            <div className="link-container">
                                <Link to="/404" className="link">Links</Link>
                            </div>
                        </animated.div>

                        {/* mobile only */}
                        <div className="column mobile">
                            <img
                                ref={burgerRef}
                                src={burger}
                                className="burger"
                                alt="navigation menu"
                                onClick={handleMenuMobile}
                            />
                        </div>

                        {/* both desktop and mobile */}
                        <div className="column dropdown">
                            <Dropdown
                                placeholder="Change language"
                                value={language}
                                onChange={onChangeLanguage}
                                options={languages}
                                label={t('language')}
                                labelColor="#fff"
                            />
                        </div>
                        <div className="column dropdown">
                            <Dropdown
                                placeholder="Change theme"
                                value={theme}
                                onChange={onChangeTheme}
                                options={themes}
                                label={t('change theme')}
                                labelColor="#fff"
                            />
                        </div>
                        <div />
                    </div>
                )}

                {/* mobile only */}
                {menuMobile && (
                    <div className="mobile mobile-menu" ref={mobileMenuRef}>
                        <div className="link-container">
                            <Link
                                to="/"
                                className="mobile-menu__link link"
                                onClick={handleMenuMobile}
                            >Home</Link>
                        </div>
                        <div className="link-container">
                            <Link
                                to="/404"
                                className="mobile-menu__link link"
                                onClick={handleMenuMobile}
                            >Animations</Link>
                        </div>
                        <div className="link-container">
                            <Link
                                to="/404"
                                className="mobile-menu__link link"
                                onClick={handleMenuMobile}
                            >Links</Link>
                        </div>
                    </div>
                )}
            </div>

            {children}
        </>
    )
};
