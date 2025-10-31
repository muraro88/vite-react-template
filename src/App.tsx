// App.jsx
import React from 'react';
import './App.css';
import { FaYoutube, FaTiktok, FaThreads, FaInstagram, FaWhatsapp, FaLink } from 'react-icons/fa6';

function App() {
  return (
    <div className="phone-container">
      <div className="phone-frame">
        <div className="status-bar">
          <span className="time">20:56</span>
          <div className="status-icons">
            <span className="signal"></span>
            <span className="wifi"></span>
            <span className="battery"></span>
          </div>
        </div>
        
        <div className="profile-container">
          <div className="header-buttons">
            <button className="circle-button"><span>✱</span></button>
            <button className="circle-button"><span>↑</span></button>
          </div>
          
          <div className="profile">
            <div className="profile-image">
              <img src="/profile-image.jpg" alt="Dra. Sonia Monteiro" />
            </div>
            <h1 className="doctor-name">Dra. Sonia Monteiro</h1>
            <p className="credentials">CRM RN - RN: 5569 | Clínica Médica RQE: 2364 Nutrologia</p>
            <p className="location">aplicada em Natal-RN</p>
            
            <div className="social-icons">
              <a href="#" className="social-icon"><FaYoutube /></a>
              <a href="#" className="social-icon"><FaTiktok /></a>
              <a href="#" className="social-icon"><FaThreads /></a>
              <a href="#" className="social-icon"><FaInstagram /></a>
            </div>
          </div>
          
          <div className="action-buttons">
            <button className="action-button whatsapp">
              <FaWhatsapp />
              <span>Agendar Consulta</span>
              <span className="more-icon">ⓘ</span>
            </button>
            
            <button className="action-button doctoralia">
              <img src="/doctoralia-icon.png" alt="Doctoralia" className="doctoralia-icon" />
              <span>Doctoralia</span>
              <span className="more-icon">ⓘ</span>
            </button>
            
            <button className="action-button site">
              <FaLink />
              <span>Site</span>
              <span className="more-icon">ⓘ</span>
            </button>
          </div>
          
          <div className="footer">
            <div className="footer-controls">
              <button className="text-size">Aa</button>
              <div className="link-info">
                <span className="lock-icon">🔒</span>
                <span className="link">linktr.ee</span>
              </div>
              <button className="refresh">↻</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
