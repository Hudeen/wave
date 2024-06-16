import React, { useState } from 'react';
import './Burgermenu.scss';
import logo from '../../../assets/icon/logo.svg'

const BurgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={`burger-menu ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className={`line ${isOpen ? 'open' : ''}`}></div>
        <div className={`line ${isOpen ? 'open' : ''}`}></div>
        <div className={`line ${isOpen ? 'open' : ''}`}></div>
      </div>
      <div className={`fullscreen-menu ${isOpen ? 'open' : ''}`}>
        <div className="menu-content">
          <div className="menu-logo">
            <img src={logo} alt="Logo" />
          </div>
          <nav>
            <ul>
              <li><a href="#tickets">БИЛЕТЫ</a></li>
              <li><a href="#locations">ЛОКАЦИИ</a></li>
              <li><a href="#headliners">ХЕДЛАЙНЕРЫ</a></li>
              <li><a href="#photos">ФОТО</a></li>
              <li><a href="#market">МАРКЕТ</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default BurgerMenu;
