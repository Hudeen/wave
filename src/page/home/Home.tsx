import './Home.scss';
import logo from '../../assets/icon/logo.svg';
import pic1 from '../../assets/images/1.jpg';
import pic2 from '../../assets/images/2.jpg';
import pic3 from '../../assets/images/3.jpg';
import pic4 from '../../assets/images/4.jpg';
import pic5 from '../../assets/images/5.jpg';
import pic6 from '../../assets/images/6.jpg';
import pic7 from '../../assets/images/7.jpg';
import pic8 from '../../assets/images/8.jpg';
import pic9 from '../../assets/images/9.jpg';
import pic10 from '../../assets/images/10.jpg';
import pic11 from '../../assets/images/11.jpg';
import pic12 from '../../assets/images/12.jpg';
import pic13 from '../../assets/images/13.jpg';
import pic14 from '../../assets/images/14.jpg';
import pic15 from '../../assets/images/15.jpg';
import pic16 from '../../assets/images/16.jpg';
import pic17 from '../../assets/images/17.jpg';

import secret from '../../assets/images/secret.jpg'
import pola from '../../assets/images/pola.jpg'
import agma from '../../assets/images/agma.jpeg'
import shutta from '../../assets/images/shutta.jpeg'

import geometria from '../../assets/icon/geometria.svg'
import europe from '../../assets/icon/europe.svg'
import gold from '../../assets/icon/gold.svg'
import show from '../../assets/icon/show.svg'
import zen from '../../assets/icon/zen.svg'
import Footer from '../../components/footer/footer';

import picturesDesk from '../../assets/images/pictures-desktop.jpg'
import buttonBack from '../../assets/images/buttons-back.png'

import float1 from '../../assets/images/float1.jpeg'
import float2 from '../../assets/images/float2.jpeg'
import float3 from '../../assets/images/float3.jpeg'
import float4 from '../../assets/images/float4.jpeg'

import kontakt1 from '../../assets/images/kontakt1.jpeg'
import kontakt2 from '../../assets/images/kontakt2.jpeg'
import kontakt3 from '../../assets/images/kontakt3.jpeg'
import kontakt4 from '../../assets/images/kontakt4.jpeg'

import pirs1 from '../../assets/images/pirs1.jpeg'
import pirs2 from '../../assets/images/pirs2.jpeg'
import pirs3 from '../../assets/images/pirs3.jpeg'
import pirs4 from '../../assets/images/pirs4.jpeg'

import bbq1 from '../../assets/images/bbq1.jpg'
import bbq2 from '../../assets/images/bbq2.jpg'

// import kontakt5 from '../../assets/images/kontakt5.jpg'




