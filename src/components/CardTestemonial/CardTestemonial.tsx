import styles from './CardTestemonial.module.scss';

interface Testimonial {
    image: string;
    stat: string;
    statDescription: string;
    quote: string;
    author: string;
}

const CardTestemonial: React.FC<Testimonial> = ({ image, stat, statDescription, quote, author }) => {
    return (
        <>
            <div className={styles['card-testemonial']}>
                <img className={styles['card-testemonial__author-image']} src={image} alt="" />

                <div className={styles['card-testemonial__content']}>
                    <p className={styles['card-testemonial__stat']}>
                        <strong>{stat}</strong><br />
                        {statDescription}
                    </p>

                    <p className={styles['card-testemonial__quote']}>
                        <svg width="17" height="12" viewBox="0 0 17 12" fill="none">
                            <path d="M5.86327 5.24397C6.51088 5.52279 7.00816 5.94102 7.3551 6.49866C7.72517 7.03485 7.9102 7.66756 7.9102 8.39678C7.9102 9.46917 7.54014 10.3378 6.8 11.0027C6.05986 11.6676 5.11156 12 3.9551 12C2.79864 12 1.85034 11.6676 1.1102 11.0027C0.370068 10.3378 0 9.46917 0 8.39678C0 7.90349 0.0693878 7.41019 0.208163 6.91689C0.346939 6.42359 0.659184 5.69437 1.1449 4.72922L3.36531 0H7.49388L5.86327 5.24397ZM14.9531 5.24397C15.6007 5.52279 16.098 5.94102 16.4449 6.49866C16.815 7.03485 17 7.66756 17 8.39678C17 9.46917 16.6299 10.3378 15.8898 11.0027C15.1497 11.6676 14.2014 12 13.0449 12C11.8884 12 10.9401 11.6676 10.2 11.0027C9.45986 10.3378 9.0898 9.46917 9.0898 8.39678C9.0898 7.90349 9.15918 7.41019 9.29796 6.91689C9.43673 6.42359 9.74898 5.69437 10.2347 4.72922L12.4551 0H16.5837L14.9531 5.24397Z" fill="#02D72F" />
                        </svg>
                        {quote}
                    </p>

                    <p className={styles['card-testemonial__author-info']}>
                        {author}
                    </p>
                </div>
            </div>
        </>
    );
};

export default CardTestemonial;