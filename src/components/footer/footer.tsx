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
                        <span>#GEOWAV</span>
                    </li>
                </ul>

                <div className="social-icons">
                    <a href="#">
                        <img src="/src/assets/icon/inst.svg" alt="Instagram"/>
                    </a>
                    <a href="#">
                        <img src="/src/assets/icon/vk.svg" alt="VK"/>
                    </a>
                    <a href="#">
                        <img src="/src/assets/icon/timepad.svg" alt="Timepad"/>
                    </a>
                    <a href="#">
                        <img src="/src/assets/icon/tg.svg" alt="Telegram"/>
                    </a>
                    <a href="#">
                        <img src="/src/assets/icon/geo.svg" alt="Geo"/>
                    </a>
                </div>
            </footer>
        </>
    )
}

export default Footer