import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from './HeroBanner.module.scss';
import Button from '../Button/Button';
import SectionTitle from '../SectionTitle/SectionTitle';

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
                {/* <div className={styles['hero-section']}>
                    <div className={styles['hero-content']}>
                        <div className={styles['hero-title-wrapper']}>
                            <SectionTitle as={'h1'} variant={['primary']}>
                                A VR <u>facilita a vida</u>
                            </SectionTitle>

                            <div className={styles['hero-subtitle']}>
                                Somos uma marca de <strong>soluções essenciais</strong>
                                que otimizam a gestão de ponto, benefícios,
                                mobilidade e muito mais.
                            </div>
                        </div>

                        <div className={styles['hero-buttons']}>
                            <Button variants={['primary', 'fit']}>
                                Contrate agora
                            </Button>

                            <Button variants={['white-borded', 'fit']}>
                                Solicite uma proposta
                            </Button>
                        </div>
                    </div>
                </div> */}

                <Slider className={styles['carousel']} {...settings}>
                    <div className={styles['carousel-item']}>
                        <div className={styles['carousel-image-wrapper']}>
                            <img src={process.env.PUBLIC_URL + '/assets/images/banner-1-vr.png'} alt="" />
                        </div>
                    </div>
                    <div className={styles['carousel-item']}>
                        <div className={styles['carousel-image-wrapper']}>
                            <img src={process.env.PUBLIC_URL + '/assets/images/banner-4.png'} alt="" />
                        </div>
                    </div>
                    <div className={styles['carousel-item']}>
                        <div className={styles['carousel-image-wrapper']}>
                            <img src={process.env.PUBLIC_URL + '/assets/images/banner-5.png'} alt="" />
                        </div>
                    </div>
                    <div className={styles['carousel-item']}>
                        <div className={styles['carousel-image-wrapper']}>
                            <img src={process.env.PUBLIC_URL + '/assets/images/banner-2.png'} alt="" />
                        </div>
                    </div>
                    <div className={styles['carousel-item']}>
                        <div className={styles['carousel-image-wrapper']}>
                            <img src={process.env.PUBLIC_URL + '/assets/images/banner-3.png'} alt="" />
                        </div>
                    </div>
                    <div className={styles['carousel-item']}>
                        <div className={styles['carousel-image-wrapper']}>
                            <img src={process.env.PUBLIC_URL + '/assets/images/banner-2.png'} alt="" />
                        </div>
                    </div>
                    <div className={styles['carousel-item']}>
                        <div className={styles['carousel-image-wrapper']}>
                            <img src={process.env.PUBLIC_URL + '/assets/images/banner-3.png'} alt="" />
                        </div>
                    </div>
                    <div className={styles['carousel-item']}>
                        <div className={styles['carousel-image-wrapper']}>
                            <img src={process.env.PUBLIC_URL + '/assets/images/banner-2.png'} alt="" />
                        </div>
                    </div>
                </Slider>
            </div>
        </section>
    );
};

export default Banner;