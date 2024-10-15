import styles from "./BigNumbersSection.module.scss";
import SectionTitle from "../SectionTitle/SectionTitle";

const statsData = [
  {
    number: "4,7 milhões",
    description: "de trabalhadores atendidos",
    text: "Facilitamos a rotina do trabalhador e das empresas com <strong>soluções digitais</strong> que otimizam toda a gestão.",
  },
  {
    number: "+ 12 milhões",
    description: "de acessos por mês",
    text: "O <strong>SuperApp VR</strong> é o maior aliado do empregador para cuidar do bem mais valioso: as pessoas.",
  },
  {
    number: "+ 1 bilhão de pontos",
    description: "registrados pelo Pontomais da VR",
    text: "Com o <strong>SuperPortal VR</strong> impulsionamos negócios ao centralizar todas as soluções em um só lugar.",
  },
];

const InfoCard: React.FC<{
  number: string;
  description: string;
  text: string;
}> = ({ number, description, text }) => (
  <div className={styles["info-card"]}>
    <div className={styles["info-stats"]}>
      <strong>{number}</strong>

      {description}
    </div>

    <div
      className={styles["info-text"]}
      dangerouslySetInnerHTML={{ __html: text }}
    />

    <div className={styles["button-learn-more"]}>
      Quero conhecer

      <div className="w-[13px] justify-center items-center inline-flex">
        <svg viewBox="0 0 448 512">
          <path
            d="M438.6 278.6c12.5-12.5 12.5-32.8
               0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3
               0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7
               0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4
               393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8
               12.5 45.3 0l160-160z
            "
          />
        </svg>
      </div>
    </div>
  </div>
);

const BiNumbersSection: React.FC = () => {
  return (
    <section className={styles["big-numbers-section"]}>
      <SectionTitle>
        Tudo o que você precisa para
        <br />
        facilitar a <u>jornada de trabalho</u>
      </SectionTitle>

      <div className={styles["image-and-cards-wrapper"]}>
        <div className={styles["image-container"]}>
          <img
            src={
              process.env.PUBLIC_URL + "/assets/images/tudo-que-vc-precisa.png"
            }
            alt="Tudo o que você precisa"
          />
        </div>

        <div className={styles["info-cards"]}>
          {statsData.map((stat, index) => (
            <InfoCard
              key={index}
              number={stat.number}
              description={stat.description}
              text={stat.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BiNumbersSection;
