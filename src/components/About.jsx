import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import schoolCampus from '../assets/about.jpg'; // adjust path as needed

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold mb-6 text-blue-800">{t('school_name')}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('school_tagline')}
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between mb-20">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-3xl font-semibold mb-6 text-blue-700">{t('about_us_title')}</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t('about_us_content')}
            </p>
          </div>
          <div className="md:w-1/2 md:pl-10">
            <img 
              src={schoolCampus} 
              alt={t('about_us_image_alt')} 
              loading="lazy"
              className="w-full h-auto object-cover rounded-lg shadow-2xl"
            />
          </div>
        </div>
        
        <div className="bg-white p-10 rounded-xl shadow-lg">
          <h2 className="text-3xl font-semibold mb-6 text-blue-700 text-center">{t('our_legacy_title')}</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            {t('our_legacy_content')}
          </p>
        </div>

        <div className="mt-20 text-center">
          <Link 
            to="/events" 
            className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300"
            aria-label={t('explore_programs')}
          >
            {t('explore_programs')}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
