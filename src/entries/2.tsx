import React, { useEffect } from 'react';

type Styles = {
    [className: string]: string;
};

interface EntryProps {
    styles: Styles;
    globalStyles: Styles;
    language: string;
}

const Entry1: React.FC<EntryProps> = ({styles, language}) => {

    useEffect(() => {
        const bootstrapLink = document.createElement('link');
        bootstrapLink.rel = 'stylesheet';
        bootstrapLink.href =
        'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css';
        bootstrapLink.integrity =
        'sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC';
        bootstrapLink.crossOrigin = 'anonymous';
        document.head.appendChild(bootstrapLink);

        return () => {
        document.head.removeChild(bootstrapLink);
        };
    }, []);

    return (
        <div className={styles.container}>
            {/* Content based on language */}
            {language === 'es' && (
                <div id="spanishContent">
                <div className="text-center">
                    Bienvenido a <b>ESPÆCIAL</b>
                </div>
                <h1>Ofrecer valor para Catastro Multipropósito es más fácil de lo que piensas</h1>
                <p className={styles.textMuted}>Fecha de Publicación: Junio 9, 2024</p>

                <div className={styles.Content}>
                    <p>
                    Nos hemos dado cuenta de la nueva era que viene con la tecnología de la información masiva,
                    pero no hemos sido educados de la mejor forma sobre cómo manipularla con facilidad. Puede
                    costarnos esto un poco avanzando con nuestra misión en el mundo y siempre es posible abandonar
                    lo que ya nos cansa: no ser tan ágiles como queremos.
                    </p>
                </div>

                <div className={styles.Content}>
                    <h2>Motivación</h2>
                    <p>
                    Nuestra ventaja aquí es poder planear con agilidad proyectos que antes nos parecerían eternos.
                    Con equipos sólidos siempre es posible lo que sea útil y ligero. Un par de semanas llevo
                    consolidando la oficina tecnológica para información geográfica de la{' '}
                    <a href="https://github.com/gaia-amazonas" target="_blank" rel="noopener noreferrer">
                        fundación Gaia Amazonas
                    </a>{' '}
                    y he confirmado lo que sabía, comprendí los roles de ingenieros de datos, geógrafos, sociólogos,
                    aventureros y administradores de SIG. Nuestro sistema de bases de datos espaciales en la nube
                    comunica fácilmente y con velocidades mejorables, datos espaciales en internet.
                    </p>
                </div>

                <div className={styles.Content}>
                    <h2>Paradigmas</h2>
                    <p>
                    No solamente es increíble Google Cloud por su intuitividad para ofrecer servicios con
                    propiedades avanzadas, también lo hace atractivo el sistema de precios (que en general ofrece la
                    computación en la nube) <em>paga lo que usas</em>. Sus servicios facilitan el acceso de personas
                    como tú y yo a servidores únicos para las diferentes necesidades que surgen.
                    </p>
                </div>

                <div className={styles.KeyPoints}>
                    <h2>Paso a Paso</h2>
                    <ul>
                    <li>Entender que la gente y la comunidad es lo que importa.</li>
                    <li>
                        Entender la figura esencial de la base datos para el SIG, estos suelen ser leyes, decretos,
                        etc. Como el decreto 632.
                    </li>
                    <li>Dibujar el diagrama conceptual para implementar en un motor SQL.</li>
                    <li>Entender quién capturará datos.</li>
                    <li>Entender cómo capturará datos.</li>
                    <li>Entender cómo comunicará sus datos.</li>
                    <li>Entender cuáles son los otros roles dentro del sistema.</li>
                    <li>Entender las funciones de estos roles.</li>
                    <li>Entender cómo los roles se comunican entre sí.</li>
                    <li>
                        Entender qué roles necesitas para diseñar, implementar y mantener un sistema seguro y
                        comunicador ágil e intuitivo de datos espaciales basado en roles para garantizar el menor
                        número de errores posibles.
                    </li>
                    <li>
                        Entender que todos los roles deben regirse con el sistema versionado de aplicaciones y bases
                        de datos para evitar pérdida algorítmica o informática.
                    </li>
                    <li>
                        Implementación de metodologías ágiles para todas las aplicaciones, las formas en que se
                        almacenan sus datos y cómo la documentación versionada es escrita.
                    </li>
                    </ul>
                </div>

                <div className={styles.Culture}>
                    <h2>Cultura</h2>
                    <ul>
                    <li>
                        Aprendizaje continuo: en realidad no importa tanto qué lenguaje de programación dominas mejor,
                        si no la curiosidad por aprender ágilmente paradigmas o conceptos nuevos útiles para cada
                        proyecto.
                    </li>
                    <li>
                        Hábito: Todo cambia progresivamente y sin comunicación humana excelente el sistema se atasca y
                        se pierde de los problemas presentes.
                    </li>
                    <li>
                        Valores: La honestidad es un valor muy importante. Priorizar el bienestar de personas honestas
                        en lugar de licencias muy caras puede llevar a su proyecto de prueba a de producción masiva.
                    </li>
                    <li>Flexibilidad: Haz que el sistema siempre sea flexible.</li>
                    <li>
                        Usa las herramientas: Intenta implementar ayudas AI en tu sistema siempre que sea posible y no
                        dañen código o datos.
                    </li>
                    <li>Decisiones que importan: Intenta tomar siempre decisiones basadas en datos.</li>
                    </ul>
                </div>

                <div className={styles.AdditionalResources}>
                    <h2>Documentación importante</h2>
                    <ul>
                    <li>
                        <a href="https://github.com/orgs/gaia-amazonas/repositories" target="_blank" rel="noopener noreferrer">
                        En Gaia Amazonas para el público
                        </a>
                    </li>
                    <li>
                        <a href="https://www.suin-juriscol.gov.co/viewDocument.asp?ruta=Decretos/30034960" target="_blank" rel="noopener noreferrer">
                        Decreto 632
                        </a>
                    </li>
                    <li>
                        <a href="https://gitlab-ladm-col.igac.gov.co/root/LADM_COL" target="_blank" rel="noopener noreferrer">
                        LADM-Col el IGAC
                        </a>
                    </li>
                    </ul>
                </div>

                <div className={styles.Contact} style={{ marginTop: '30px' }}>
                    <h2>Información de Contacto</h2>
                    <p>
                    Si estás inspirado y quieres unirte a ESPÆCIAL en nuestra misión de aprovechar el código abierto
                    para el bien social, por favor contáctanos:
                    </p>
                    <ul>
                        <li>
                            Email:{' '}
                            <a href="mailto:nicalcoca@gmail.com" target="_blank" rel="noopener noreferrer">
                            nicalcoca@gmail.com
                            </a>
                        </li>
                        <li>
                            GitHub:{' '}
                            <a href="https://github.com/ESPAECIAL" target="_blank" rel="noopener noreferrer">
                            https://github.com/ESPAECIAL
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        )}

        {language === 'en' && (
            <div id="englishContent">
                <div className="text-center">
                    Welcome to <b>ESPÆCIAL</b>
                </div>
                <h1>Offering Multipurpose Cadastre Values is Easier Than You Think</h1>
                <p className={styles.textMuted}>Date Published: June 9, 2024</p>

                <div className={styles.Content}>
                    <p>
                    We have realized the new era that comes with massive information technology, but we haven't been
                    educated in the best way on how to handle it easily. This might cost us a bit in advancing with
                    our mission in the world, and it's always possible to abandon what already tires us: not being as
                    agile as we want.
                    </p>
                </div>

                <div className={styles.Content}>
                    <h2>Motivation</h2>
                    <p>
                    Our advantage here is being able to plan projects that would have seemed eternal before with
                    agility. With solid teams, anything useful and light is possible. I have spent a couple of weeks
                    consolidating the technological office for geographic information at the{' '}
                    <a href="https://github.com/gaia-amazonas" target="_blank" rel="noopener noreferrer">
                        Gaia Amazonas foundation
                    </a>{' '}
                    and have confirmed what I knew; I understood the roles of data engineers, geographers,
                    sociologists, adventurers, and GIS administrators. Our spatial database system in the cloud
                    easily communicates with moderate or small volumes of data on the internet.
                    </p>
                </div>

                <div className={styles.Content}>
                    <h2>Paradigms</h2>
                    <p>
                    Google Cloud is not only incredible for its intuitiveness in offering services with advanced
                    properties, but the pricing system is also attractive (which cloud computing in general offers){' '}
                    <em>pay for what you use</em>. Its services facilitate access for people like you and me to
                    unique servers for different emerging needs.
                    </p>
                </div>

                <div className={styles.KeyPoints}>
                    <h2>Step by Step</h2>
                    <ul>
                    <li>Understand that people and the community are what matters.</li>
                    <li>
                        Understand the essential figure of the database for the GIS, these are usually laws, decrees,
                        etc. Like decree 632.
                    </li>
                    <li>Draw the conceptual diagram to implement in an SQL engine.</li>
                    <li>Understand who will capture data.</li>
                    <li>Understand how they will capture data.</li>
                    <li>Understand how they will communicate their data.</li>
                    <li>Understand what the other roles within the system are.</li>
                    <li>Understand the functions of these roles.</li>
                    <li>Understand how the roles communicate with each other.</li>
                    <li>
                        Understand what roles you need to design, implement, and maintain a secure and agile data
                        communication system based on roles to guarantee the least number of possible errors.
                    </li>
                    <li>
                        Understand that all roles must adhere to the versioned application and database system to
                        avoid algorithmic or informational loss.
                    </li>
                    <li>
                        Implement agile methodologies for all applications, the ways their data is stored, and how the
                        versioned documentation is written.
                    </li>
                    </ul>
                </div>

                <div className={styles.Culture}>
                    <h2>Culture</h2>
                    <ul>
                    <li>
                        Continuous Learning: It doesn't really matter what programming language you master best, but
                        learning new paradigms or concepts agilely.
                    </li>
                    <li>
                        Habit: Everything changes progressively, and without excellent human communication, the system
                        gets stuck and loses sight of present problems.
                    </li>
                    <li>
                        Values: Honesty is a very important value. Prioritizing the well-being of honest people instead
                        of very expensive licenses can take your trial project to mass production.
                    </li>
                    <li>Flexibility: Make the system always flexible.</li>
                    <li>
                        Use the tools: Try to implement AI aids in your system whenever possible and don't damage code
                        or data.
                    </li>
                    <li>Decisions that Matter: Try to take always data-based decisions.</li>
                    </ul>
                </div>

                <div className={styles.AdditionalResources}>
                    <h2>Important Documentation</h2>
                    <ul>
                    <li>
                        <a href="https://github.com/orgs/gaia-amazonas/repositories" target="_blank" rel="noopener noreferrer">
                        Gaia Amazonas for the general public
                        </a>
                    </li>
                    <li>
                        <a href="https://www.suin-juriscol.gov.co/viewDocument.asp?ruta=Decretos/30034960" target="_blank" rel="noopener noreferrer">
                        Decree 632
                        </a>
                    </li>
                    <li>
                        <a href="https://gitlab-ladm-col.igac.gov.co/root/LADM_COL" target="_blank" rel="noopener noreferrer">
                        LADM-Col by IGAC
                        </a>
                    </li>
                    </ul>
                </div>

                <div className={styles.Contact} style={{ marginTop: '30px' }}>
                    <h2>Contact Information</h2>
                    <p>
                    If you're inspired and want to join ESPÆCIAL in our mission to leverage open source for social
                    good, please reach out to us:
                    </p>
                    <ul>
                    <li>
                        Email:{' '}
                        <a href="mailto:nicalcoca@gmail.com" target="_blank" rel="noopener noreferrer">
                        nicalcoca@gmail.com
                        </a>
                    </li>
                    <li>
                        GitHub:{' '}
                        <a href="https://github.com/ESPAECIAL" target="_blank" rel="noopener noreferrer">
                        https://github.com/ESPAECIAL
                        </a>
                    </li>
                    </ul>
                </div>
            </div>
        )}
        </div>
    );
};

export default Entry1;
