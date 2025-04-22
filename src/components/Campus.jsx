import React, { useState } from 'react';
import Modal from 'react-modal';
import { useTranslation } from 'react-i18next';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import img5 from '../assets/img5.jpg';
import img6 from '../assets/img10 (1).jpg';
import img7 from '../assets/img10 (2).jpg';
import img8 from '../assets/img10 (3).jpg';
import img9 from '../assets/img10 (4).jpg';

// Your image and video data
const imageGroups = {
  Images: [img1, img2, img3, img4, img5,img6, img7, img8, img9],
  Videos: [
    'https://www.youtube.com/embed/xziV_K45jZs',
    'https://www.youtube.com/embed/NA_QWOC4wNk',
    'https://www.youtube.com/embed/NA_QWOC4wNk',
    // more videos...
  ],
};

// Set app root for accessibility
Modal.setAppElement('#root');

const TabbedGallery = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('Images');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % imageGroups.Images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + imageGroups.Images.length) % imageGroups.Images.length);
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6">{t('titl')}</h2>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-8">
        {Object.keys(imageGroups).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg transition-all font-semibold ${
              activeTab === tab
                ? 'bg-indigo-600 text-white shadow-md'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {t(`tabs.${tab}`)}
          </button>
        ))}
      </div>

      {/* Grid Content */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {activeTab === 'Images' &&
          imageGroups.Images.map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer"
              onClick={() => openModal(index)}
            >
              <img
                src={src}
                alt={`Image ${index + 1}`}
                className="w-full h-48 object-cover object-center"
              />
            </div>
          ))}

        {activeTab === 'Videos' &&
          imageGroups.Videos.map((videoUrl, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              <iframe
                src={videoUrl}
                title={`Video ${index + 1}`}
                allowFullScreen
                className="w-full h-48 rounded-lg"
              ></iframe>
            </div>
          ))}
      </div>

      {/* Modal for enlarged image with slider */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel={t('modalLabel')}
        overlayClassName="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center"
        className="relative bg-white rounded-lg shadow-xl p-4 w-full max-w-4xl mx-auto outline-none"
      >
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 text-xl bg-gray-200 hover:bg-gray-300 rounded-full p-2"
        >
          ✕
        </button>

        <div className="flex items-center justify-between">
          <button onClick={prevImage} className="text-3xl p-2 hover:text-indigo-600">‹</button>
          <img
            src={imageGroups.Images[currentImageIndex]}
            alt="Enlarged"
            className="max-h-[70vh] mx-auto rounded-lg"
          />
          <button onClick={nextImage} className="text-3xl p-2 hover:text-indigo-600">›</button>
        </div>
      </Modal>
    </div>
  );
};

export default TabbedGallery;
