import React from 'react';
import { useTranslation } from 'react-i18next';
import chairmanImg from '../assets/jane.jpg';

function Main1() {
  const { t } = useTranslation();

  return (
    <div className='lg:p-5 p-3 d-flex mt-4 mb-5 shadow bg-light flex-column align-items-center' style={{ backgroundColor: "whitesmoke" }}>
      <div className='d-flex flex-column fw-bolder justify-content-center align-items-center'>
        <div className='flex lg:flex-row flex-col items-center justify-center gap-2 w-full lg:p-5 text-center'>
          <span className='text-dark mt-3 text-2xl lg:text-5xl'>{t('vision')}</span>
          <span className='text-primary text-2xl lg:text-5xl lg:mt-3'>{t('technology')}</span>
        </div>
      </div>
      <hr className='w-full mt-3' />

      <div className="container pb-5 w-full grid grid-cols-1 lg:grid-cols-1 mt-5 relative">
        <img
          src="https://www.creativefabrica.com/wp-content/uploads/2023/02/04/Ornament-frame-PNG-Graphics-59934430-1-1-580x390.png"
          alt=""
          className='absolute w-full h-[35rem] top-[-50px] lg:block hidden'
        />

        <div className='bg-cover bg-center lg:p-[3rem] container lg:w-[1000px]'>
          <div className='flex items-center gap-3 justify-start'>
            <img
              src={chairmanImg}
              className='shadow rounded-full w-[80px] lg:w-[90px] h-[80px] lg:h-[90px] object-cover'
              alt="Chairman"
            />
            <div className='flex flex-col'>
              <span className='lg:text-2xl text-xl font-bold'>{t('name')}</span>
              <span className='text-sm text-grey-500'>{t('chairmanMessage')}</span>
            </div>
          </div>
          <p className='mt-4 text-justify text-lg'>
          {t('message')}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main1;
