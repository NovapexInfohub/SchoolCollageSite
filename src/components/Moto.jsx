import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { Lightbulb, Group, ThumbUp } from '@mui/icons-material';

const Moto = () => {
  const { t } = useTranslation();

  const mottoItems = [
    {
      title: t('items.0.title'),
      description: t('items.0.description'),
      icon: <Lightbulb />,
    },
    {
      title: t('items.1.title'),
      description: t('items.1.description'),
      icon: <Group />,
    },
    {
      title: t('items.2.title'),
      description: t('items.2.description'),
      icon: <ThumbUp />,
    },
  ];

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-blue-900">
            {t('head')}
          </h1>
          <p className="text-2xl font-semibold text-blue-700 text-center">
            {t('subhead')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          {mottoItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-xl p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                  {React.cloneElement(item.icon, {
                    className: 'text-blue-600 text-3xl',
                    titleAccess: `${item.title} Icon`,
                  })}
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-800 text-center">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-blue-800 text-center">
            {t('missionTitle')}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed text-justify">
            <Trans i18nKey="missionText">
              At <span className="font-semibold text-blue-700">Viswa Public School</span>, our
              mission is to cultivate a nurturing and inclusive environment where every student is
              empowered to reach their full potential. We are committed to providing a holistic
              education that fosters academic excellence, critical thinking, creativity, and
              personal growth. Through a balanced approach to learning, we aim to equip our students
              with the skills and values necessary to become compassionate, responsible, and
              successful global citizens.
            </Trans>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Moto;
