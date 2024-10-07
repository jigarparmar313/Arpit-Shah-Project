import React from 'react';
import '../styles/WhatsApp.css'; // Add your custom CSS here if necessary

const WhatsAppButton = () => {
  const phoneNumber = "9586656111"; // Phone number in international format
  const message = "Hello!"; // Default message to pre-fill

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div
      id="qlwapp"
      className="qlwapp qlwapp-free qlwapp-button qlwapp-bottom-right qlwapp-all qlwapp-rounded qlwapp-js-ready desktop"
    >
      <div className="qlwapp-container">
        <a
          className="qlwapp-toggle"
          role="button"
          tabIndex="0"
          onClick={handleClick} // Handle click to open WhatsApp chat
        >
          <i className="qlwapp-icon qlwapp-whatsapp-icon">
          <i className="fab fa-whatsapp"></i>
          </i>
          <i className="qlwapp-close">×</i>
          <span className="qlwapp-text">How can I help you?</span>
        </a>
      </div>
    </div>
  );
};

export default WhatsAppButton;
