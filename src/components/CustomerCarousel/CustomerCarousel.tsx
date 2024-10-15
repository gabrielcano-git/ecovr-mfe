import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import styles from './CustomerCarousel.module.scss';

const CustomerCarousel: React.FC = () => {
    const logos: string[] = [
        process.env.PUBLIC_URL + '/assets/images/cliente-1.png',
        process.env.PUBLIC_URL + '/assets/images/cliente-3.png',
        process.env.PUBLIC_URL + '/assets/images/cliente-5.png',
        process.env.PUBLIC_URL + '/assets/images/cliente-6.png',
        process.env.PUBLIC_URL + '/assets/images/cliente-7.png',
        process.env.PUBLIC_URL + '/assets/images/cliente-8.png',
        process.env.PUBLIC_URL + '/assets/images/cliente-1.png',
        process.env.PUBLIC_URL + '/assets/images/cliente-3.png',
        process.env.PUBLIC_URL + '/assets/images/cliente-5.png',
        process.env.PUBLIC_URL + '/assets/images/cliente-6.png',
        process.env.PUBLIC_URL + '/assets/images/cliente-7.png',
        process.env.PUBLIC_URL + '/assets/images/cliente-8.png',
        process.env.PUBLIC_URL + '/assets/images/cliente-1.png',
        process.env.PUBLIC_URL + '/assets/images/cliente-3.png',
        process.env.PUBLIC_URL + '/assets/images/cliente-5.png',
        process.env.PUBLIC_URL + '/assets/images/cliente-6.png',
        process.env.PUBLIC_URL + '/assets/images/cliente-7.png',
        process.env.PUBLIC_URL + '/assets/images/cliente-8.png',
        process.env.PUBLIC_URL + '/assets/images/cliente-1.png',
        process.env.PUBLIC_URL + '/assets/images/cliente-3.png',
        process.env.PUBLIC_URL + '/assets/images/cliente-5.png',
        process.env.PUBLIC_URL + '/assets/images/cliente-6.png',
        process.env.PUBLIC_URL + '/assets/images/cliente-7.png',
        process.env.PUBLIC_URL + '/assets/images/cliente-8.png',
    ];

    return (
        <div className="customer-carousel">
            <Swiper
                modules={[Autoplay]}
                spaceBetween={46}
                slidesPerView="auto"
                loop={true}
                speed={1000}
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                className={styles['swiper-container']}
            >
                {logos.map((logo, index) => (
                    <SwiperSlide className='!w-fit' key={index}>
                        <div className={styles['wrap-image']}>
                            <img src={logo} alt="" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default CustomerCarousel;