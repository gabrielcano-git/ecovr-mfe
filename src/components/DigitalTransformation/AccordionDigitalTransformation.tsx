import React, { useState } from "react";
import "react-tabs/style/react-tabs.css";
import styles from "./DigitalTransformation.module.scss";
import Button from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

interface TabContent {
  icon: React.ReactNode;
  description: string;
  solutionIntro: string;
  solutionDescription: string;
  ctaText: string;
}

const tabContents: TabContent[] = [
  {
    icon: (
      <svg
        width="39"
        height="43"
        viewBox="0 0 39 43"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Group 8396">
          <path
            id="Vector"
            d="M22.75 0.236328H19.25V7.87245H22.75V0.236328Z"
            fill="#02D72F"
          />
          <path
            id="Vector_2"
            d="M12.0155 2.17493L8.98438 3.92493L12.8024 10.538L15.8335 8.788L12.0155 2.17493Z"
            fill="#02D72F"
          />
          <path
            id="Vector_3"
            d="M3.6875 9.22074L1.9375 12.2518L8.55058 16.0699L10.3006 13.0388L3.6875 9.22074Z"
            fill="#02D72F"
          />
          <path
            id="Vector_4"
            d="M7.63612 19.4863H0V22.9863H7.63612V19.4863Z"
            fill="#02D72F"
          />
          <path
            id="Vector_5"
            d="M8.55155 26.4025L1.93848 30.2206L3.68848 33.2517L10.3016 29.4336L8.55155 26.4025Z"
            fill="#02D72F"
          />
          <path
            id="Vector_6"
            d="M12.8024 31.9345L8.98438 38.5476L12.0155 40.2976L15.8335 33.6845L12.8024 31.9345Z"
            fill="#02D72F"
          />
          <path
            id="Vector_7"
            d="M22.75 34.6002H19.25V42.2363H22.75V34.6002Z"
            fill="#02D72F"
          />
          <path
            id="Vector_8"
            d="M29.9841 2.17476L26.166 8.78784L29.1971 10.5378L33.0152 3.92476L29.9841 2.17476Z"
            fill="#02D72F"
          />
          <path
            id="Vector_9"
            d="M21.3348 28.8531L13.7695 21.287L16.244 18.8125L21.3348 23.9033L35.9893 9.24878L38.4647 11.7233L21.3348 28.8531Z"
            fill="#02D72F"
          />
        </g>
      </svg>
    ),
    description: "Problemas jurídicos no controle de ponto?",
    solutionIntro:
      "Reduza até<br /><strong>85%</strong><br />do tempo gasto com a<br />gestão de ponto.",
    solutionDescription:
      "Conte com uma <strong>solução digital</strong> e de acordo com a lei, para otimizar a gestão de jornada e facilitar a rotina.",
    ctaText: "Simplificar a gestão",
  },
  {
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Group 640">
          <g id="Group">
            <path
              id="Vector"
              d="M40 39.9605H0V0.236328H4.16331V35.7972H40V39.9605Z"
              fill="#02D72F"
            />
            <path
              id="Vector_2"
              d="M23.0452 28.091L14.806 19.9903L7.90739 26.6037L5.02637 23.5988L14.8424 14.1877L23.042 22.2489L35.9483 9.52893L38.8709 12.4942L23.0452 28.091Z"
              fill="#02D72F"
            />
          </g>
          <path
            id="Vector_3"
            d="M39.5954 20.4389H35.432V13.0927H28.0859V8.92944H39.5954V20.4389Z"
            fill="#02D72F"
          />
        </g>
      </svg>
    ),
    description: "Dificuldade para aumentar a satisfação dos trabalhadores?",
    solutionIntro:
      "Reduza até<br /><strong>85%</strong><br />do tempo gasto com a<br />gestão de ponto. 2",
    solutionDescription:
      "Conte com uma <strong>solução digital</strong> e de acordo com a lei, para otimizar a gestão de jornada e facilitar a rotina. 2",
    ctaText: "Simplificar a gestão 2",
  },
  {
    icon: (
      <svg
        width="37"
        height="45"
        viewBox="0 0 37 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Arte" clip-path="url(#clip0_46_745)">
          <path
            id="Vector"
            d="M12.2286 35.2158L13.6628 36.65H8.10884C5.62511 36.65 3.60443 34.6294 3.60443 32.1456V7.82179H12.6133V4.21826H0V32.1456C0 36.6167 3.63686 40.2536 8.10794 40.2536H13.6736L12.2394 41.6878L14.7871 44.2355L20.5653 38.4572L14.7763 32.6681L12.2286 35.2158Z"
            fill="#02D72F"
          />
          <path
            id="Vector_2"
            d="M27.9271 4.21823H22.3615L23.7957 2.78402L21.248 0.236328L15.4697 6.01459L21.2588 11.8037L23.8074 9.25596L22.3732 7.82176H27.9271C30.4109 7.82176 32.4315 9.84244 32.4315 12.3262V36.65H23.4227V40.2535H36.0351V12.3262C36.0351 7.85509 32.3982 4.21823 27.9271 4.21823Z"
            fill="#02D72F"
          />
          <path
            id="Vector_3"
            d="M19.2714 20.8674C17.7886 20.5251 16.649 20.3539 16.649 19.4611C16.649 18.7963 17.3904 18.435 18.6823 18.435C19.8606 18.435 21.0579 18.7963 22.0272 19.4422H22.2552V16.6107C21.5137 15.9837 20.2975 15.5846 19.0814 15.4702V13.2279H16.4967V15.6224C14.3112 16.0783 12.9238 17.4278 12.9238 19.6521C12.9238 21.6854 14.2733 22.7124 16.1166 23.3583C17.9408 23.9664 19.3859 23.9097 19.3859 24.9169C19.3859 25.734 18.6633 26.0006 17.3904 26.0006C15.9075 26.0006 14.3112 25.5826 13.1905 24.9169H13.0193V27.6916C13.7797 28.3564 15.167 28.851 16.4976 29.0411V31.2456H19.0823V29.0222C21.4579 28.6798 23.1119 27.388 23.1119 24.7079C23.1119 22.5412 21.6867 21.4196 19.2723 20.8683L19.2714 20.8674Z"
            fill="#02D72F"
          />
        </g>
        <defs>
          <clipPath id="clip0_46_745">
            <rect
              width="36.0353"
              height="44"
              fill="white"
              transform="translate(0 0.236328)"
            />
          </clipPath>
        </defs>
      </svg>
    ),
    description: "Quer ajudar o trabalhador a tirar os planos do papel?",
    solutionIntro:
      "Reduza até<br /><strong>85%</strong><br />do tempo gasto com a<br />gestão de ponto. 3",
    solutionDescription:
      "Conte com uma <strong>solução digital</strong> e de acordo com a lei, para otimizar a gestão de jornada e facilitar a rotina. 3",
    ctaText: "Simplificar a gestão 3",
  },
];

const AccordionDigitalTransformation: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className={styles["accordion"]}>
      {tabContents.map((tab, index) => (
        <div key={index} onClick={() => setSelectedTab(index)} className={styles["accordion-item"]}>
          <div
            className={`${styles["accordion-header"]} ${
                selectedTab === index ? styles["accordion-header--active"] : ""
              }`}
        >
            <div className={styles["digital-transformation__problem-icon"]}>
              {tab.icon}
            </div>

            <div
              className={styles["digital-transformation__problem-description"]}
            >
              {tab.description}
            </div>

            <FontAwesomeIcon
              className={styles['iconAccordion']}
              icon={faChevronDown}
            />
          </div>

          <div
            className={`${styles["accordion-content"]} ${
              selectedTab === index ? styles["active"] : ""
            }`}
          >
            <div
              className={styles["digital-transformation__solution-intro"]}
              dangerouslySetInnerHTML={{ __html: tab.solutionIntro }}
            />

            <p
              className={styles["digital-transformation__solution-description"]}
              dangerouslySetInnerHTML={{ __html: tab.solutionDescription }}
            />

            <Button variants={["primary", "fit"]}>{tab.ctaText}</Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AccordionDigitalTransformation;
