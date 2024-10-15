import React from 'react';
import styles from './SolutionsSection.module.scss';
import SectionTitle from '../SectionTitle/SectionTitle';
import CardSolution from '../CardSolution/CardSolution';

interface Solution {
    image: string;
    title: string;
    description: string;
    link: {
        url: string;
        label: string;
    };
    variant: 'primary' | 'secondary';
}

const SolutionsSection: React.FC = () => {
    const solutions: Solution[] = [
        {
            image: process.env.PUBLIC_URL + '/assets/images/solutions-1.png',
            title: "Gestão de Benefícios",
            description: "Do controle do ponto à gestão eletrônica de documentos. Tudo numa <strong>gestão num só lugar.</strong>",
            link: {
                url: "#",
                label: "Contratar agora"
            },
            variant: 'primary'
        },
        {
            image: process.env.PUBLIC_URL + '/assets/images/solutions-2.png',
            title: "Gestão de Benefícios",
            description: "Do controle do ponto à gestão eletrônica de documentos. Tudo numa <strong>gestão num só lugar.</strong>",
            link: {
                url: "#",
                label: "Contratar agora"
            },
            variant: 'secondary'
        },
        {
            image: process.env.PUBLIC_URL + '/assets/images/solutions-3.png',
            title: "Gestão de Benefícios",
            description: "Do controle do ponto à gestão eletrônica de documentos. Tudo numa <strong>gestão num só lugar.</strong>",
            link: {
                url: "#",
                label: "Contratar agora"
            },
            variant: 'primary'
        },
    ];

    return (
        <>
            <section className={styles['solutions']}>
                <SectionTitle>
                    <u>Soluções sob medida</u> para quem<br />quer mais praticidade na gestão.
                </SectionTitle>

                <div className="container mx-auto">
                    <div className={styles['solutions__grid']}>
                        {solutions.map((solution, index) => (
                            <CardSolution key={`solution-${index}`} {...solution} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default SolutionsSection;