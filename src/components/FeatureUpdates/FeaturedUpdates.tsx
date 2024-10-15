import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import styles from './FeaturedUpdates.module.scss';
import CardNews from '../CardNews/CardNews';
import SectionTitle from '../SectionTitle/SectionTitle';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

interface NewsItem {
    image: string;
    date: string;
    title: string;
    excerpt: string;
    link: string;
}

const FeaturedUpdates: React.FC = () => {
    const newsItems: NewsItem[] = [
        {
            image: process.env.PUBLIC_URL + '/assets/images/noticia-1.png',
            date: "10 jun, 2024",
            title: "7 benefícios de oferecer VR e VA aos funcionários",
            excerpt: "O VR e o VA são benefícios proporcionados pelas empresas aos seus funcionários como parte da sua política de Recursos Humanos.",
            link: "#"
        },
        {
            image: process.env.PUBLIC_URL + '/assets/images/noticia-2.png',
            date: "10 jun, 2024",
            title: "7 benefícios de oferecer VR e VA aos funcionários",
            excerpt: "O VR e o VA são benefícios proporcionados pelas empresas aos seus funcionários como parte da sua política de Recursos Humanos.",
            link: "#"
        },
        {
            image: process.env.PUBLIC_URL + '/assets/images/noticia-3.png',
            date: "10 jun, 2024",
            title: "7 benefícios de oferecer VR e VA aos funcionários",
            excerpt: "O VR e o VA são benefícios proporcionados pelas empresas aos seus funcionários como parte da sua política de Recursos Humanos.",
            link: "#"
        },
    ];

    return (
        <>
            <section className={styles['featured-updates']}>
                <SectionTitle>
                    Fique por dentro das <u>novidades!</u>
                </SectionTitle>

                <div className={styles['featured-updates__container']}>
                    <Swiper
                        modules={[Pagination]}
                        className={styles['swiper-news']}
                        spaceBetween={16}
                        slidesPerView="auto"
                        enabled={false}
                        breakpoints={{
                            320: {
                                slidesPerView: 1.2,
                                spaceBetween: 16,
                                enabled: true,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 16,
                                enabled: true,
                            }
                        }}
                        pagination={{ clickable: true }}
                    >
                        {newsItems.map((item, index) => (
                            <SwiperSlide key={index}>
                                <CardNews {...item} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
        </>
    );
};

export default FeaturedUpdates;