import React from 'react';
import gpt3Logo from '../../assets/logo.svg';
import './footer.css';

const Footer = () => {
  return (
    <div className="gpt3__footer section_padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">Do You Want To Step Into The 
        Future Before Others?</h1>
      </div>
      <div className="gpt3__footer-btn">
        <p>Request Early Access</p> 
      </div>
      <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
      <img src={gpt3Logo} alt="logo" />
      </div>
      </div>
    </div>
  )
}

export default Footer