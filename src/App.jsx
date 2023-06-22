import { useEffect } from 'react';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import i18n from 'i18next';
import { Home } from "./pages/Home/Home";
import { Navigation } from './Navigation/Navigation';
import { WorkExperience } from './pages/WorkExperience/WorkExperience';
import { Page404 } from "./pages/Page404/Page404";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
  // set default language from localstorage
  useEffect(() => {
    const localStorageLang = JSON.parse(localStorage.getItem('language'));
    i18n.changeLanguage(localStorageLang?.data || 'en');
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          exact
          element={(
            <Navigation>
              <Home />
            </Navigation>)}
        />

        <Route
          path="/experience"
          exact
          element={(
            <Navigation>
              <WorkExperience />
            </Navigation>)}
        />

        <Route
          path="*"
          element={(
            <Navigation>
              <Page404 />
            </Navigation>)}
        />
      </ Routes>
    </BrowserRouter>
  );
};

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: './locales/{{lng}}.json',
    },
  });

export default App;
