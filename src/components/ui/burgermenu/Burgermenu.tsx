import React, { useState, useEffect } from 'react';
import './Burgermenu.scss';
import logo from '../../../assets/icon/logo.svg';

const BurgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    }
    toggleMenu(); // Закрыть меню после клика
  };

  const handleExternalLinkClick = () => {
    toggleMenu(); // Закрыть меню после клика на внешнюю ссылку
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [isOpen]);

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
              <li><a href='https://geopro-event.timepad.ru/event/2842320/' onClick={handleExternalLinkClick}>БИЛЕТЫ</a></li>
              <li><a onClick={(e) => handleNavClick(e, 'locations')}>ЛОКАЦИИ</a></li>
              <li><a onClick={(e) => handleNavClick(e, 'headliners')}>ХЕДЛАЙНЕРЫ</a></li>
              {/* <li><a onClick={(e) => handleNavClick(e, 'photos')}>ФОТО</a></li> */}
              <li><a href="https://forms.gle/iwzT351qpKfNFA15A">МАРКЕТ</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default BurgerMenu;
