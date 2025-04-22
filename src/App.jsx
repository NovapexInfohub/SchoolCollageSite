import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { KeyboardArrowUp } from '@mui/icons-material';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import hi from './locales/hi.json';
import mr from './locales/mr.json';
import { useTranslation } from 'react-i18next';

import Coursoul from './components/Coursoul';
import Main1 from './components/Main1';
import Main2 from './components/Main2';
import Marquee from './components/Marquee';
import Navbar from './components/Navbar';
// import Checkout from './components/Checkout';
import Main3 from './components/Main3';
import Footer from './components/Footer';
import About from './components/Faculty';
import Moto from './components/Moto';
import Campus from './components/Campus';
import College from './components/About';
import Contact from './components/Contact';
import Timer from './components/Timer';
import Events from './components/Events';
import Curriculum from './components/Curriculum';
import Faculty from './components/Faculty';
import Students from './components/Students';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      hi: { translation: hi },
      mr: { translation: mr },
    },
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React already does escaping
    },
  });

function App() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const toggleVisibility = () => {
    setIsVisible(window.scrollY > 300);
  };

  return (
    <Router>
      <div className='bg-gray-100'>
        <Navbar />
        <Routes>
          <Route
            exact
            path='/'
            element={
              <div>
                <Coursoul />
                <Marquee text={t('welcome')} />
                <Timer />
                <Marquee text={t('annual_exhibition')} />
                <Main2 />
                {/* <Checkout /> */}
                <Main1 />
                <Main3 />
              </div>
            }
          />

          <Route
            exact
            path='/faculty'
            element={
              <>
                <Faculty />
                <Main2 />
                {/* <Checkout /> */}
                <Main3 />
              </>
            }
          />

          <Route
            exact
            path='/students'
            element={
              <>
                <Students />
                <Main2 />
                {/* <Checkout /> */}
                <Main3 />
              </>
            }
          />

          <Route
            exact
            path='/campus'
            element={
              <>
                <Campus />
                <Main2 />
                {/* <Checkout /> */}
                <Main1 />
                <Main3 />
              </>
            }
          />

          <Route
            exact
            path='/events'
            element={
              <>
                <Events />
                <Main2 />
                {/* <Checkout /> */}
                <Main1 />
                <Main3 />
              </>
            }
          />

          <Route
            exact
            path='/curriculum'
            element={
              <>
                <Curriculum />
                <Main2 />
                {/* <Checkout /> */}
                <Main3 />
              </>
            }
          />

          <Route
            exact
            path='/moto'
            element={
              <>
                <Moto />
                <Main2 />
                {/* <Checkout /> */}
                <Main3 />
              </>
            }
          />

          <Route
            exact
            path='/aboutus'
            element={
              <>
                <College />
                <Main2 />
                {/* <Checkout /> */}
                <Main1 />
                <Main3 />
              </>
            }
          />

          <Route
            exact
            path='/contact'
            element={
              <>
                <Contact />
                <Main2 />
                {/* <Checkout /> */}
                <Main3 />
              </>
            }
          />

          <Route path='*' element={<Navigate to="/" />} />
        </Routes>

        {isVisible && (
          <button
            className="fixed bottom-5 right-5 bg-blue-500 text-white px-4 py-2 rounded shadow"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <KeyboardArrowUp />
          </button>
        )}

       
        <Footer />
      </div>
    </Router>
  );
}

export default App;
