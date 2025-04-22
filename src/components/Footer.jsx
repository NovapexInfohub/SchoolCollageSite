import React from 'react';
import { useTranslation } from 'react-i18next'; // Import the hook
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

function Footer() {
  const { t } = useTranslation(); // Use the translation hook to get the translation function

  return (
    <footer className="text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          {/* Optional additional content */}
        </div>
      </section>
      
      <section className="pt-4">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            {/* School Information */}
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">{t('schoolName')}</h6>
              <p>
                {t('address')}
              </p>
            </div>
            
            {/* Contact Information & Social Media */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">{t('contactUs')}</h6>
              <p>
                {t('email')}
              </p>
              <h6 className="text-uppercase fw-bold mb-3 mt-3">{t('followUs')}</h6>
              <div className="flex justify-center gap-4">
                <a href="https://www.instagram.com/ViswaPublicSchool" target="_blank" rel="noopener noreferrer" className="text-3xl text-pink-700" aria-label="Follow us on Instagram">
                  <InstagramIcon />
                </a>
                <a href="https://www.twitter.com/ViswaPublicSchool" target="_blank" rel="noopener noreferrer" className="text-3xl text-blue-500" aria-label="Follow us on Twitter">
                  <TwitterIcon />
                </a>
                <a href="https://www.facebook.com/ViswaPublicSchool" target="_blank" rel="noopener noreferrer" className="text-3xl text-blue-700" aria-label="Follow us on Facebook">
                  <FacebookIcon />
                </a>
              </div>
            </div>
            
            {/* Support Information */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">{t('support')}</h6>
              <div className="flex flex-col gap-3">
                <p>
                  {t('manvi')} <br />
                  {t('phone')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <div className="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
        {t('rightsReserved')}
      </div>
    </footer>
  );
}

export default Footer;
