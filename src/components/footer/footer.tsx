import './footer.scss'
import logo from '../../assets/icon/logo.svg'

const Footer = () => {
    return (
        <>
            <footer>
                <img className='logo' src={logo} alt="Logo" />

                <ul>
                    <li>
                        <span>19-21 Июля</span>
                        <span>ОЗ. ТУРГОЯК</span>
                        <span>Клуб-отель «Золотой пляж»</span>
                        <span>#GEOWAVE</span>
                    </li>
                </ul>

                <div className="social-icons">
                    <a href="https://www.instagram.com/geowave24/">
                        <img src="/src/assets/icon/inst.svg" alt="Instagram"/>
                    </a>
                    <a href="https://vk.com/geowave24">
                        <img src="/src/assets/icon/vk.svg" alt="VK"/>
                    </a>
                    {/* <a href="#">
                        <img src="/src/assets/icon/timepad.svg" alt="Timepad"/>
                    </a> */}
                    <a href="https://t.me/geokissu">
                        <img src="/src/assets/icon/tg.svg" alt="Telegram"/>
                    </a>
                    <a href="https://geometria.ru/">
                        <img src="/src/assets/icon/geo.svg" alt="Geo"/>
                    </a>
                </div>
            </footer>
        </>
    )
}

export default Footer