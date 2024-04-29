import React from 'react';
 import  "./Maps.css";

const MapComponent = () => {
  return (
    // <div className="maps">
    //   <iframe
    //     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.621694221964!2d39.22974799535693!3d-6.776292510759074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4ffd9443848f%3A0x177d30c63cc6adc6!2sC!5e0!3m2!1sen!2stz!4v1704468258544!5m2!1sen!2stz"
    //     width="100%"
    //     height="550"
    //     style={{ border: 0 }}
    //     allowFullScreen=""
    //     loading="lazy"
    //     referrerPolicy="no-referrer-when-downgrade"
    //   ></iframe>
    // </div>
    <div className="maps">
  <iframe
    title="Google Maps Embed"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.621694221964!2d39.22974799535693!3d-6.776292510759074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4ffd9443848f%3A0x177d30c63cc6adc6!2sC!5e0!3m2!1sen!2stz!4v1704468258544!5m2!1sen!2stz"
    width="100%"
    height="550"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

  );
};

export default MapComponent;
