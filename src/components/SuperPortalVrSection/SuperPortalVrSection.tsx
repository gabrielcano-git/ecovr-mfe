import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import styles from './SuperPortalVrSection.module.scss';
import CardSimple from '../CardSimple/CardSimple';
import SectionTitle from '../SectionTitle/SectionTitle';
import Button from '../Button/Button';

interface SuperAppItem {
    title: string;
    image: string;
}

const SuperPortalVrSection: React.FC = () => {
    const superAppItems: SuperAppItem[] = [
        {
          title: "Digitalize, agende e automatize processos",
          image:
            process.env.PUBLIC_URL + "/assets/images/super-portal-carousel.png",
        },
        {
          title: "Gestão centralizada e simplificada para o empregador",
          image:
            process.env.PUBLIC_URL + "/assets/images/super-portal-carousel.png",
        },
        {
          title: "Gestão centralizada e simplificada para o empregador",
          image:
            process.env.PUBLIC_URL + "/assets/images/super-portal-carousel.png",
        },
        {
          title: "Gestão centralizada e simplificada para o empregador",
          image:
            process.env.PUBLIC_URL + "/assets/images/super-portal-carousel.png",
        },
        {
          title: "Gestão centralizada e simplificada para o empregador",
          image:
            process.env.PUBLIC_URL + "/assets/images/super-portal-carousel.png",
        },
        {
          title: "Gestão centralizada e simplificada para o empregador",
          image:
            process.env.PUBLIC_URL + "/assets/images/super-portal-carousel.png",
        },
        {
          title: "Gestão centralizada e simplificada para o empregador",
          image:
            process.env.PUBLIC_URL + "/assets/images/super-portal-carousel.png",
        },
      ];

    const [isMobile, setIsMobile] = useState(false);
    const swiperRef = useRef<SwiperType | null>(null);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <section className={styles['super-portal-vr']}>
            <div className="flex-col justify-center md:items-center gap-6 flex">
          <div className="self-stretch flex-col justify-center md:items-center gap-2 flex">
            {!isMobile && (
              <h2 className={styles["super-portal-vr__title"]}>
                SuperPortal VR
              </h2>
            )}

            {isMobile && (
              <SectionTitle className="!mb-0 !text-left">
                <u>SuperPortal VR</u>
              </SectionTitle>
            )}

            <h3 className={styles["super-portal-vr__subtitle"]}>
              Facilidade que potencializa o seu negócio.
            </h3>

            <div className={styles["super-portal-vr__description"]}>
              Uma <strong>plataforma online</strong> que centraliza a gestão da
              empresa de forma segura e prática.
            </div>
          </div>

          <Button variants={['primary', 'fit']}>
            Conhecer solução
          </Button>
        </div>

        <div className="flex-col justify-center items-center gap-6 flex mt-10">
          <img
            className="hidden md:block"
            src={
              process.env.PUBLIC_URL +
              "/assets/images/super-portal-vr-image.png"
            }
            alt="SuperPortal VR"
          />

          <img
            className="block md:hidden"
            src={
              process.env.PUBLIC_URL +
              "/assets/images/super-portal-vr-image-mobile.png"
            }
            alt="SuperPortal VR"
          />
        </div>
            </section>

            <div className="relative pl-[18px] md:pl-[68px] mb-[50px] md:mx-auto -mt-[155px]">
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={16}
                    slidesPerView="auto"
                    className={styles['swiper-super-portal-vr']}
                    breakpoints={{
                        320: {
                            slidesPerView: 1.2,
                            spaceBetween: 16,
                            enabled: true,
                        },
                        768: {
                            slidesPerView: 4.2,
                            spaceBetween: 16,
                            enabled: true,
                        },
                        1366: {
                            slidesPerView: 5.2,
                            spaceBetween: 16,
                            enabled: true,
                        }
                    }}
                    pagination={{ clickable: true }}
                    navigation={{
                        nextEl: styles['swiper-button-next'],
                        prevEl: styles['swiper-button-prev'],
                    }}
                    onSwiper={(swiper: SwiperType) => {
                        swiperRef.current = swiper;
                    }}
                >
                    {superAppItems.map((item, index) => (
                        <SwiperSlide key={index}>
                            <CardSimple {...item} />
                        </SwiperSlide>
                    ))}

{/* <div className={styles['swiper-button-prev']}></div>
<div className={styles['swiper-button-next']}></div> */}
                </Swiper>
            </div>
        </>
    );
};

export default SuperPortalVrSection;