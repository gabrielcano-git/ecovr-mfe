import React from 'react';
import Button from '../Button/Button';
import styles from './SuperApp.module.scss';

const SuperApp: React.FC = () => {
    return (
        <>
            <section className={styles['features-content-wrapper']}>
                <div className={styles['features-content']}>
                    <div className={styles['features-title-wrapper']}>
                        <div className={styles['features-title']}>
                            <div className={styles['features-title-background']}></div>
                            <div className={styles['titulos5']}>
                                <div className={styles['features-title-content']}>
                                    <h1 className={styles['superportal-vr5']}>
                                        <p className={styles['superapp-vr']}>SuperApp VR</p>
                                        <p className={styles['completo']}>é completão</p>
                                    </h1>
                                    <div className={styles['uma-plataforma-online-container2']}>
                                        <span>A gestão conquista uma rotina com mais
                                            tempo e segurança
                                            ao utilizar
                                        </span>
                                        <b>uma ferramenta que tem tudo o que precisa
                                            em apenas uma
                                            solução.</b>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles['features-list-content-wrapper']}>
                        <div className={styles['features-list-content']}>
                            <div className={styles['features-list']}>
                                <div className={styles['features-items']}>
                                    <div className={styles['feature-components']}>
                                        <img
                                            className={styles['iconsfeather10']}
                                            alt=""
                                            src={process.env.PUBLIC_URL + '/assets/images/ico-check.png'} />

                                        <div className={styles['feature-components__text']}>
                                            Multissaldos em um único cartão para <strong>facilitar a rotina.</strong>
                                        </div>
                                    </div>

                                    <div className={styles['feature-components']}>
                                        <img
                                            className={styles['iconsfeather10']}
                                            alt=""
                                            src={process.env.PUBLIC_URL + '/assets/images/ico-check.png'} />

                                        <div className={styles['feature-components__text']}>
                                            <strong>Pague do seu jeito</strong>, por QR Code, link e cartão virtual.
                                        </div>
                                    </div>
                                    <div className={styles['feature-components']}>
                                        <img
                                            className={styles['iconsfeather10']}
                                            alt=""
                                            src={process.env.PUBLIC_URL + '/assets/images/ico-check.png'} />

                                        <div className={styles['feature-components__text']}>
                                            <strong>Controle de ponto</strong> em apenas um botão.
                                        </div>
                                    </div>
                                    <div className={styles['feature-components']}>
                                        <img
                                            className={styles['iconsfeather10']}
                                            alt=""
                                            src={process.env.PUBLIC_URL + '/assets/images/ico-check.png'} />

                                        <div className={styles['feature-components__text']}>
                                            <strong>Empréstimos na mão</strong> em até 3 minutos.
                                        </div>
                                    </div>
                                    <div className={styles['feature-components']}>
                                        <img
                                            className={styles['iconsfeather10']}
                                            alt=""
                                            src={process.env.PUBLIC_URL + '/assets/images/ico-check.png'} />

                                        <div className={styles['feature-components__text']}>
                                            Cashback*, ofertas e descontos <strong>para o dinheiro render mais. </strong>
                                        </div>
                                    </div>
                                </div>

                                <Button
                                    className='w-full md:w-fit'
                                    variants={['black', 'fit']}
                                >
                                    Conhecer solução
                                </Button>
                            </div>
                            <div className={styles['wrapper-group-1000004284']}>
                                <img
                                    className={styles['wrapper-group-1000004284-child']}
                                    loading="lazy"
                                    alt=""
                                    src={process.env.PUBLIC_URL + '/assets/images/banner-supper-appvr.png'} />
                            </div>
                        </div>
                    </div>
                    <div className={styles['download-content-wrapper']}>
                        <div className={styles['download-content']}>
                            <div className={styles['download-content-inner']}>
                                <div className={styles['baixe-o-superapp-vr-e-simplifi-parent']}>
                                    Baixe o <u>SuperApp VR</u> e simplifique sua rotina.
                                </div>
                            </div>
                            <div className={styles['download-images']}>
                                <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                                    <img
                                        className={styles['image-5-icon']}
                                        alt=""
                                        src={process.env.PUBLIC_URL + '/assets/images/ico-googleplay.png'} />
                                </a>

                                <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                                    <img
                                        className={styles['image-6-icon']}
                                        alt=""
                                        src={process.env.PUBLIC_URL + '/assets/images/ico-appstore.png'} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SuperApp;