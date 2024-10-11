import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

//   import 'slick-carousel/slick/slick.css';
//   import 'slick-carousel/slick/slick-theme.css';
//   import $ from 'jquery';
//   import 'slick-carousel';

import styles from './HeroBanner.module.scss';

const Banner = () => {
    const settings = {
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        focusOnSelect: true,
        autoplay: false,
        autoplaySpeed: 10000,
        arrows: true,
        infinite: true,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    dots: true,
                    arrows: false,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <section className={styles['hero-banner']}>
            <div className={styles['carousel-container']}>
                <div className={styles['hero-section']}>
                    <div className={styles['hero-content']}>
                        <div className={styles['hero-title-wrapper']}>
                            <h1 className={styles['hero-title']}>
                                A VR <span>facilita a vida</span>
                            </h1>
                            <div className={styles['hero-subtitle']}>
                                <span>Somos uma marca de </span>
                                <b>soluções essenciais </b>
                                <span>
                                    que otimizam a gestão de ponto, benefícios, mobilidade e muito
                                    mais.
                                </span>
                            </div>
                        </div>

                        <div className={styles['hero-buttons']}>
                            <button className={styles['primary-button']}>
                                <div className={styles['button-content']}>
                                    <img className={styles['button-icon']} alt="" src="/assets/images/iconsvr.svg" />
                                    <div className={styles['button-label']}>Contrate agora</div>
                                    <img className={styles['button-icon']} alt="" src="/assets/images/iconsvr.svg" />
                                </div>
                            </button>
                            <button className={styles['secondary-button']}>
                                <img className={styles['button-icon']} alt="" src="/assets/images/iconsvr.svg" />
                                <div className={styles['button-label']}>Solicite uma proposta</div>
                                <img className={styles['button-icon']} alt="" src="/assets/images/iconsvr.svg" />
                            </button>
                        </div>
                    </div>
                </div>

                <Slider {...settings}>
                    <div className={styles['carousel-item']}>
                        <div className={styles['carousel-image-wrapper']}>
                            <img src="/assets/images/banner-1-vr.png" alt="Item 1" />
                        </div>
                    </div>
                    <div className={styles['carousel-item']}>
                        <div className={styles['carousel-image-wrapper']}>
                            <img src="/assets/images/banner-4.png" alt="Item 1" />
                        </div>
                    </div>
                    <div className={styles['carousel-item']}>
                        <div className={styles['carousel-image-wrapper']}>
                            <img src="/assets/images/banner-5.png" alt="Item 1" />
                        </div>
                    </div>
                    <div className={styles['carousel-item']}>
                        <div className={styles['carousel-image-wrapper']}>
                            <img src="/assets/images/banner-2.png" alt="Item 2" />
                        </div>
                    </div>
                    <div className={styles['carousel-item']}>
                        <div className={styles['carousel-image-wrapper']}>
                            <img src="/assets/images/banner-3.png" alt="Item 3" />
                        </div>
                    </div>
                    <div className={styles['carousel-item']}>
                        <div className={styles['carousel-image-wrapper']}>
                            <img src="/assets/images/banner-2.png" alt="Item 4" />
                        </div>
                    </div>
                    <div className={styles['carousel-item']}>
                        <div className={styles['carousel-image-wrapper']}>
                            <img src="/assets/images/banner-3.png" alt="Item 5" />
                        </div>
                    </div>
                    <div className={styles['carousel-item']}>
                        <div className={styles['carousel-image-wrapper']}>
                            <img src="/assets/images/banner-2.png" alt="Item 6" />
                        </div>
                    </div>
                </Slider>
            </div>
        </section>
    );
};

export default Banner;