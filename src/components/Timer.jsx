import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

function Timer() {
  const { t } = useTranslation(); // Access the translation function
  const eventDate = new Date('March 27, 2024 00:00:00');
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining(eventDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining(eventDate));
    }, 1000);

    return () => clearInterval(timer); // Cleanup on component unmount
  }, [eventDate]);

  // Helper function to calculate time remaining
  function calculateTimeRemaining(eventDate) {
    const now = new Date();
    const difference = eventDate - now;

    if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  return (
    <div className='mt-3 mb-3 p-3 lg:p-5 text-light bg-gradient-to-br from-indigo-800 to-gray-800'>
      <div className='container gap-3 lg:gap-0 flex flex-col lg:flex-row justify-around lg:p-5 p-4 items-center'>
        <div className='flex flex-col lg:gap-5 gap-3'>
          <span className='text-small lg:text-2xl'>
            {t('eventDate')} 27 & 28 March 2024
          </span>
          <span className='text-lg hidden lg:block lg:text-4xl lg:w-[400px] w-auto font-bold'>
            {t('eventTitle')}
          </span>
        </div>
        <div className='flex justify-center items-center'>
          <img
            src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F806786569%2F1633184430263%2F1%2Foriginal.20240712-162331?w=600&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C396%2C1600%2C800&s=6128b1650e792e3efa97a87aebe9c22f"
            alt="Event Logo"
            className='w-[250px] lg:w-[300px]'
          />
        </div>
      </div>

      {/* Countdown Timer */}
      <div className='mt-5 text-center'>
        <span className='text-xl lg:text-3xl text-white font-semibold'>
          {t('timeRemaining')}: {timeRemaining.days} {t('days')} {timeRemaining.hours} {t('hours')} {timeRemaining.minutes} {t('minutes')} {timeRemaining.seconds} {t('seconds')}
        </span>
      </div>
    </div>
  );
}

export default Timer;