const Home = () => {
    return (
        <>
            <div className='home'>
                {/* Main Section */}
                <div className='main'>
                    <div className='info'>
                        <img src={logo} alt="Logo" />
                        <h1>GEOWAVE</h1>
                        <h2>фестиваль музыки,<br />природы и экстрима</h2>
                        <h3>19-21 Июля</h3>
                        <a href='https://geopro-event.timepad.ru/event/2842320/'><button className='desktop'>Купить билет</button></a>
                    </div>
                    <div className='artists'>
                        <p>
                            SecretGuest Pola Agma(live) Shutta Rinat Gabba NAASA Seething Flow Tsarapkin TAYU(live) Beloklokov
                            I’m! Edward Morrow М. Rosenbauer Gédonist Chertea Gorbunov AAA+++ Emelyanov Vandy Pelsh a2y
                            Hippush & Tam Rouse Tim Poulo Strijevsky Agate & E.V. Lizzy Baah Vill Maksimcraaft Aem-kei
                            Andrey Gronsky Maxforce Sorry I’m Fuurir No Sense Slavinskas Eddy Novox Boozy Isaev Caroline
                            KVDRT OlKam
                        </p>
                    </div>

                    <a href='https://geopro-event.timepad.ru/event/2842320/'><button className='mobile'>Купить билет</button></a>
                </div>

                {/* Pictures Section */}
                <div className='pictures'>
                    <div className='item'>
                        <img className='picc' src={pic1} alt="Image 1" />
                        <img className='big-pic' src={pic2} alt="Image 2" />
                        <img className='pic' src={pic3} alt="Image 3" />
                        <img className='pic' src={pic4} alt="Image 4" />
                        <img className='pic' src={pic5} alt="Image 5" />
                        <img className='pic' src={pic6} alt="Image 6" />
                        <img className='pic' src={pic7} alt="Image 7" />
                        <img className='pic' src={pic8} alt="Image 8" />
                        <img className='picc' src={pic9} alt="Image 9" />
                        <img className='pic' src={pic10} alt="Image 10" />
                        <img className='pic' src={pic11} alt="Image 11" />
                        <img className='picc' src={pic12} alt="Image 12" />
                        <img className='pic' src={pic13} alt="Image 13" />
                        <img className='pic' src={pic14} alt="Image 14" />
                        <img className='pic' src={pic15} alt="Image 15" />
                        <img className='pic' src={pic16} alt="Image 16" />

                        <div className='picc ticket'>
                            <img src={pic17} alt="Event Banner" style={{ width: '100%', height: 'auto', display: 'block' }} />
                            <a href='https://geopro-event.timepad.ru/event/2842320/'><button className='buy' style={{
                                position: 'absolute',
                                top: '25%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                color: '#ffffff',
                                border: 'none',
                                cursor: 'pointer'
                            }}>
                                КУПИТЬ БИЛЕТ
                            </button></a>
                            <a href='#map'>
                                <button className='way' style={{
                                    position: 'absolute',
                                    bottom: '20%',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    backgroundColor: 'transparent',
                                    color: '#ffffff',
                                    border: '2px solid #ffffff',
                                    cursor: 'pointer'
                                }}>
                                    КАК ПРОЕХАТЬ
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className='item-desktop'>
                        <img src={picturesDesk} />
                        <div className='ticket'>
                            <img src={buttonBack} />
                            <div className='buttons'>
                                <a href='https://geopro-event.timepad.ru/event/2842320/'><button className='buy'>
                                    КУПИТЬ БИЛЕТ
                                </button></a>
                                <button className='way'>
                                    КАК ПРОЕХАТЬ
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='location'>
                    <div id='locations' className='title'>
                        <h1>ЛОКАЦИИ</h1>
                    </div>
                    <div className='flex'>
                        <div className='info'>
                            <div className='subtitle'>
                                <h2>FLOAT STAGE</h2>
                            </div>
                            <div className='text'>
                                <p>Уникальная площадка под открытым небом с прекрасным видом на озеро Тургояк. Здесь фестиваль встречает рассвет под музыку хедлайнеров этого года: AGMA, POLA и специального секретного гостя. Пятничным лайнапом займется челябинская промокоманда — 3.12.com. Субботний таймлист отметится приглашенными диск-жокеями из Уфы и Челябинска.</p>
                            </div>
                        </div>
                        <div className='item'>
                            <img className='pic' src={float1} alt="FLOAT STAGE 1" />
                            <img className='pic' src={float2} alt="FLOAT STAGE 2" />
                            <img className='pic' src={float3} alt="FLOAT STAGE 3" />
                            <img className='pic' src={float4} alt="FLOAT STAGE 4" />
                        </div>
                    </div>
                </div>

                {/* KONTAKT STAGE */}
                <div className='location'>
                    <div className='flex reverse'>
                        <div className='info'>
                            <div className='subtitle'>
                                <h2> KONTAKT STAGE</h2>
                            </div>
                            <div className='text'>
                                <p>Локация пронизанная клубной энергетикой, здесь соберутся диджеи с дерзким андеграундным звуком, а главным хедлайнером станет питерский диггер — Shutta. В пятницу встречайте авангард молодой тусовки Челябинска вместе с командой «Черная Касса». Субботой займутся постоянные участники фестиваля из Уфы — Confiara.</p>
                            </div>
                        </div>
                        <div className='item'>
                            <img className='pic pic1' src={kontakt1} alt="FLOAT STAGE 1" />
                            <img className='pic pic2' src={kontakt2} alt="FLOAT STAGE 2" />
                            <img className='pic pic3' src={kontakt3} alt="FLOAT STAGE 3" />
                            <img className='pic pic4' src={kontakt4} alt="FLOAT STAGE 4" />

                        </div>
                    </div>
                </div>

                {/* PIRS STAGE */}
                <div className='location'>
                    <div className='flex'>
                        <div className='info'>
                            <div className='subtitle'>
                                <h2>PIRS STAGE</h2>
                            </div>
                            <div className='text'>
                                <p>Постоянная дневная локация фестиваля, где можно насладиться
                                    ярким июльским солнцем под диджей-сеты артистов фестиваля.
                                    Именно здесь пройдет утренняя йога, саундхиллинг, экстремальные активности
                                    и спортивные соревнования.
                                    Субботним вечером танцуйте вместе с шоукейсом екатеринбуржского
                                    бара Le
                                    Bourg 1905.</p>
                            </div>
                        </div>
                        <div className='item'>
                            <img className='pic pic1' src={pirs1} alt="FLOAT STAGE 1" />
                            <img className='pic pic2' src={pirs2} alt="FLOAT STAGE 2" />
                            <img className='pic pic3' src={pirs3} alt="FLOAT STAGE 3" />
                            <img className='pic pic4' src={pirs4} alt="FLOAT STAGE 4" />

                        </div>
                    </div>
                </div>


                <div className='location bbq'>
                    <div className='flex reverse'>
                        <div className='info'>
                            <div className='subtitle'>
                                <h2> BBQ STAGE</h2>
                            </div>
                            <div className='text'>
                                <p>Площадка под открытым небом, где в субботу
                                    и воскресенье
                                    пройдет фестивальный маркет. Заходите прикупить для себя воспоминание
                                    о
                                    фестивале и послушайте специальный шоукейс диджеев из башкирской
                                    столицы.</p>
                            </div>
                        </div>
                        <div className='item'>
                            <img className='pic bbq1' src={bbq1} alt="FLOAT STAGE 1" />
                            <img className='pic bbq2' src={bbq2} alt="FLOAT STAGE 2" />
                        </div>
                    </div>
                </div>


                <div id='headliners' className='title-headliners'>
                    <h1>ХЕДЛАЙНЕРЫ</h1>
                </div>

                <div className='headliners'>
                    <div className='picc ticket'>
                        <img src={secret} alt="Event Banner" style={{ width: '100%', height: 'auto', display: 'block' }} />
                        <span className='title' style={{
                            position: 'absolute',
                            border: 'none',
                            cursor: 'pointer'
                        }}>
                            SECRET <br /> GUEST
                        </span>
                    </div>

                    <div className='picc ticket'>
                        <img src={pola} alt="Event Banner" style={{ width: '100%', height: 'auto', display: 'block' }} />
                        <span className='title' style={{
                            position: 'absolute',
                            border: 'none',
                            cursor: 'pointer'
                        }}>
                            POLA
                        </span>
                        <span className='subtitle'>Atlas Club, Msk</span>
                    </div>

                    <div className='picc ticket'>
                        <img src={agma} alt="Event Banner" style={{ width: '100%', height: 'auto', display: 'block' }} />
                        <span className='title' style={{
                            position: 'absolute',
                            border: 'none',
                            cursor: 'pointer'
                        }}>
                            AGMA
                        </span>
                        <span className='subtitle'>Gazgolder, Msk</span>
                    </div>

                    <div className='picc ticket'>
                        <img src={shutta} alt="Event Banner" style={{ width: '100%', height: 'auto', display: 'block' }} />
                        <span className='title' style={{
                            position: 'absolute',
                            border: 'none',
                            cursor: 'pointer'
                        }}>
                            Shutta
                        </span>
                        <span className='subtitle'>Roots United, Spb</span>
                    </div>
                </div>
                <div className='geowave'>
                    <img src={logo} />
                    <div className='name'>
                        <h1>GEOWAVE</h1>
                        <h2>фестиваль музыки, <br />
                            природы
                            и экстрима
                        </h2>
                    </div>
                    <a href='https://geopro-event.timepad.ru/event/2842320/'></a><button className='buy'>
                        КУПИТЬ БИЛЕТ
                    </button><a />
                </div>
                <h1 className='partner-title'>ПАРТНЁРЫ</h1>
                <div className='partner'>
                    <div className='partner-item'>
                        <img src={geometria} />
                    </div>
                    <div className='partner-item'>
                        <img src={europe} />
                    </div>
                    <div className='partner-item'>
                        <img src={gold} />
                    </div>
                    <div className='partner-item'>
                        <img src={show} />
                    </div>
                    <div className='partner-item'>
                        <img src={zen} />
                    </div>
                </div>
                <div className='position'>
                    <div className='text'>
                        <h1>МЕСТОПОЛОЖЕНИЕ</h1>
                        <h2>Россия, Челябинская область,
                            г. Миасс, озеро Тургояк,
                            Клуб-отель «Золотой Пляж».
                        </h2>
                    </div>
                    <div id='map' className='map'><iframe src="https://yandex.ru/map-widget/v1/?ll=60.111922%2C55.162625&mode=search&oid=173171544736&ol=biz&sctx=ZAAAAAgBEAAaKAoSCfiNrz2zzENAEUuTUtDtTUpAEhIJRG0bRkHwyj8R5A8GnnsPtz8iBgABAgMEBSgKOABAzFdIAWoCcnWdAc3MTD2gAQCoAQC9ARfRy3vCAQagpdCOhQWCAhfQotGD0YDQs9C%2B0Y%2FQuiDRgdC40YLQuIoCAJICBjEyMTgyOZoCDGRlc2t0b3AtbWFwcw%3D%3D&sll=60.111922%2C55.162625&sspn=0.139816%2C0.056280&text=%D0%A2%D1%83%D1%80%D0%B3%D0%BE%D1%8F%D0%BA%20%D1%81%D0%B8%D1%82%D0%B8&z=13.59"></iframe></div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Home;