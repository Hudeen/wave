import React from 'react';
import './Header.scss';
import logo from '../../assets/icon/logo.svg';
import inst from '../../assets/icon/inst.svg';
import vk from '../../assets/icon/vk.svg';
// import timepad from '../../assets/icon/timepad.svg';
import geo from '../../assets/icon/geo.svg';
import tg from '../../assets/icon/tg.svg';
import BurgerMenu from '../ui/burgermenu/Burgermenu';

const Header: React.FC = () => {
    const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
        event.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    };

    return (
        <header>
            <div className='desktop'>
                <div className="logo">
                    <img src={logo} alt="Wave Logo" />
                </div>
                <nav className="nav-links">
                    <a href="https://geopro-event.timepad.ru/event/2842320/">БИЛЕТЫ</a>
                    <a href="#locations" onClick={(e) => handleNavClick(e, 'locations')}>ЛОКАЦИИ</a>
                    <a href="#headliners" onClick={(e) => handleNavClick(e, 'headliners')}>ХЕДЛАЙНЕРЫ</a>
                    <a href="#photos" onClick={(e) => handleNavClick(e, 'photos')}>ФОТО</a>
                    <a href="https://forms.gle/iwzT351qpKfNFA15A">МАРКЕТ</a>
                </nav>
                <div className="social-icons">
                    <a href="https://www.instagram.com/geowave24/"><img src={inst} alt="Instagram" /></a>
                    <a href="https://vk.com/geowave24"><img src={vk} alt="VK" /></a>
                    {/* <a href="#"><img src={timepad} alt="Timepad" /></a> */}
                    <a href="https://t.me/geokissu"><img src={tg} alt="Telegram" /></a>
                    <a href="https://geometria.ru/"><img src={geo} alt="Geo" /></a>
                </div>
            </div>
            <BurgerMenu />
        </header>
    );
};

export default Header;
