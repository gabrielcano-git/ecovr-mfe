import styles from './CardNews.module.scss';

interface CardNewsProps {
    image: string;
    title: string;
    date: string;
    excerpt: string;
    link: string;
}

const CardNews: React.FC<CardNewsProps> = ({ image, title, date, excerpt, link }) => {
    return (
        <>
            <article className={styles['card-news']}>
                <img
                    className={styles['card-news__image']}
                    src={image}
                    alt={title}
                />

                <div className={styles['card-news__content']}>
                    <time className={styles['card-news__date']}>
                        {date}
                    </time>

                    <h3 className={styles['card-news__title']}>
                        {title}
                    </h3>

                    <p className={styles['card-news__excerpt']}>
                        {excerpt}
                    </p>

                    <a href={link} className={styles['card-news__link']}>
                        Ir para blog

                        <div className="w-[13px] justify-center items-center inline-flex">
                            <svg viewBox="0 0 448 512">
                                <path d="
                                                    M438.6 278.6c12.5-12.5 12.5-32.8
                                                    0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3
                                                    0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7
                                                    0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4
                                                    393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8
                                                    12.5 45.3 0l160-160z
                                                " />
                            </svg>
                        </div>
                    </a>
                </div>
            </article>
        </>
    );
};

export default CardNews;