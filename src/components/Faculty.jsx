import React from 'react';
import { useTranslation } from 'react-i18next';  // Import i18next hook
import principalImg from '../assets/principle.jpg';
import vicePrincipalImg from '../assets/jane.jpg';
import emilyImg from '../assets/english.jpg';
import michaelImg from '../assets/abc.jpg';
import sophiaImg from '../assets/abc.jpg';
import davidImg from '../assets/science.jpg';

const aboutData = [
  {
    name: "principal_name",
    description: "principal_title",
    image: principalImg,
    quote: "principal_quote",
  },
  {
    name: "vice_principal_name",
    description: "vice_principal_title",
    image: vicePrincipalImg,
    quote: "vice_principal_quote",
  },
  {
    name: "emily_johnson_name",
    description: "english_teacher_title",
    image: emilyImg,
    quote: "english_teacher_quote",
  },
  {
    name: "michael_brown_name",
    description: "mathematics_teacher_title",
    image: michaelImg,
    quote: "mathematics_teacher_quote",
  },
  {
    name: "sophia_davis_name",
    description: "science_teacher_title",
    image: sophiaImg,
    quote: "science_teacher_quote",
  },
  {
    name: "david_wilson_name",
    description: "computer_science_teacher_title",
    image: davidImg,
    quote: "computer_science_teacher_quote",
  }
];


function Faculty() {
  const { t } = useTranslation();  // Use the translation hook to get the `t` function

  const principal = aboutData.find(member => member.description === "principal_title");
  const vicePrincipal = aboutData.find(member => member.description === "vice_principal_title");
  const otherFaculty = aboutData.filter(member => member.description !== "principal_title" && member.description !== "vice_principal_title");

  return (
    <div className='container mx-auto px-4 py-16'>
      <h1 className="text-4xl font-bold text-center mb-16 text-indigo-800">{t('facultyTitle')}</h1>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {principal && (
          <div className="rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <img className="h-full w-full object-cover md:w-48" src={principal.image} alt={t(principal.name)} />
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-blue-600 font-semibold">{t(principal.description)}</div>
                <h2 className="block mt-1 text-2xl leading-tight font-medium text-black">{t(principal.name)}</h2>
                <p className="mt-2 text-gray-500">{t(principal.quote)}</p>
              </div>
            </div>
          </div>
        )}

        {vicePrincipal && (
          <div className="rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <img className="h-full w-full object-cover md:w-48" src={vicePrincipal.image} alt={t(vicePrincipal.name)} />
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-green-600 font-semibold">{t(vicePrincipal.description)}</div>
                <h2 className="block mt-1 text-2xl leading-tight font-medium text-black">{t(vicePrincipal.name)}</h2>
                <p className="mt-2 text-gray-500">{t(vicePrincipal.quote)}</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {otherFaculty.length > 0 && (
        <div>
          <h2 className="text-3xl font-bold mb-8 text-center text-indigo-800">{t('facultyGroupTitle')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherFaculty.map((data, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                <img className="h-56 w-full object-cover" src={data.image} alt={t(data.name)} />
                <div className="p-6">
                  <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{t(data.description)}</div>
                  <h3 className="mt-1 text-xl leading-tight font-medium text-black">{t(data.name)}</h3>
                  <p className="mt-2 text-gray-500">{t(data.quote)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Faculty;
