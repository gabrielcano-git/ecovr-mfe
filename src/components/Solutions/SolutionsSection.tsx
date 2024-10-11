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
            image: "https://picsum.photos/1024/683",
            title: "Gestão de Benefícios",
            description: "Do controle do ponto à gestão eletrônica de documentos. Tudo numa <strong>gestão num só lugar.</strong>",
            link: {
                url: "#",
                label: "Contratar agora"
            },
            variant: 'primary'
        },
        {
            image: "https://picsum.photos/1024/683",
            title: "Gestão de Benefícios",
            description: "Do controle do ponto à gestão eletrônica de documentos. Tudo numa <strong>gestão num só lugar.</strong>",
            link: {
                url: "#",
                label: "Contratar agora"
            },
            variant: 'secondary'
        },
        {
            image: "https://picsum.photos/1024/683",
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