import React from 'react';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import campusImg from '../assets/img10 (1).jpg';
function Main3() {
  const { t } = useTranslation();

  return (
    <div className="relative h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `bgbackground.jpg` }}
      ></div>

      <div className="absolute inset-0 bg-black bg-opacity-50 z-10 flex items-center justify-center text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="flex flex-col justify-center text-center lg:text-left">
              <h1 className="text-3xl lg:text-5xl font-bold mb-4">{t('title')}</h1>
              <p className="text-lg lg:text-2xl mb-6">{t('description')}</p>
              <Link
                to="/college"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 font-semibold rounded shadow"
              >
                {t('button')} <ArrowRightAltIcon />
              </Link>
            </div>

            <div className="hidden lg:flex justify-center">
              <img
 src={campusImg}
                 alt="School campus"
                className="rounded-lg shadow-lg max-h-[70vh]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main3;
