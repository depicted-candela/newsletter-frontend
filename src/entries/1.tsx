// src/entries/1.tsx

import React, { useEffect } from 'react';

type Styles = {
    [className: string]: string;
};

interface EntryProps {
    styles : Styles;
    globalStyles: Styles;
    language: string;
}

const Entry: React.FC<EntryProps> = ({ styles, language }) => {
    useEffect(() => {
        const bootstrapLink = document.createElement('link');
        bootstrapLink.rel = 'stylesheet';
        bootstrapLink.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.s";
        bootstrapLink.integrity = "sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC";
        bootstrapLink.crossOrigin = "anonymous";
        document.head.appendChild(bootstrapLink);

        return () => {
            document.head.removeChild(bootstrapLink);
        };
    }, []);

    return (
        <div className={styles["container"]}>
            {/* English Content */}
            {language === 'en' && (
                <div id="englishContent">
                    <h1>Empowering the Amazon with GIS and Cloud Technologies</h1>
                    <p className={styles["textMuted"]}>Date Published: May 18, 2024</p>

                    <div className={styles.Content}>
                        <h2>A New Chapter for the Amazon</h2>
                        <p>
                            Imagine a future where the lush, expansive Amazon is not only a treasure trove of biodiversity but also a beacon of sustainable management and technological integration. This vision is becoming a reality thanks to the collaborative efforts involving Gaia Amazonas and advanced technologies provided by Google Cloud Platform (GCP).
                        </p>
                    </div>

                    <div className={styles.Content}>
                        <h2>Technology Meets Tradition</h2>
                        <p>
                            The project is a symphony of technology and traditional knowledge, where cutting-edge tools such as GCP SQL and Google Earth Engine harmonize with the centuries-old wisdom of the Amazon's indigenous peoples. Together, they create powerful solutions that promote sustainable development and community empowerment.
                        </p>

                        <h3>Innovative Solutions for Remote Challenges</h3>
                        <p>
                            One of the main challenges in the Amazon is connectivity. Despite the remoteness, satellite internet solutions like Starlink are bridging the gap, allowing real-time data sharing and communication. This has been pivotal in deploying our GIS ecosystem, which utilizes REST and GraphQL APIs to efficiently manage and distribute environmental data.
                        </p>

                        <h3>Upcoming Enhancements</h3>
                        <p>
                            Our journey doesn’t stop here. The incorporation of spatial solutions next week will further transform our system, making it an invaluable tool for environmental stewardship and regional planning.
                        </p>
                    </div>

                    <div className={styles.Content}>
                        <h2>Gaia Amazonas: Guiding Lights</h2>

                        <h3>Our Compass</h3>
                        <p>
                            The mission of Gaia Amazonas—safeguarding the Amazon’s cultural and environmental diversity through sustainable management and governance—directs every stride we take.
                        </p>

                        <h3>The Vision</h3>
                        <p>
                            Our vision is a flourishing Amazon where ecosystems are resilient, cultural diversity is celebrated, and communities are the custodians of their ancestral lands.
                        </p>

                        <h3>Core Values</h3>
                        <ul>
                            <li><strong>Interculturality:</strong> We celebrate the diverse cultures and traditions of the Amazon, integrating them into every aspect of our governance and conservation efforts.</li>
                            <li><strong>Sustainability:</strong> Every action is a step towards ecological balance, ensuring a legacy of health and vitality for the Amazon.</li>
                            <li><strong>Collaboration:</strong> Our strength lies in our partnerships, spanning local communities to international allies.</li>
                            <li><strong>Innovation:</strong> We pioneer solutions that marry modern technology with traditional practices for groundbreaking results.</li>
                        </ul>

                        <h3>Strategic Objectives</h3>
                        <ul>
                            <li><strong>Empowerment and Monitoring:</strong> We equip indigenous communities with the tools to oversee their lands and contribute to global environmental efforts.</li>
                            <li><strong>Community and Territorial Empowerment:</strong> We support autonomy and governance, enabling communities to thrive under their own leadership and cultural wisdom.</li>
                            <li><strong>Advocacy and Communication:</strong> We shape policies and perceptions, ensuring the Amazon’s voice is heard and respected worldwide.</li>
                            <li><strong>Intercultural Dialogues:</strong> We foster dialogue that bridges traditional and modern knowledge systems, enriching conservation strategies.</li>
                        </ul>
                    </div>

                    <div className={styles.KeyPoints}>
                        <h2>Highlights</h2>
                        <ul>
                            <li>Integration of GCP tools with indigenous knowledge for a sustainable GIS ecosystem.</li>
                            <li>Addressing connectivity challenges with innovative technology like Starlink.</li>
                            <li>Upcoming spatial solutions to enhance our GIS capabilities.</li>
                        </ul>
                    </div>

                    <div className={styles.AdditionalResources}>
                        <h2>Learn More</h2>
                        <ul>
                            <li><a href="https://cloud.google.com/" target="_blank" rel="noopener noreferrer">Google Cloud Platform</a>: Learn about the technologies powering our project.</li>
                            <li><a href="https://earthengine.google.com/" target="_blank" rel="noopener noreferrer">Google Earth Engine</a>: Explore the tools for environmental data analysis.</li>
                            <li><a href="https://www.starlink.com/" target="_blank" rel="noopener noreferrer">Starlink</a>: Discover how satellite internet is connecting the Amazon.</li>
                        </ul>
                    </div>
                </div>
            )}

            {/* Spanish Content */}
            {language === 'es' && (
                <div id="spanishContent">
                    <h1>El Amazonas y Google se empoderan para conservarse</h1>
                    <p className={styles.textMuted}>Fecha de publicación: 18 de mayo de 2024</p>

                    <div className={styles.Content}>
                        <h2>Un Nuevo Capítulo para el Amazonas</h2>
                        <p>
                            Imagina un futuro donde el exuberante y extenso Amazonas no solo sea un tesoro de biodiversidad, sino también un faro de gestión sostenible e integración tecnológica. Esta visión se está convirtiendo en realidad gracias a los esfuerzos colaborativos que involucran a Gaia Amazonas y las tecnologías de Google Cloud Platform (GCP).
                        </p>
                    </div>

                    <div className={styles.Content}>
                        <h2>La Tecnología se Encuentra con la Tradición</h2>
                        <p>
                            El proyecto es una sinfonía de tecnología y conocimiento tradicional, donde herramientas de vanguardia como GCP SQL y Google Earth Engine armonizan con la sabiduría centenaria de los pueblos indígenas del Amazonas. Juntos, crean soluciones poderosas que promueven el desarrollo sostenible y el empoderamiento comunitario.
                        </p>

                        <h3>Soluciones Innovadoras para Desafíos Remotos</h3>
                        <p>
                            Uno de los principales desafíos en el Amazonas es la conectividad. A pesar de la lejanía, soluciones de internet satelital como Starlink están cerrando la brecha, permitiendo el intercambio de datos y la comunicación en tiempo real. Esto ha sido crucial en la implementación de nuestro ecosistema GIS, que utiliza APIs REST y GraphQL para gestionar y distribuir eficazmente los datos ambientales.
                        </p>

                        <h3>Mejoras Próximas</h3>
                        <p>
                            Nuestro viaje no se detiene aquí. La incorporación de soluciones espaciales la próxima semana transformará aún más nuestro sistema, convirtiéndolo en una herramienta invaluable para la gestión ambiental y la planificación regional.
                        </p>
                    </div>

                    <div className={styles.Content}>
                        <h2>Gaia Amazonas: Luces Guía</h2>

                        <h3>Nuestro Compás</h3>
                        <p>
                            La misión de Gaia Amazonas — salvaguardar la diversidad cultural y ambiental del Amazonas a través de la gestión y gobernanza sostenibles — dirige cada paso que damos.
                        </p>

                        <h3>La Visión</h3>
                        <p>
                            Nuestra visión es un Amazonas floreciente donde los ecosistemas son resilientes, la diversidad cultural se celebra y las comunidades son custodios de sus tierras ancestrales.
                        </p>

                        <h3>Valores Fundamentales</h3>
                        <ul>
                            <li><strong>Interculturalidad:</strong> Celebramos las diversas culturas y tradiciones del Amazonas, integrándolas en cada aspecto de nuestros esfuerzos de gobernanza y conservación.</li>
                            <li><strong>Sostenibilidad:</strong> Cada acción es un paso hacia el equilibrio ecológico, asegurando un legado de salud y vitalidad para el Amazonas.</li>
                            <li><strong>Colaboración:</strong> Nuestra fuerza radica en nuestras asociaciones, abarcando desde las comunidades locales hasta los aliados internacionales.</li>
                            <li><strong>Innovación:</strong> Pioneros en soluciones que combinan la tecnología moderna con las prácticas tradicionales para obtener resultados revolucionarios.</li>
                        </ul>

                        <h3>Objetivos Estratégicos</h3>
                        <ul>
                            <li><strong>Empoderamiento y Monitoreo:</strong> Equipamos a las comunidades indígenas con las herramientas para supervisar sus tierras y contribuir a los esfuerzos ambientales globales.</li>
                            <li><strong>Empoderamiento Comunitario y Territorial:</strong> Apoyamos la autonomía y la gobernanza, permitiendo que las comunidades prosperen bajo su propio liderazgo y sabiduría cultural.</li>
                            <li><strong>Abogacía y Comunicación:</strong> Formamos políticas y percepciones, asegurando que la voz del Amazonas sea escuchada y respetada en todo el mundo.</li>
                            <li><strong>Diálogos Interculturales:</strong> Fomentamos el diálogo que une los sistemas de conocimiento tradicional y moderno, enriqueciendo las estrategias de conservación.</li>
                        </ul>
                    </div>

                    <div className={styles.KeyPoints}>
                        <h2>Destacados</h2>
                        <ul>
                            <li>Integración de herramientas de GCP con el conocimiento indígena para un ecosistema GIS sostenible.</li>
                            <li>Abordando desafíos de conectividad con tecnologías innovadoras como Starlink.</li>
                            <li>Soluciones espaciales próximas para mejorar nuestras capacidades GIS.</li>
                        </ul>
                    </div>

                    <div className={styles.AdditionalResources}>
                        <h2>Aprende Más</h2>
                        <ul>
                            <li><a href="https://cloud.google.com/" target="_blank" rel="noopener noreferrer">Google Cloud Platform</a>: Conoce las tecnologías que impulsan nuestro proyecto.</li>
                            <li><a href="https://earthengine.google.com/" target="_blank" rel="noopener noreferrer">Google Earth Engine</a>: Explora las herramientas para el análisis de datos ambientales.</li>
                            <li><a href="https://www.starlink.com/" target="_blank" rel="noopener noreferrer">Starlink</a>: Descubre cómo el internet satelital está conectando el Amazonas.</li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Entry;