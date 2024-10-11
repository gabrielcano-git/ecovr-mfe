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
                                <div className={styles['default-button-parent1']}>
                                    <div className={styles['default-button19']}>
                                        <div className={styles['center13']}>
                                            <img
                                                className={styles['iconsvr45']}
                                                alt=""
                                                src="/assets/images/iconsvr.svg" />

                                            <div className={styles['button19']}>Personalize o
                                                Multi</div>
                                            <img
                                                className={styles['iconsvr46']}
                                                alt=""
                                                src="/assets/images/iconsvr.svg" />
                                        </div>
                                    </div>
                                    <div className={styles['default-button20']}>
                                        <img className={styles['iconsvr47']} alt=""
                                            src="/assets/images/iconsvr.svg" />

                                        <div className={styles['button20']}>Solicite uma
                                            proposta</div>
                                        <img className={styles['iconsvr48']} alt=""
                                            src="/assets/images/iconsvr.svg" />
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
                                            src="/assets/images/ico-check.png" />

                                        <div className={styles['multissaldos-em-um-container']}>
                                            <span
                                                className={styles['multissaldos-em-um']}>Multissaldos
                                                em um único cartão para
                                            </span>
                                            <b>facilitar a rotina.</b>
                                        </div>
                                    </div>
                                    <div className={styles['feature-components1']}>
                                        <img
                                            className={styles['iconsfeather11']}
                                            alt=""
                                            src="/assets/images/ico-check.png" />

                                        <div className={styles['pague-do-seu-container']}>
                                            <b>Pague do seu jeito</b>
                                            <span className={styles['por-qr-code']}>, por QR Code,
                                                link e cartão virtual. </span>
                                        </div>
                                    </div>
                                    <div className={styles['feature-components2']}>
                                        <img
                                            className={styles['iconsfeather12']}
                                            alt=""
                                            src="/assets/images/ico-check.png" />

                                        <div className={styles['controle-de-ponto-container']}>
                                            <b>Controle de ponto</b>
                                            <span className={styles['em-apenas-um']}> em apenas um
                                                botão. </span>
                                        </div>
                                    </div>
                                    <div className={styles['feature-components3']}>
                                        <img
                                            className={styles['iconsfeather13']}
                                            alt=""
                                            src="/assets/images/ico-check.png" />

                                        <div className={styles['emprstimos-na-mo-container']}>
                                            <b className={styles['emprstimos-na-mo']}>Empréstimos
                                                na mão</b>
                                            <span className={styles['em-at-3']}> em até 3 minutos.
                                            </span>
                                        </div>
                                    </div>
                                    <div className={styles['feature-components4']}>
                                        <img
                                            className={styles['iconsfeather14']}
                                            alt=""
                                            src="/assets/images/ico-check.png" />

                                        <div className={styles['cashback-ofertas-e-container']}>
                                            <span
                                                className={styles['cashback-ofertas-e']}>Cashback*,
                                                ofertas e descontos
                                            </span>
                                            <b>para o dinheiro render mais. </b>
                                        </div>
                                    </div>
                                </div>

                                <Button variants={['black', 'fit']}>
                                    Conhecer solução
                                </Button>
                            </div>
                            <div className={styles['wrapper-group-1000004284']}>
                                <img
                                    className={styles['wrapper-group-1000004284-child']}
                                    loading="lazy"
                                    alt=""
                                    src="/assets/images/banner-supper-appvr.png" />
                            </div>
                        </div>
                    </div>
                    <div className={styles['download-content-wrapper']}>
                        <div className={styles['download-content']}>
                            <div className={styles['download-content-inner']}>
                                <div className={styles['baixe-o-superapp-vr-e-simplifi-parent']}>
                                    <b className={styles['baixe-o-superapp']}>Baixe o SuperApp VR
                                        e simplifique sua rotina. </b>
                                    <div className={styles['download-background']}></div>
                                </div>
                            </div>
                            <div className={styles['download-images']}>
                                <img
                                    className={styles['image-5-icon']}
                                    alt=""
                                    src="/assets/images/ico-googleplay.png" />

                                <img
                                    className={styles['image-6-icon']}
                                    alt=""
                                    src="/assets/images/ico-appstore.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SuperApp;