import React, { useState } from 'react';
import Button from '../Button/Button';
import CustomCheckbox from '../CustomCheckbox/CustomCheckbox';
import styles from './ContactForm.module.scss';
import SectionTitle from '../SectionTitle/SectionTitle';

const ContactForm = () => {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <>
            <section className={styles['contact-form']}>
                <SectionTitle>
                    <u>Entre em contato</u> com a gente!
                </SectionTitle>

                <div className={styles['contact-form__wrapper']}>
                    <div className={styles['contact-form__image']}>
                        <img
                            src={process.env.PUBLIC_URL + '/assets/images/form-image.png'}
                            alt="Woman working on laptop"
                        />
                    </div>

                    <div className={styles['contact-form__content']}>
                        <p className="text-white text-lg font-normal font-['Montserrat'] leading-7">
                            Preencha o formulário e <strong>conheça a solução ideal</strong> para o seu negócio. Simule sem compromisso
                        </p>

                        <form>
                            <div>
                                <label htmlFor="name">Nome*</label>

                                <input type="text" id="name" placeholder="Alexandre" />
                            </div>

                            <div>
                                <label htmlFor="surname">Sobrenome*</label>
                                <input type="text" id="surname" placeholder="Silva" />
                            </div>

                            <div>
                                <label htmlFor="email">E-mail*</label>
                                <input type="email" id="email" placeholder="Seu melhor e-mail" />
                            </div>

                            <div>
                                <label htmlFor="phone">Telefone ou WhatsApp com DDD*</label>
                                <input type="tel" id="phone" placeholder="(51) 99999-9999" />
                            </div>

                            <CustomCheckbox 
                                label="Concordo em receber comunicações de marketing da VR e estou ciente que posso descadastrar a qualquer momento."
                                checked={isChecked}
                                onChange={() => setIsChecked(!isChecked)}
                            />

                            <Button variants={['primary', 'lg']}>
                                Solicite uma proposta
                            </Button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactForm;