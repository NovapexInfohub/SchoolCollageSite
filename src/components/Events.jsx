import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const eventsData = [
  {
    category: "first_events",
    events: [
      {
        title: "math_wizard_competition",
        date: "2024-08-15",
        description: "math_wizard_competition_desc"
      },
      {
        title: "art_fair",
        date: "2024-09-10",
        description: "art_fair_desc"
      },
      {
        title: "physical_fitness_week",
        date: "2024-10-05",
        description: "physical_fitness_week_desc"
      }
    ]
  },
  {
    category: "second_events",
    events: [
      {
        title: "science_fair",
        date: "2024-11-20",
        description: "science_fair_desc"
      },
      {
        title: "computer_science_quiz",
        date: "2024-12-15",
        description: "computer_science_quiz_desc"
      },
      {
        title: "social_studies_debate",
        date: "2025-01-10",
        description: "social_studies_debate_desc"
      }
    ]
  },
  {
    category: "senior_secondary_events",
    events: [
      {
        title: "science_olympiad",
        date: "2025-02-25",
        description: "science_olympiad_desc"
      },
      {
        title: "commerce_fair",
        date: "2025-03-15",
        description: "commerce_fair_desc"
      },
      {
        title: "mathematics_challenge",
        date: "2025-04-20",
        description: "mathematics_challenge_desc"
      }
    ]
  }
];

const Events = () => {
  const { t, i18n } = useTranslation(); // Access translations and i18n instance
  const [activeCategory, setActiveCategory] = useState('first_events');

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  const renderEvents = () => {
    const categoryData = eventsData.find((data) => data.category === activeCategory);
    if (!categoryData) return <p className="text-center text-gray-600">{t('no_events_found')}</p>;

    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categoryData.events.map((event, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="p-6">
              <h4 className="text-xl font-bold mb-2 text-indigo-700">{t(event.title, { defaultValue: event.title })}</h4>
              <p className="text-gray-600 mb-3 text-sm">
                {new Date(event.date).toLocaleDateString(i18n.language, {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
              <p className="text-gray-700">{t(event.description, { defaultValue: event.description })}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-12 text-indigo-900">{t('top_events')}</h2>
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {eventsData.map((data, index) => (
          <button
            key={index}
            className={`px-6 py-3 rounded-full transition-all duration-300 ${activeCategory === data.category ? 'bg-indigo-700 text-white font-bold shadow-lg' : 'bg-white text-indigo-700 hover:bg-indigo-100'}`}
            onClick={() => handleCategoryClick(data.category)}
            aria-label={t(`view_${data.category}`)}
          >
            {t(data.category, { defaultValue: data.category })}
          </button>
        ))}
      </div>
      {renderEvents()}
    </div>
  );
};

export default Events;
