import './Header.scss';
import logo from '../../assets/icon/logo.svg'
import inst from '../../assets/icon/inst.svg'
import vk from '../../assets/icon/vk.svg'
import timepad from '../../assets/icon/timepad.svg'
import geo from '../../assets/icon/geo.svg'
import tg from '../../assets/icon/tg.svg'
import BurgerMenu from '../ui/burgermenu/Burgermenu';

const Header = () => {
    return (
        <header>
            <div className='desktop'>
                <div className="logo">
                    <img src={logo} alt="Wave Logo" />
                </div>
                <nav className="nav-links">
                    <a href="#tickets">БИЛЕТЫ</a>
                    <a href="#locations">ЛОКАЦИИ</a>
                    <a href="#headliners">ХЕДЛАЙНЕРЫ</a>
                    <a href="#photos">ФОТО</a>
                    <a href="#market">МАРКЕТ</a>
                </nav>
                <div className="social-icons">
                    <a href="#"><img src={inst} alt="Instagram" /></a>
                    <a href="#"><img src={vk} alt="VK" /></a>
                    <a href="#"><img src={timepad} alt="Timepad" /></a>
                    <a href="#"><img src={tg} alt="Telegram" /></a>
                    <a href="#"><img src={geo} alt="Geo" /></a>
                </div>
            </div>
            <BurgerMenu />
        </header>
    );
};

export default Header;
