import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { AccessTime, LocationOn, GetApp } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
function Contact() {
    const { t } = useTranslation(); // Hook to access translations
    const form = useRef();
    const navigate = useNavigate();

    const sendEmail = async (e) => {
        e.preventDefault();
        const formData = new FormData(form.current);
        const email = formData.get('email');
        const message = formData.get('message');

        if (!email || !message) {
            alert(t('contactForm.validationMessage'));
            return;
        }

        try {
            alert(t('contactForm.successMessage'));
            navigate("/home");
        } catch (error) {
            alert(t('contactForm.errorMessage'));
        }
    };

    return (
        <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen">

            {/* Hero Section */}
            <div className='relative h-[90vh] bg-cover bg-center' style={{ backgroundImage: "url('https://springdale.peelschools.org/images/b82d5de2-8621-4a01-9259-2a45f8789911')" }}>
                <div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
                    <div className="container mx-auto px-6 mt-5 lg:mt-0 lg:mb-0 mb-5">
                        <form ref={form} onSubmit={sendEmail} className='bg-white bg-opacity-95 max-w-2xl mx-auto p-10 rounded-3xl shadow-2xl transform hover:scale-105 transition duration-300'>
                            <h2 className='text-5xl font-extrabold mb-8 text-center text-blue-800 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400'>{t('contactForm.contactUs')}</h2>
                            <input
                                type="email"
                                name="email"
                                placeholder={t('contactForm.emailPlaceholder')}
                                className="w-full p-4 mb-6 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                                required
                            />
                            <textarea
                                name="message"
                                placeholder={t('contactForm.messagePlaceholder')}
                                className='w-full p-4 mb-6 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300'
                                rows="5"
                                required
                            ></textarea>
                            <button
                                type='submit'
                                className="w-full py-4 bg-gradient-to-r from-blue-500 to-teal-400 text-white rounded-lg shadow-lg hover:from-blue-600 hover:to-teal-500 transition duration-300 text-lg font-semibold transform hover:scale-105"
                            >
                                {t('contactForm.sendMessage')}
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Contact Info Section */}
            <div className="container mx-auto py-20 px-6">
                <h2 className="text-5xl font-extrabold mb-16 text-center text-blue-900 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">{t('contactInfo.getInTouch')}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="p-8 bg-white shadow-xl rounded-3xl hover:shadow-2xl transition duration-300 transform hover:scale-105 text-center">
                        <AccessTime className="text-5xl text-blue-500 mb-6 mx-auto" style={{ fontSize: "3rem" }} />
                        <h3 className="text-2xl font-semibold mb-4 text-center text-blue-800">{t('contactInfo.officeHours')}</h3>
                        <p className="text-gray-600 text-center">{t('contactInfo.mondayToFriday')}</p>
                        <p className="text-gray-600 text-center">{t('contactInfo.saturday')}</p>
                        <p className="text-gray-600 text-center">{t('contactInfo.sunday')}</p>
                    </div>
                    <div className="p-8 bg-white shadow-xl rounded-3xl hover:shadow-2xl transition duration-300 transform hover:scale-105 text-center">
                        <LocationOn className="text-5xl text-blue-500 mb-6 mx-auto" style={{ fontSize: "3rem" }} />
                        <h3 className="text-2xl font-semibold mb-4 text-center text-blue-800">{t('contactInfo.visitUs')}</h3>
                        <p className="text-gray-600 text-center">{t('contactInfo.address')}</p>
                    </div>
                </div>
            </div>

            {/* Admission Information Section */}
            <div className="bg-blue-50 py-20 px-6">
                <div className="container mx-auto">
                    <h2 className="text-5xl font-extrabold text-center mb-16 text-blue-900 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">{t('admissionInfo.title')}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <div className="p-8 bg-white shadow-xl rounded-3xl hover:shadow-2xl transition duration-300 transform hover:scale-105">
                            <h3 className="text-2xl font-semibold mb-4 text-blue-800">{t('admissionInfo.process')}</h3>
                            <p className="text-gray-600 mb-6">{t('admissionInfo.processDescription')}</p>
                            <a href="https://i.pinimg.com/474x/88/6c/72/886c729c5e6310e29e269031d73a5625.jpg" target="_blank" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-teal-400 text-white rounded-full hover:from-blue-600 hover:to-teal-500 transition duration-300 transform hover:scale-105">
                                <GetApp className="mr-2" />
                                {t('admissionInfo.downloadForm')}
                            </a>
                        </div>
                        <div className="p-8 bg-white shadow-xl rounded-3xl hover:shadow-2xl transition duration-300 transform hover:scale-105">
                            <h3 className="text-2xl font-semibold mb-4 text-blue-800">{t('admissionInfo.criteria')}</h3>
                            <p className="text-gray-600">{t('admissionInfo.criteriaDescription')}</p>
                        </div>
                        <div className="p-8 bg-white shadow-xl rounded-3xl hover:shadow-2xl transition duration-300 transform hover:scale-105">
                            <h3 className="text-2xl font-semibold mb-4 text-blue-800">{t('admissionInfo.dates')}</h3>
                            <ul className="text-gray-600 space-y-2">
                                <li>{t('admissionInfo.formAvailability')}</li>
                                <li>{t('admissionInfo.lastSubmissionDate')}</li>
                                <li>{t('admissionInfo.entranceTest')}</li>
                                <li>{t('admissionInfo.resultAnnouncement')}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Map Section */}
            <div className="container mx-auto py-20 px-6">
                <h2 className="text-5xl font-extrabold text-center mb-16 text-blue-900 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">{t('mapSection.title')}</h2>
                <div className="rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition duration-300">
                    <iframe
                        title="Google Maps"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25765.067332804723!2d-94.16618081142514!3d36.17547421545538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c914b302758579%3A0xa131eaadd43bbc5a!2sSpringdale%2C%20AR%2C%20USA!5e0!3m2!1sen!2sin!4v1721770478701!5m2!1sen!2sin"
                        frameBorder="0"
                        className="w-full h-[500px] border-0"
                        allowFullScreen
                        loading="lazy"
                    ></iframe>
                </div>
            </div>

        </div>
    );
}

export default Contact;
