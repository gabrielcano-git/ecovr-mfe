import React from 'react';
import Button from '../Button/Button';
import styles from './CardSolution.module.scss';

interface Solution {
    variant: string;
    image: string;
    title: string;
    description: string;
    link: {
        label: string;
    };
}

const CardSolution: React.FC<Solution> = (solution) => {
    const cardClass = `${styles['card-solution']} ${styles[`card-solution--${solution.variant}`]}`;

    return (
        <>
            <div className={cardClass}>
                <img
                    className={styles['card-solution__image']}
                    src={solution.image}
                    alt=""
                />

                <div className={styles['card-solution__content']}>
                    <h3 className={styles['card-solution__title']}>
                        {solution.title}
                    </h3>

                    <p
                        className={styles['card-solution__description']}
                        dangerouslySetInnerHTML={{ __html: solution.description }}
                    />
                </div>

                <Button variants={['black']}>
                    {solution.link.label}
                </Button>
            </div>
        </>
    );
};

export default CardSolution;