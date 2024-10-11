import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import styles from './Testemonials.module.scss';
import CardTestemonial from '../CardTestemonial/CardTestemonial';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import SectionTitle from '../SectionTitle/SectionTitle';

interface Testimonial {
  image: string;
  stat: string;
  statDescription: string;
  quote: string;
  author: string;
}

const TestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      image: "https://via.placeholder.com/184x273",
      stat: "Redução de 85%",
      statDescription: "no fechamento de ponto e folha de pagamento.",
      quote: "Antes do Pontomais, a gente demorava de 3 a 4 dias para fazer o fechamento de ponto e a folha de pagamento. Agora, fazemos isso em menos de 4 horas.",
      author: "Maya Bellan, Coordenadora de Financeiro na 10 Pastéis"
    },
    {
      image: "https://via.placeholder.com/184x273",
      stat: "Redução de 85%",
      statDescription: "no fechamento de ponto e folha de pagamento.",
      quote: "Antes do Pontomais, a gente demorava de 3 a 4 dias para fazer o fechamento de ponto e a folha de pagamento. Agora, fazemos isso em menos de 4 horas.",
      author: "Maya Bellan, Coordenadora de Financeiro na 10 Pastéis"
    },
    {
      image: "https://via.placeholder.com/184x273",
      stat: "Redução de 85%",
      statDescription: "no fechamento de ponto e folha de pagamento.",
      quote: "Antes do Pontomais, a gente demorava de 3 a 4 dias para fazer o fechamento de ponto e a folha de pagamento. Agora, fazemos isso em menos de 4 horas.",
      author: "Maya Bellan, Coordenadora de Financeiro na 10 Pastéis"
    },
  ];

  return (
    <>
      <section className={styles['testimonials']}>
        <SectionTitle className={'!text-center'}>
          Quem usa, <u>aprova.</u>
        </SectionTitle>

        <div className={styles['testimonials__container']}>
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={16}
            slidesPerView="auto"
            enabled={false}
            className={styles['swiper-testemonials']}
            breakpoints={{
              320: {
                slidesPerView: 1.2,
                spaceBetween: 16,
                enabled: true,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 16,
                enabled: true,
              }
            }}
            pagination={{ clickable: true }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <CardTestemonial {...testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default TestimonialsSection;