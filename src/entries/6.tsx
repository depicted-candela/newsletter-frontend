// 5.tsx
import React from 'react';
import 'katex/dist/katex.min.css';
import ComponentImp from '../types';
import PdfViewer from '../components/PdfViewer';
import { Helmet } from 'react-helmet-async';

const ConditionalAndBiconditionalConnectives: React.FC<ComponentImp> = ({ styles, language }) => {

    const renderEnglishContent = () => (
        <div className={styles.textCenter}>
            <h1>Conditional and Biconditional Connectives in GIS/Geodesy</h1>
            <h2>Motivation</h2>
            <p>You know very well how much decisions cost. A whim is always choosing something just because of the emotions it generates or the past it reminds us of. Imagine if a flock of ducks migrated just because humans started putting pumpkins in streetlights, or if we, wanting to be happy, pursued money, or to feel secure, did what everyone else does. It could be that the ducks find regenerated ecosystems by the time their eggs hatch, or that earning a better salary alleviates worries (only to fall into others), or that:</p>
            {renderShaqsPoem()}
            <p>This is what you really must do if you want the security of not fully being yourself. So, just because one thing causes another doesn’t mean it’s the only cause that could exist, or the one that you could most easily influence. For ducks, it’s easier to follow their survival instincts than to wait until October in a place where there’s free food and then migrate; the duck species will preserve itself better if, and only if, they follow their instincts. You will be happy if you adopt the principles of Ikigai. How will it personally be easier for you to feel secure in the world?</p>
            <p>This branch of problems has been extensively studied with mathematics. It requires a vast understanding of who you are for personal decisions, or specific expertise on a subject for scientific-level decisions.</p>
            
            
            <div className={styles.content}>

                <h4>1. Conditional Connective (⇒)</h4>
                <p>A <strong>conditional statement</strong> is often written in the form:</p>
                <p><strong>If P then Q</strong>, symbolized as <code>P⇒Q</code>.</p>

                <ol type="a">
                    <li><strong>P</strong>: The antecedent (the "if" part)</li>
                    <li><strong>Q</strong>: The consequent (the "then" part)</li>
                </ol>

                <h4>Truth Table for Conditional (P⇒Q)</h4>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>P</th>
                            <th>Q</th>
                            <th>P⇒Q</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>True</td>
                            <td>True</td>
                            <td>True</td>
                        </tr>
                        <tr>
                            <td>True</td>
                            <td>False</td>
                            <td>False</td>
                        </tr>
                        <tr>
                            <td>False</td>
                            <td>True</td>
                            <td>True</td>
                        </tr>
                        <tr>
                            <td>False</td>
                            <td>False</td>
                            <td>True</td>
                        </tr>
                    </tbody>
                </table>

                <p><strong>True when:</strong> P is false, or both P and Q are true.</p>
                <p><strong>False when:</strong> P is true, and Q is false.</p>

                <h4>Example for GIS/Geodesy</h4>
                <p><strong>P:</strong> The terrain is flat.<br />
                <strong>Q:</strong> The satellite image is clear.</p>
                <p>"If the terrain is flat, then the satellite image is clear" can be represented as <code>P⇒Q</code>. If the terrain isn't flat, the statement is still considered true regardless of the image clarity.</p>
            
            </div>
                
            <div className={styles.content}>

                <h4>2. Biconditional Connective (↔)</h4>
                <p>A <strong>biconditional statement</strong> expresses an equivalence between two propositions:</p>
                <p><strong>P if and only if Q</strong>, symbolized as <code>P↔Q</code>.</p>

                <h4>Truth Table for Biconditional (P↔Q)</h4>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>P</th>
                            <th>Q</th>
                            <th>P↔Q</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>True</td>
                            <td>True</td>
                            <td>True</td>
                        </tr>
                        <tr>
                            <td>True</td>
                            <td>False</td>
                            <td>False</td>
                        </tr>
                        <tr>
                            <td>False</td>
                            <td>True</td>
                            <td>False</td>
                        </tr>
                        <tr>
                            <td>False</td>
                            <td>False</td>
                            <td>True</td>
                        </tr>
                    </tbody>
                </table>

                <p><strong>True when:</strong> P and Q have the same truth value.</p>
                <p><strong>False when:</strong> P and Q differ.</p>

                <h4>Example for GIS/Geodesy</h4>
                <p><strong>P:</strong> The elevation data is accurate.<br />
                <strong>Q:</strong> The map projections are correct.</p>
                <p>"The elevation data is accurate if and only if the map projections are correct" can be represented as <code>P↔Q</code>.</p>

            </div>

            <div className={styles.content}>

                <h4>Key Logical Equivalences</h4>
                <p>In practical reasoning for GIS/Geodesy, these logical equivalences help when making decisions based on data or ensuring quality:</p>

                <h4>i. Conditional Law</h4>
                <p><code>P⇒Q</code> is equivalent to <code>¬P ∨ Q</code>.</p>

                <h4>ii. Contrapositive Law</h4>
                <p><code>P⇒Q</code> is equivalent to <code>¬Q⇒¬P</code>.</p>

            </div>



            <h2 style={{display:'flex', justifyContent: 'center', alignItems: 'center'}}>My Depiction</h2>
                    
            <PdfViewer src="https://pub-bfd9ae1ad5904482b6c450dd36d126e9.r2.dev/1-5/depiction.pdf" alt="My depiction"/>

            <h2>Deepening</h2>
            <p>The chapter that I used to learn this is <a href='https://pub-bfd9ae1ad5904482b6c450dd36d126e9.r2.dev/1-5/1-5.pdf'>HERE</a>, from the Daniels Velleman's book How to Prove It.</p>

            <div className={styles.content}>
                <h4>Exercises</h4>
                <h4>1. Spatial Analysis with Conditional Statements</h4>
                <ol type="a">
                    <li>If a forest is adjacent to a waterbody, then the area is classified as a conservation zone</li>
                    <li>If urban area expands, it reduces the forest cover</li>
                    <li>If a waterbody is present near an urban area, the urban area will have stricter building regulations</li>
                </ol>

                <h4>2. Biconditional Relations in Geodesy</h4>
                <ol type="a">
                    <li>If the distance between P and Q is known, and the (x, y) coordinates of R are measured, then the angle at R is known</li>
                    <li>If the angle at R is known and (x or y) coordinates of P and Q, then the triangulation is complete</li>
                    <li>Write at least two biconditional statements of this context</li>
                </ol>

                <h4>3. Conditional Logic in GIS Buffer Zones</h4>
                <ol type="a">
                    <li>If a road is built within 500 meters of a river, then a buffer zone must be established</li>
                    <li>If a buffer zone is established, no construction is allowed within the buffer</li>
                </ol>

                <h4>4. Spatial Conditional Logic Verification</h4>
                <ol type="a">
                    <li>If an industrial zone is adjacent to a residential area, then additional green space must be created between them</li>
                    <li>A commercial area will only be developed if there is no industrial zone nearby</li>
                    <li>If the green area augments then the air quality will increase</li>
                </ol>

                <h4>5. Truth Tables for Conditionals Connectives</h4>
                <ol type="a">
                    <li>where R: Road Built; G: Green Space Created; A: Air Quality Improved</li>
                    <li>(R⇒G) and (G⇒A)</li>
                    <li>where U: Urban Area Near Waterbody; P: Protected Zone Established</li>
                    <li>U↔P</li>
                </ol>
            </div>
            Shoot me an email to nicalcoca@gmail.com to get the answer before to anyone else
        </div>
    );

    const renderSpanishContent = (): JSX.Element => (
        <div className={styles.textCenter}>
            <h1>Conectivos Condicionales y Bicondicionales en GIS/Geodesia</h1>
            <h2>Motivación</h2>
            <p>Sabes bien lo que cuestan las decisiones. Un capricho es elegir algo por las emociones que genera o el pasado que nos recuerda. Imagina que una vandada de patos migre solo porque los humanos comenzaron a poner calabazas en los alumbrados o queriendo ser felices vayamos tras dinero o para sentir seguridad hagamos lo que todos hacen. Puede ser que los patos encuentren ecosistemas regenerados para cuando sus huevos hayan eclosionado, también que alcanzar un sueldo mejor libere preocupaciones (para caer luego en otras), o que </p>
            {renderShaqsPoem()}
            <p>es lo que realmente debes hacer si quieres la seguridad de no ser plenamente tú. Entonces que una cosa cause otra no significa que sea la única causa (que podría no ser lo que más fácilmente puedes causar) para el efecto deseado. Para los patos es más fácil seguir sus instintos de supervivencia que esperar hasta octubre en un sitio donde hay comida free para entonces migrar; la especie de patos se preservará más si y solo si estos siguen sus instintos. Serás feliz si adoptas los principios Ikigai. ¿Cómo personalmente será más fácil para tí sentir en el mundo seguridad?</p>
            <p>Esta rama de problemáticas ha sido estudiada arduamente con matemáticas, requiere de una comprensión amplísima de quien es uno para decisiones personales o específicas en un tema para decisiones de nivel científico.</p>
            
            <div className={styles.content}>

                <h4>1. Conectivo Condicional (⇒)</h4>
                <p>Una <strong>proposición condicional</strong> a menudo se expresa en la forma:</p>
                <p><strong>Si P entonces Q</strong>, simbolizado como <code>P⇒Q</code>.</p>

                <ol type="a">
                    <li><strong>P</strong>: El antecedente (la parte del "si")</li>
                    <li><strong>Q</strong>: El consecuente (la parte del "entonces")</li>
                </ol>

                <h4>Tabla de Verdad para Condicional (P⇒Q)</h4>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>P</th>
                            <th>Q</th>
                            <th>P⇒Q</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Verdadero</td>
                            <td>Verdadero</td>
                            <td>Verdadero</td>
                        </tr>
                        <tr>
                            <td>Verdadero</td>
                            <td>Falso</td>
                            <td>Falso</td>
                        </tr>
                        <tr>
                            <td>Falso</td>
                            <td>Verdadero</td>
                            <td>Verdadero</td>
                        </tr>
                        <tr>
                            <td>Falso</td>
                            <td>Falso</td>
                            <td>Verdadero</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
            <div className={styles.content}>

                <h4>2. Conectivo Bicondicional (↔)</h4>
                <p>Una <strong>proposición bicondicional</strong> expresa una equivalencia entre dos proposiciones:</p>
                <p><strong>P si y solo si Q</strong>, simbolizado como <code>P↔Q</code>.</p>

                <h4>Tabla de Verdad para Bicondicional (P↔Q)</h4>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>P</th>
                            <th>Q</th>
                            <th>P↔Q</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Verdadero</td>
                            <td>Verdadero</td>
                            <td>Verdadero</td>
                        </tr>
                        <tr>
                            <td>Verdadero</td>
                            <td>Falso</td>
                            <td>Falso</td>
                        </tr>
                        <tr>
                            <td>Falso</td>
                            <td>Verdadero</td>
                            <td>Falso</td>
                        </tr>
                        <tr>
                            <td>Falso</td>
                            <td>Falso</td>
                            <td>Verdadero</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2 style={{display:'flex', justifyContent: 'center', alignItems: 'center'}}>Mi Representación</h2>
                    
            <PdfViewer src="https://pub-bfd9ae1ad5904482b6c450dd36d126e9.r2.dev/1-5/depiction.pdf" alt="My depiction"/>

            <h2>Profundización</h2>
            <p>El capítulo que utilicé para aprender esto está <a href='https://pub-bfd9ae1ad5904482b6c450dd36d126e9.r2.dev/1-5/1-5.pdf'>AQUÍ</a>, del libro de Daniel Velleman *Cómo Demostrarlo*.</p>

            <div className={styles.content}>
                <h4>Ejercicios</h4>
                <h4>1. Análisis espacial con declaraciones condicionales</h4>
                <ol type="a">
                    <li>Si un bosque está adyacente a un cuerpo de agua, entonces el área se clasifica como una zona de conservación</li>
                    <li>Si el área urbana se expande, reduce la cobertura forestal</li>
                    <li>Si hay un cuerpo de agua cerca de un área urbana, el área urbana tendrá regulaciones de construcción más estrictas</li>
                </ol>

                <h4>2. Relaciones bicondicionales en geodesia</h4>
                En geodesia, la triangulación entre los puntos P, Q y R se utiliza a menudo para establecer puntos de referencia. Escribe las siguientes afirmaciones usando bicondicionales y condicionales:
                <ol type="a">
                    <li>Si se conoce la distancia entre P y Q, y se miden las coordenadas (x, y) de R, entonces se conoce el ángulo en R</li>
                    <li>Si se conoce el ángulo en R y las coordenadas (x o y) de P y Q, entonces la triangulación está completa</li>
                    <li>Escribe al menos dos declaraciones bicondicionales en este contexto</li>
                </ol>

                <h4>3. Lógica condicional en zonas de amortiguamiento de SIG</h4>
                Escribe las siguientes oraciones usando bicondicionales y condicionales:
                <ol type="a">
                    <li>Si se construye una carretera a menos de 500 metros de un río, entonces se debe establecer una zona de amortiguamiento</li>
                    <li>Si se establece una zona de amortiguamiento, no se permite construcción dentro de la zona de amortiguamiento</li>
                </ol>

                <h4>4. Verificación de lógica condicional espacial</h4>
                Escribe las siguientes oraciones usando bicondicionales y condicionales:
                <ol type="a">
                    <li>Si una zona industrial está adyacente a una zona residencial, entonces se debe crear un espacio verde adicional entre ellas</li>
                    <li>Un área comercial solo se desarrollará si no hay una zona industrial cercana</li>
                    <li>Si el área verde aumenta, entonces la calidad del aire mejorará</li>
                </ol>

                <h4>5. Tablas de verdad para conectivos condicionales</h4>
                Crea tablas de verdad para las siguientes relaciones lógicas:
                <ol type="a">
                    <li>R: Carretera construida; G: Espacio verde creado; A: Mejora en la calidad del aire</li>
                    (R⇒G) ∧ (G⇒A)
                    <li>U: Área urbana cerca de un cuerpo de agua; P: Zona protegida establecida</li>
                    U↔P
                </ol>
            </div>
            Tírame un correo a nicalcoca@gmail para obtener las respuestas antes que los demás
        </div>
    );

    const metaTags = () => (
        <Helmet>
            {/* General meta tags */}
            <title>Conditional and Biconditional Connectives</title>
            <meta name="description" content="Learn about conditional and biconditional connectives in GIS/Geodesy, with examples and exercises." />

            {/* Open Graph meta tags for URL preview */}
            <meta property="og:title" content="Conectivos Condicionales y Bicondicionales en GIS/Geodesy" />
            <meta property="og:description" content="Comprenda cómo se aplica la lógica condicional y bicondicional a los SIG/Geodesia con ejemplos y ejercicios." />
            <meta property="og:image" content="https://pub-bfd9ae1ad5904482b6c450dd36d126e9.r2.dev/1-5/thumbnail.png" />
            <meta property="og:url" content="https://newsletter-frontend.pages.dev/6" />
            <meta property="og:type" content="article" />

            {/* Twitter Card meta tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Conectivos Condicionales y Bicondicionales en GIS/Geodesy" />
            <meta name="twitter:description" content="Comprenda cómo se aplica la lógica condicional y bicondicional a los SIG/Geodesia con ejemplos y ejercicios.." />
            <meta name="twitter:image" content="https://pub-bfd9ae1ad5904482b6c450dd36d126e9.r2.dev/1-5/thumbnail.png" />
        </Helmet>
    );

    return (
        <div className={styles.container}>
            {metaTags()}
            {language === 'en' ? renderEnglishContent() : renderSpanishContent()}
        </div>
    );
}

export default ConditionalAndBiconditionalConnectives;

const renderShaqsPoem = (): JSX.Element => {
    return (
        <div>
            <i>
                Saludar al vecino acostarse a una hora<br />
                Trabajar cada día para vivir en la vida<br />
                Y contestar solo aquello y sentir solo esto<br />
                Y que Dios nos ampare de malos pensamientos<br />
                Cumplir con las tareas, asistir al colegio<br />
                Que diría la familia si eres un fracasado?<br />
                Ponte siempre zapatos, no hagas ruido en la mesa<br />
                Usa medias veladas y corbata en las fiestas<br />
                Las mujeres se casan siempre antes de 30<br />
                Si no vestirán santos y aunque así no lo quieran<br />
                Y en la fiesta de quince es mejor no olvidar<br />
                Una fina champaña y bailar bien el vals<br />
                Y bailar bien el vals (Shaq)
            </i>
        </div>
    );
};
