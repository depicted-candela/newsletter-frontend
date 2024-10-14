// 5.tsx
import React from 'react';
import 'katex/dist/katex.min.css';
import PdfViewer from '../components/PdfViewer';
import ComponentImp from '../types';


const SetOperations: React.FC<ComponentImp> = ({ styles, language }) => {
    return (
        <div className={styles.container}>
            {language === 'en' && (
                <div id='englishContent'>
                    <div className={styles.textCenter}><h1>Operations in Sets</h1></div>
                    <h2>Motivation</h2>
                    <p>Remember the doubt you had: to go or not to go. Humans are moved by the desire for difference, ego is considered if you prefer over what you have, or innovation when the preserved improves. Almost every week I think where I will go to enrich myself culturally but I know that at home I can do it also by learning, the first theme is about people and the second about my mind.</p>
                    <p>In general this happens to all of us, although for each one it is different. Deep down it seems that the doubt answers itself: yes I am going but inside me learning from books or I am out there discovering such interesting souls. As long as I do not dedicate my days to the contemplation of unimportant things I am going somewhere. So the real question is: going to the max?</p>
                    <p>Our purpose appears clearer on the horizon and it is now where other abstractions too, like paying for something and waiting for the surplus (addition and subtraction): operations on sets. To go to the maximum means to give everything for the dreamed, for a God it does not matter but it does for humans. To travel to some remote country or to understand Marx to better understand the value of things. Both would be possible but incompatible if the desire is to maximize our adventure. To meet very different people but without much to contribute to you as a being and then return home and realize the meaning of the preserved, a part of the value but not all that Capital can teach us. This is an "A U B" union, travel to a remote country and study Marx, we will be tired and saturated for having done so much with little meaning.</p>
                    <p>Another very useful operation can be "A ∩ B": go to a region where the central topic of conversation is Capital to return home having met people who are not necessarily natives of that region but who are there united to understand what value is, there we find a huge multicultural diversity of people without knowing a whole continent. "A / B" means to travel without purpose but perhaps having an unsustainably rich time in the long run, "B / A" means to learn the value without sharing our knowledge richly, segregating the learning by our perspective that fears completely unknown souls. It is easy to notice that "A U B" contains "A ∩ B" (mathematically "A U B" ⊇ "A ∩ B"), but for a human time is counted, that means in this case "A ∩ B" will serve us more in our passage through eternity than "A U B" and case closed.</p>

                    <div className={styles.content}>
                        <h4>1. Basic Set Operations</h4>
                        <ul>
                            <li>
                                <strong>Intersection (A ∩ B):</strong> This operation finds common elements between two sets. 
                                For example, if set A is locations with "forest" land use and set B is locations with "protected areas," 
                                then A∩B will give locations that are both "forest" and "protected."
                            </li>
                            <li>
                                <strong>Union (A ∪ B):</strong> This operation combines elements from both sets. For example, 
                                if set A represents "urban areas" and set B represents "rural areas," A∪B will include all locations 
                                classified as either "urban" or "rural."
                            </li>
                            <li>
                                <strong>Difference (A \ B):</strong> This represents elements in set A but not in set B. 
                                If set A is "all surveyed areas" and set B is "flood zones," then A\B will give the areas that are surveyed but not in flood zones.
                            </li>
                        </ul>
                    </div>

                    <div className={styles.content}>
                        <h4>2. Visual Representation with Venn Diagrams</h4>
                        <ul>
                            <li>
                                <strong>A ∩ B:</strong> Overlapping region shows common features between two data layers.
                            </li>
                            <li>
                                <strong>A ∪ B:</strong> Shows all features from both data layers.
                            </li>
                            <li>
                                <strong>A \ B:</strong> Shows features from the first data layer that do not appear in the second.
                            </li>
                        </ul>
                        <p className="text-muted">These concepts can be visualized in GIS software using tools like layer masking or overlay analysis.</p>
                    </div>

                    <div className={styles.content}>
                        <h4>3. Application Example: Spatial Queries</h4>
                        <p>
                            Consider a situation where you need to find areas in a city that meet the following conditions:
                        </p>
                        <ul>
                            <li>Located within a commercial zone (Set C).</li>
                            <li>Not in a flood risk area (Set F).</li>
                            <li>Have high population density (Set P).</li>
                        </ul>
                        <p>
                            Using set operations:
                        </p>
                        <p className={styles.katex}>
                            Resulting Area: C ∩ P \ F
                        </p>
                        <p className="text-muted">
                            This means you are looking for areas that are both in commercial zones and high population density but exclude flood-prone areas.
                        </p>
                    </div>

                    <div className={styles.content}>
                        <h4>4. Logical Connectives in GIS</h4>
                        <ul>
                            <li><strong>AND (∩):</strong> Both conditions must be true (e.g., "AND" in query expressions).</li>
                            <li><strong>OR (∪):</strong> At least one condition must be true.</li>
                            <li><strong>NOT (): </strong>Exclude elements that meet a certain condition.</li>
                        </ul>
                    </div>

                    <div className={styles.content}>
                        <h4>5. Summary for Engineers and Geodesists</h4>
                        <p>
                            Understanding these set operations helps in performing complex spatial analysis such as:
                        </p>
                        <ul>
                            <li><strong>Habitat Suitability Analysis:</strong> Using set operations to combine layers like vegetation, water proximity, and elevation.</li>
                            <li><strong>Risk Assessment:</strong> Identifying zones that combine multiple risk factors like landslides and floods.</li>
                        </ul>
                        <p>
                            By mastering these basic operations, you can efficiently query and analyze geographic data to solve practical problems in your field.
                        </p>
                    </div>

                    <h2 style={{display:'flex', justifyContent: 'center', alignItems: 'center'}}>My Depiction</h2>
                    
                    <PdfViewer src="https://pub-bfd9ae1ad5904482b6c450dd36d126e9.r2.dev/1-4/depiction.pdf" alt="My depiction"/>
                        
                    <h2>Deepening</h2>
                    <p>The chapter that I used to learn this is <a href='https://pub-a1db9c9fc4e947c8a68d875a60916f63.r2.dev/1-4/1-4.pdf'>HERE</a>, from the Daniels Velleman's book How to Prove It.</p>
                    <h3>My solutions for most of the problems are:</h3>
                
                </div>
            )}
            {language === 'es' && (
                <div id='spanishContent'>
                    <div className={styles.textCenter}><h1>Operaciones en Conjuntos</h1></div>
                    <h2>Motivación</h2>
                    <p>Recuerda la duda que tuviste: ir o no ir. Los humanos se mueven por el deseo de la diferencia, ego se considera si se prefiere sobre lo que se tiene, o innovación cuando lo conservado mejora. Casi cada semana pienso a donde iré para enriquecerme culturamente pero sé que en casa puedo hacerlo también aprendiendo, el primer tema se trata sobre la gente y el segundo sobre mi mente.</p>
                    <p>En general nos pasa esto aunque para cada quien diferente. En el fondo parece que la duda se responde sola: sí estoy yendo pero dentro de mí aprendiendo de libros o estoy por ahí descubriendo almas tan interesantes. Siempre que no dedique mis días a la contemplación de cosas sin importancia estoy yendo a algún sitio. Entonces la duda real es: ir al máximo?</p>
                    <p>Nuestro propósito aparece más claro en el horizonte y es ahora donde otras abstracciones también, como al pagar algo y esperamos el excedente (suma y resta): operaciones sobre conjuntos. Ir al máximo significa darlo todo por lo soñado, para un Dios no importa pero sí para humanos. Viajar a algún país remoto o entender a Marx para comprender mejor el valor de las cosas. Ambas cosas resultarían algo posible pero incompatible si el deseo es maximizar nuestra aventura. Conocer personas muy diferentes pero sin mucho que aportarte como ser para luego volver al hogar y darte cuenta del significado de lo conservado, una parte del valor pero no todo lo que El Capital puede enseñarnos. Esto es una unión "A U B", viajar a un país remoto y estudiar a Marx, resultaremos cansados y saturados por haber hecho tanto con poco significado.</p>
                    <p>Otra operación muy útil puede ser "A ∩ B": ir a una región en donde el tema de conversación central es El Capital para volver al hogar habiendo conocido personas que no necesarimente son nativas de esa región pero que están ahí unidas para comprender qué es el valor, ahí encontremos una diversidad multicultural enorme de gente sin conocer todo un continente. "A \ B" significa viajar sin propósito pero quizá pasándola rico insosteniblemente a largo plazo, "B \ A" es aprender el valor sin compartir nuestros saberes ricamente, sezgando el aprendizaje por nuestra perspectiva que teme almas completamente desconocidas. Es fácil notar que "A U B" contiene a "A ∩ B" (matemáticamente "A U B" ⊇ "A ∩ B"), pero para un humano el tiempo está contado, eso significa que en este caso "A ∩ B" nos servirá más en nuestro paso por la eternidad que "A U B" y caso cerrado.</p>

                    <div className={styles.content}>
                        <h4>1. Operaciones Básicas de Conjuntos</h4>
                        <ul>
                            <li>
                                <strong>Intersección (A ∩ B):</strong> Esta operación encuentra elementos comunes entre dos conjuntos.
                                Por ejemplo, si el conjunto A son ubicaciones con uso de suelo "forestal" y el conjunto B son ubicaciones con "áreas protegidas",
                                entonces A∩B dará las ubicaciones que son tanto "forestales" como "protegidas".
                            </li>
                            <li>
                                <strong>Unión (A ∪ B):</strong> Esta operación combina elementos de ambos conjuntos. Por ejemplo,
                                si el conjunto A representa "áreas urbanas" y el conjunto B representa "áreas rurales", A∪B incluirá todas las ubicaciones
                                clasificadas como "urbanas" o "rurales".
                            </li>
                            <li>
                                <strong>Diferencia (A \ B):</strong> Representa los elementos en el conjunto A que no están en el conjunto B.
                                Si el conjunto A es "todas las áreas encuestadas" y el conjunto B es "zonas inundables", entonces A\B dará las áreas encuestadas que no están en zonas inundables.
                            </li>
                        </ul>
                    </div>

                    <div className={styles.content}>
                        <h4>2. Representación Visual con Diagramas de Venn</h4>
                        <ul>
                            <li>
                                <strong>A ∩ B:</strong> La región superpuesta muestra las características comunes entre dos capas de datos.
                            </li>
                            <li>
                                <strong>A ∪ B:</strong> Muestra todas las características de ambas capas de datos.
                            </li>
                            <li>
                                <strong>A \ B:</strong> Muestra las características de la primera capa de datos que no aparecen en la segunda.
                            </li>
                        </ul>
                        <p className="text-muted">Estos conceptos pueden visualizarse en software SIG utilizando herramientas como enmascaramiento de capas o análisis de superposición.</p>
                    </div>

                    <div className={styles.content}>
                        <h4>3. Ejemplo de Aplicación: Consultas Espaciales</h4>
                        <p>
                            Considera una situación en la que necesitas encontrar áreas en una ciudad que cumplan con las siguientes condiciones:
                        </p>
                        <ul>
                            <li>Ubicadas dentro de una zona comercial (Conjunto C).</li>
                            <li>No estar en una zona de riesgo de inundación (Conjunto F).</li>
                            <li>Tener alta densidad de población (Conjunto P).</li>
                        </ul>
                        <p>
                            Usando operaciones de conjuntos:
                        </p>
                        <p className={styles.katex}>
                            Área Resultante: C ∩ P \ F
                        </p>
                        <p className="text-muted">
                            Esto significa que estás buscando áreas que estén tanto en zonas comerciales como con alta densidad de población, pero excluyendo las zonas propensas a inundaciones.
                        </p>
                    </div>

                    <div className={styles.content}>
                        <h4>4. Conectores Lógicos en SIG</h4>
                        <ul>
                            <li><strong>Y (∩):</strong> Ambas condiciones deben ser verdaderas (por ejemplo, "Y" en expresiones de consulta).</li>
                            <li><strong>O (∪):</strong> Al menos una condición debe ser verdadera.</li>
                            <li><strong>NO (): </strong> Excluir elementos que cumplan con cierta condición.</li>
                        </ul>
                    </div>

                    <div className={styles.content}>
                        <h4>5. Resumen para Ingenieros y Geodestas</h4>
                        <p>
                            Comprender estas operaciones de conjuntos ayuda a realizar análisis espaciales complejos como:
                        </p>
                        <ul>
                            <li><strong>Análisis de Adecuación del Hábitat:</strong> Usar operaciones de conjuntos para combinar capas como vegetación, proximidad al agua y elevación.</li>
                            <li><strong>Evaluación de Riesgos:</strong> Identificar zonas que combinen múltiples factores de riesgo como deslizamientos de tierra e inundaciones.</li>
                        </ul>
                        <p>
                            Al dominar estas operaciones básicas, puedes consultar y analizar datos geográficos de manera eficiente para resolver problemas prácticos en tu campo.
                        </p>
                    </div>

                    <h2 style={{display:'flex', justifyContent: 'center', alignItems: 'center'}}>Mi Representación</h2>
                    <PdfViewer src="https://pub-bfd9ae1ad5904482b6c450dd36d126e9.r2.dev/1-4/depiction.pdf" alt="Mi representación"/>
                    <h2>Profundización</h2>
                    <p>El capítulo que utilicé para aprender esto está <a href='https://pub-a1db9c9fc4e947c8a68d875a60916f63.r2.dev/1-4/1-4.pdf'>AQUÍ</a>, del libro de Daniel Velleman *Cómo Demostrarlo*.</p>
                    <h3>Mis soluciones para la mayoría de los problemas son:</h3>
                </div>
            )}
            <PdfViewer src="https://pub-bfd9ae1ad5904482b6c450dd36d126e9.r2.dev/1-4/solutions.pdf" alt="My solutions"/>
        </div>
    );
}

export default SetOperations;