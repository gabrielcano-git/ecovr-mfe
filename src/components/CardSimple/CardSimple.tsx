import React from 'react';
import styles from './CardSimple.module.scss';

interface CardSimpleProps {
    title: string;
    image: string;
}

const CardSimple: React.FC<CardSimpleProps> = ({ title, image }) => {
    return (
        <div className={styles['card-simple']}>
            <div className={styles['card-simple__title']}>
                {title}
            </div>

            <img
                className={styles['card-simple__image']}
                src={image}
                alt=""
            />
        </div>
    );
};

export default CardSimple;