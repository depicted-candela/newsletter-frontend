// 4.tsx
import React from 'react';
import 'katex/dist/katex.min.css';
import ComponentImp from '../types';
import renderMath from '../mathRender';
import ImageWrapper from '../components/ImageWrapper';

const LogicContent: React.FC<ComponentImp> = ({ styles, language }) => {
    const depiction = Array.from({length: 6}, (_, index) => index + 1);
    const solutions = Array.from({length: 4}, (_, index) => index + 1);
    return (
        <div className={styles.container}>
            {language === 'en' && (
                <div id="englishContent">
                    <div className={styles.textCenter}>
                        <h1>Variables and Sets</h1>
                    </div>
                    <h2>Motivation</h2>
                    <p>Our routines involve the discernment of which ones are good decisions to get comfort or value. Imagine a day where you were working and studying so heavy in a way that you dont know what to do at night; see a movie with someone, a dinner with the family or simply sleep earlier?</p>
                    <p>Here we start to think about the world dividing it in variables and sets, here our sets are: activities that gives comfort or value. I like to see sharing time with loved ones as a decision to get value from others feeling their differences and their jokes but could not be so comfortable if the day had a tremendous workload, instead going to sleep earlier or to meditate gives the value of rest (to increase memory and creativity for the next day) and also gives comfort.</p>
                    <p>The variable could be: x is a symbol that means all the possible activities to do at night in your city. But sets are something special in a way that exist for a purpose: what to do after to be a beast on what you do for life. Besides of this simple explanation there exists a immense value that you could get modeling variables with sets and your desires, purposes, goals or imaginations. Imagine your work life being enhanced by the power of incredible decisions that saves big amounts of time: the unique treasure that humans have.</p>

                    <div className={styles.content}>
                        <h4>Key Concepts from "Variables and Sets"</h4>
                        <ul>
                            <li>
                                <strong>Variables in Mathematical Reasoning:</strong>
                                <ul>
                                    <li>Variables are symbols (like <span dangerouslySetInnerHTML={renderMath('x, y, z')} />) that stand for objects, which can be anything (numbers, points, features).</li>
                                    <li>In GIS, variables could represent spatial data points, attributes, or measurements, such as <span dangerouslySetInnerHTML={renderMath('P(x)')} />, where <span dangerouslySetInnerHTML={renderMath('x')} /> is a coordinate or an attribute (e.g., "elevation at point <span dangerouslySetInnerHTML={renderMath('x')} />").</li>
                                </ul>
                            </li>
                            <li>
                                <strong>Logical Representation:</strong>
                                <ul>
                                    <li>Statements involving variables can be combined using logical connectives (AND, OR, NOT).</li>
                                    <li>For example, if <span dangerouslySetInnerHTML={renderMath('P(x)')} /> denotes "Point <span dangerouslySetInnerHTML={renderMath('x')} /> lies within a certain boundary," and <span dangerouslySetInnerHTML={renderMath('Q(y)')} /> denotes "Elevation at <span dangerouslySetInnerHTML={renderMath('y')} /> exceeds 1000 meters," the combined statement <span dangerouslySetInnerHTML={renderMath('P(x) \\land Q(y)')} /> could represent points that meet both criteria.</li>
                                </ul>
                            </li>
                            <li>
                                <strong>Sets and Elementhood:</strong>
                                <ul>
                                    <li>A set is a collection of elements, useful for grouping data points, regions, or attributes.</li>
                                    <li>Notation: <span dangerouslySetInnerHTML={renderMath('A = \\{ x \\mid x \\text{ is a GPS point with accuracy } < 5m \\}')} />. Here, <span dangerouslySetInnerHTML={renderMath('A')} /> is a set of points meeting a specific accuracy criterion.</li>
                                    <li>Elementhood (<span dangerouslySetInnerHTML={renderMath('\\in')} />) tells us if an item is in a set. For instance, <span dangerouslySetInnerHTML={renderMath('7 \\in A')} /> would mean the point with ID 7 meets the accuracy requirement.</li>
                                </ul>
                            </li>
                            <li>
                                <strong>Truth Sets:</strong>
                                <ul>
                                    <li>A truth set consists of all values for which a statement is true. For GIS, this could be "All points within a designated survey area," represented by <span dangerouslySetInnerHTML={renderMath('\\{ x \\mid x \\text{ is within boundary } \\}')} />.</li>
                                    <li>Truth sets help in filtering and querying data, like finding all locations where a condition is satisfied (e.g., areas above a certain elevation).</li>
                                </ul>
                            </li>
                            <li>
                                <strong>Bound vs. Free Variables:</strong>
                                <ul>
                                    <li>Free variables stand for objects that the statement directly discusses (e.g., specific points on a map).</li>
                                    <li>Bound variables are placeholders in expressions defining sets (like a range of values or conditions), which are particularly useful when defining complex spatial relationships or constraints.</li>
                                </ul>
                            </li>
                        </ul>
                        <h4>Practical Examples for GIS:</h4>
                        <ul>
                            <li>
                                <strong>Spatial Query Example:</strong>
                                <ul>
                                    <li>Define a set <span dangerouslySetInnerHTML={renderMath('R = \\{ x \\in \\text{Area} \\mid x \\text{ is a land parcel} \\}')} />. To find parcels with a certain attribute, use: <span dangerouslySetInnerHTML={renderMath('R \\cap \\{ x \\mid \\text{Land Use} = \\text{Commercial} \\}')} />.</li>
                                </ul>
                            </li>
                            <li>
                                <strong>Set Operations:</strong>
                                <ul>
                                    <li>Intersection (<span dangerouslySetInnerHTML={renderMath('\\cap')} />): Identifies common elements. For example, <span dangerouslySetInnerHTML={renderMath('A \\cap B')} /> could be parcels that are both "for sale" and "zoned for commercial use."</li>
                                    <li>Union (<span dangerouslySetInnerHTML={renderMath('\\cup')} />): Combines elements from both sets, like all parcels that are either for sale or for lease.</li>
                                    <li>Difference (<span dangerouslySetInnerHTML={renderMath('A \\setminus B')} />): Elements in <span dangerouslySetInnerHTML={renderMath('A')} /> but not in <span dangerouslySetInnerHTML={renderMath('B')} />, such as parcels available for sale but not within a floodplain.</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <h2>My Depiction</h2>
                    {depiction.map((index, _) => (
                        <ImageWrapper src={`https://pub-bfd9ae1ad5904482b6c450dd36d126e9.r2.dev/1-3/${index}.jpeg`} alt={`My depiction ${index}`}/>
                    ))}
                    <h2>Deepening</h2>
                    <p>The chapter that I used to learn this is <a href='https://pub-a1db9c9fc4e947c8a68d875a60916f63.r2.dev/1-3/1-3.pdf'>HERE</a>, from the Daniels Velleman's book How to Prove It.</p>
                    <p>My solutions for most of the problems are:</p>
                </div>
            )}
            {language === 'es' && (
                <div id="spanishContent">
                    <div className={styles.textCenter}>
                        <h1>Variables y Conjuntos</h1>
                    </div>
                    <h2>Motivación</h2>
                    <p>Nuestras rutinas implican discernir cuáles son las mejores decisiones para obtener comodidad o valor. Imagina un día en el que trabajaste y estudiaste tanto que no sabes qué hacer por la noche; ¿ver una película con alguien, cenar con la familia o simplemente dormir más temprano?</p>
                    <p>Aquí comenzamos a pensar en el mundo dividiéndolo en variables y conjuntos, aquí nuestros conjuntos son: actividades que dan comodidad o valor. Me gusta ver compartir tiempo con seres queridos como una decisión para obtener valor de los demás sintiendo sus diferencias y sus bromas, pero podría no ser tan cómodo si el día tuvo una carga de trabajo tremenda, en cambio ir a dormir temprano o meditar da el valor del descanso (para aumentar la memoria y la creatividad para el día siguiente) y también da comodidad.</p>
                    <p>La variable podría ser: x es un símbolo que significa todas las posibles actividades para hacer por la noche en tu ciudad. Pero los conjuntos son algo especial en la forma en que existen para un propósito: qué hacer por la noche luego de romperla. Además de esta simple explicación, existe un valor inmenso que podrías obtener modelando variables con conjuntos y tus deseos, propósitos, metas o imaginaciones. Imagina tu vida laboral mejorada por el poder de decisiones increíbles que ahorran grandes cantidades de tiempo: el tesoro único que tienen los humanos.</p>

                    <div className={styles.content}>
                        <h4>Conceptos Clave de "Variables y Conjuntos"</h4>
                        <ul>
                            <li>
                                <strong>Variables en el Razonamiento Matemático:</strong>
                                <ul>
                                    <li>Las variables son símbolos (como <span dangerouslySetInnerHTML={renderMath('x, y, z')} />) que representan objetos, que pueden ser cualquier cosa (números, puntos, características).</li>
                                    <li>En SIG, las variables podrían representar puntos de datos espaciales, atributos o mediciones, como <span dangerouslySetInnerHTML={renderMath('P(x)')} />, donde <span dangerouslySetInnerHTML={renderMath('x')} /> es una coordenada o un atributo (por ejemplo, "elevación en el punto <span dangerouslySetInnerHTML={renderMath('x')} />").</li>
                                </ul>
                            </li>
                            <li>
                                <strong>Representación Lógica:</strong>
                                <ul>
                                    <li>Las declaraciones que involucran variables pueden combinarse usando conectivos lógicos (Y, O, NO).</li>
                                    <li>Por ejemplo, si <span dangerouslySetInnerHTML={renderMath('P(x)')} /> denota "El punto <span dangerouslySetInnerHTML={renderMath('x')} /> se encuentra dentro de un cierto límite," y <span dangerouslySetInnerHTML={renderMath('Q(y)')} /> denota "La elevación en <span dangerouslySetInnerHTML={renderMath('y')} /> supera los 1000 metros," la declaración combinada <span dangerouslySetInnerHTML={renderMath('P(x) \\land Q(y)')} /> podría representar puntos que cumplen con ambos criterios.</li>
                                </ul>
                            </li>
                            <li>
                                <strong>Conjuntos y Pertenencia:</strong>
                                <ul>
                                    <li>Un conjunto es una colección de elementos, útil para agrupar puntos de datos, regiones o atributos.</li>
                                    <li>Notación: <span dangerouslySetInnerHTML={renderMath('A = \\{ x \\mid x \\text{ es un punto GPS con precisión } < 5m \\}')} />. Aquí, <span dangerouslySetInnerHTML={renderMath('A')} /> es un conjunto de puntos que cumplen un criterio específico de precisión.</li>
                                    <li>La pertenencia (<span dangerouslySetInnerHTML={renderMath('\\in')} />) nos dice si un elemento está en un conjunto. Por ejemplo, <span dangerouslySetInnerHTML={renderMath('7 \\in A')} /> significaría que el punto con ID 7 cumple con el requisito de precisión.</li>
                                </ul>
                            </li>
                            <li>
                                <strong>Conjuntos de Verdad:</strong>
                                <ul>
                                    <li>Un conjunto de verdad consiste en todos los valores para los cuales una declaración es verdadera. Para SIG, esto podría ser "Todos los puntos dentro de un área de estudio designada," representado por <span dangerouslySetInnerHTML={renderMath('\\{ x \\mid x \\text{ está dentro del límite } \\}')} />.</li>
                                    <li>Los conjuntos de verdad ayudan a filtrar y consultar datos, como encontrar todas las ubicaciones donde se satisface una condición (por ejemplo, áreas por encima de una cierta elevación).</li>
                                </ul>
                            </li>
                            <li>
                                <strong>Variables Libres vs. Ligadas:</strong>
                                <ul>
                                    <li>Las variables libres representan objetos que la declaración discute directamente (por ejemplo, puntos específicos en un mapa).</li>
                                    <li>Las variables ligadas son marcadores de posición en expresiones que definen conjuntos (como un rango de valores o condiciones), que son particularmente útiles al definir relaciones espaciales complejas o restricciones.</li>
                                </ul>
                            </li>
                        </ul>
                        <h4>Ejemplos Prácticos para SIG:</h4>
                        <ul>
                            <li>
                                <strong>Ejemplo de Consulta Espacial:</strong>
                                <ul>
                                    <li>Define un conjunto <span dangerouslySetInnerHTML={renderMath('R = \\{ x \\in \\text{Área} \\mid x \\text{ es una parcela de tierra} \\}')} />. Para encontrar parcelas con un cierto atributo, usa: <span dangerouslySetInnerHTML={renderMath('R \\cap \\{ x \\mid \\text{Uso de Suelo} = \\text{Comercial} \\}')} />.</li>
                                </ul>
                            </li>
                            <li>
                                <strong>Operaciones con Conjuntos:</strong>
                                <ul>
                                    <li>Intersección (<span dangerouslySetInnerHTML={renderMath('\\cap')} />): Identifica elementos comunes. Por ejemplo, <span dangerouslySetInnerHTML={renderMath('A \\cap B')} /> podrían ser parcelas que están tanto "a la venta" como "zonificadas para uso comercial."</li>
                                    <li>Unión (<span dangerouslySetInnerHTML={renderMath('\\cup')} />): Combina elementos de ambos conjuntos, como todas las parcelas que están a la venta o en alquiler.</li>
                                    <li>Diferencia (<span dangerouslySetInnerHTML={renderMath('A \\setminus B')} />): Elementos en <span dangerouslySetInnerHTML={renderMath('A')} /> pero no en <span dangerouslySetInnerHTML={renderMath('B')} />, como parcelas disponibles para la venta pero que no están en una llanura de inundación.</li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    <h2>My Depiction</h2>
                    {depiction.map((index, _) => (
                        <ImageWrapper src={`https://pub-bfd9ae1ad5904482b6c450dd36d126e9.r2.dev/1-3/${index}.jpeg`} alt={`My depiction ${index}`}/>
                    ))}

                    <h2>Lo que pienso sobre esto</h2>
                    <ImageWrapper src={"https://pub-9d21c789c65640719683b20c684341f2.r2.dev/.jpeg"} alt={"Perspectiva"}/>
                    <h2>Profundización</h2>
                    <p>El capítulo con el que aprendí está <a href='https://pub-a1db9c9fc4e947c8a68d875a60916f63.r2.dev/1-3/1-3.pdf'>AQUÍ</a>, del libro How to Prove It de Daniel Velleman.</p>
                    <p>Mis soluciones para la mayoría de ejercicios:</p>

                </div>
            )}
            {solutions.map((solution, _) => (
                <ImageWrapper src={`https://pub-bfd9ae1ad5904482b6c450dd36d126e9.r2.dev/1-3/${solution}.jpeg`} alt={`Mi solución ${solution}`}/>
            ))}
        </div>
    );
};

export default LogicContent;
