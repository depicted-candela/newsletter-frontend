// LogicContent.tsx
import React from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';
import ImageWrapper from '../components/ImageWrapper';

type Styles = {
    [className: string]: string;
};

interface LogicContentProps {
    styles: Styles;
    globalStyles: Styles;
    language: string;
}

// Function to safely render math expressions using KaTeX
const renderMath = (latex: string) => {
    try {
        return { __html: katex.renderToString(latex, { throwOnError: false }) };
    } catch (error) {
        console.error('KaTeX rendering error:', error);
        return { __html: latex };
    }
};

const LogicContent: React.FC<LogicContentProps> = ({ styles, language }) => {
    const images = Array.from({length: 24}, (_, index) => index + 1);
    return (
        <div className={styles.container}>
            {language === 'en' && (
                <div id="englishContent">
                    <div className={styles.textCenter}>
                        <h1>Sentential Logic: Understanding Deductive Reasoning and Logical Connectives</h1>
                    </div>
                    <h2>What is Deductive Reasoning?</h2>
                    <p>
                        Deductive reasoning is a logical process where a conclusion is reached based on premises (statements) that are assumed to be true.
                        An argument is considered valid if it is impossible for all the premises to be true while the conclusion is false.
                    </p>

                    <h3>Examples of Deductive Reasoning</h3>

                    <div className={styles.content}>
                        <h4>Example 1:</h4>
                        <ul>
                            <li>Premise 1: <span dangerouslySetInnerHTML={renderMath('P')} /> - It will rain tomorrow.</li>
                            <li>Premise 2: <span dangerouslySetInnerHTML={renderMath('Q')} /> - It will snow tomorrow.</li>
                            <li>Combined Premise: <span dangerouslySetInnerHTML={renderMath('P \\lor Q')} /> - Either it will rain or snow tomorrow.</li>
                            <li>Premise 3: It’s too warm for snow (<span dangerouslySetInnerHTML={renderMath('\\neg Q')} />).</li>
                            <li>Conclusion: Therefore, it will rain (<span dangerouslySetInnerHTML={renderMath('P')} />).</li>
                        </ul>
                    </div>

                    <div className={styles.content}>
                        <h4>Example 2:</h4>
                        <ul>
                            <li>Premise 1: <span dangerouslySetInnerHTML={renderMath('P')} /> - Today is Sunday.</li>
                            <li>Premise 2: <span dangerouslySetInnerHTML={renderMath('Q')} /> - I don’t have to go to work today.</li>
                            <li>Combined Premise: If today is Sunday (<span dangerouslySetInnerHTML={renderMath('P')} />), then I don’t have to go to work today (<span dangerouslySetInnerHTML={renderMath('Q')} />).</li>
                            <li>Premise 3: Today is Sunday (<span dangerouslySetInnerHTML={renderMath('P')} />).</li>
                            <li>Conclusion: Therefore, I don’t have to go to work today (<span dangerouslySetInnerHTML={renderMath('Q')} />).</li>
                        </ul>
                    </div>

                    <div className={styles.content}>
                        <h4>Example 3:</h4>
                        <ul>
                            <li>Premise 1: <span dangerouslySetInnerHTML={renderMath('P')} /> - I will go to work tomorrow.</li>
                            <li>Premise 2: <span dangerouslySetInnerHTML={renderMath('Q')} /> - I will go to work today.</li>
                            <li>Combined Premise: I will go to work either tomorrow or today (<span dangerouslySetInnerHTML={renderMath('P \\lor Q')} />).</li>
                            <li>Premise 3: I’m staying home today (<span dangerouslySetInnerHTML={renderMath('\\neg Q')} />).</li>
                            <li>Conclusion: Therefore, I will go to work tomorrow (<span dangerouslySetInnerHTML={renderMath('P')} />).</li>
                        </ul>
                    </div>

                    <h3>Definition of Validity</h3>
                    <p>
                        An argument is valid if the premises cannot all be true without the conclusion also being true. In the examples above, all arguments are valid.
                    </p>

                    <h3>Invalid Deductive Argument Example:</h3>
                        <ul>
                            <li>Premise 1: <span dangerouslySetInnerHTML={renderMath('P')} /> - The butler is guilty.</li>
                            <li>Premise 2: <span dangerouslySetInnerHTML={renderMath('Q')} /> - The maid is guilty.</li>
                            <li>Premise 3: <span dangerouslySetInnerHTML={renderMath('R')} /> - The cook is guilty.</li>
                            <li>Combined Premises: Either the butler is guilty or the maid is guilty (<span dangerouslySetInnerHTML={renderMath('P \\lor Q')} />), and either the maid is guilty or the cook is guilty (<span dangerouslySetInnerHTML={renderMath('Q \\lor R')} />).</li>
                            <li>Conclusion: Therefore, either the butler is guilty or the cook is guilty (<span dangerouslySetInnerHTML={renderMath('P \\lor R')} />).</li>
                        </ul>
                    <p>
                        <b>Why it’s Invalid:</b> It’s possible for all premises to be true, but the conclusion false (e.g., if the maid is the only guilty party).
                    </p>

                    <h2>Logical Connectives and Their Symbols</h2>
                    <div className={styles.content}>
                        <h4>Or (Disjunction):</h4>
                        <ul>
                            <li>Symbol: <span dangerouslySetInnerHTML={renderMath('\\lor')} /></li>
                            <li>Meaning: <span dangerouslySetInnerHTML={renderMath('P \\lor Q')} /> is true if at least one of <span dangerouslySetInnerHTML={renderMath('P')} /> or <span dangerouslySetInnerHTML={renderMath('Q')} /> is true.</li>
                        </ul>

                        <h4>And (Conjunction):</h4>
                        <ul>
                            <li>Symbol: <span dangerouslySetInnerHTML={renderMath('\\land')} /></li>
                            <li>Meaning: <span dangerouslySetInnerHTML={renderMath('P \\land Q')} /> is true only if both <span dangerouslySetInnerHTML={renderMath('P')} /> and <span dangerouslySetInnerHTML={renderMath('Q')} /> are true.</li>
                        </ul>

                        <h4>Not (Negation):</h4>
                        <ul>
                            <li>Symbol: <span dangerouslySetInnerHTML={renderMath('\\neg')} /></li>
                            <li>Meaning: <span dangerouslySetInnerHTML={renderMath('\\neg P')} /> is true if <span dangerouslySetInnerHTML={renderMath('P')} /> is false.</li>
                        </ul>
                    </div>

                    <h3>Examples of Logical Forms</h3>
                    <ul>
                        <li>Statement: "Either John went to the store, or we’re out of eggs." Logical Form: <span dangerouslySetInnerHTML={renderMath('P \\lor Q')} />, where <span dangerouslySetInnerHTML={renderMath('P')} /> is "John went to the store" and <span dangerouslySetInnerHTML={renderMath('Q')} /> is "We’re out of eggs."</li>
                        <li>Statement: "Joe is going to leave home and not come back." Logical Form: <span dangerouslySetInnerHTML={renderMath('P \\land \\neg R')} />, where <span dangerouslySetInnerHTML={renderMath('P')} /> is "Joe is going to leave home" and <span dangerouslySetInnerHTML={renderMath('R')} /> is "Joe is going to come back."</li>
                        <li>Statement: "Either Bill is at work and Jane isn’t, or Jane is at work and Bill isn’t." Logical Form: <span dangerouslySetInnerHTML={renderMath('(B \\land \\neg J) \\lor (J \\land \\neg B)')} />, where <span dangerouslySetInnerHTML={renderMath('B')} /> is "Bill is at work" and <span dangerouslySetInnerHTML={renderMath('J')} /> is "Jane is at work."</li>
                    </ul>

                    <h3>Truth Tables for Logical Connectives</h3>
                    <div className={styles.content}>
                        <h4>Conjunction (<span dangerouslySetInnerHTML={renderMath('P \\land Q')} />) Truth Table:</h4>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>P</th>
                                    <th>Q</th>
                                    <th><span dangerouslySetInnerHTML={renderMath('P \\land Q')} /></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>T</td>
                                    <td>T</td>
                                    <td>T</td>
                                </tr>
                                <tr>
                                    <td>T</td>
                                    <td>F</td>
                                    <td>F</td>
                                </tr>
                                <tr>
                                    <td>F</td>
                                    <td>T</td>
                                    <td>F</td>
                                </tr>
                                <tr>
                                    <td>F</td>
                                    <td>F</td>
                                    <td>F</td>
                                </tr>
                            </tbody>
                        </table>

                        <h4>Disjunction (<span dangerouslySetInnerHTML={renderMath('P \\lor Q')} />) Truth Table:</h4>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>P</th>
                                    <th>Q</th>
                                    <th><span dangerouslySetInnerHTML={renderMath('P \\lor Q')} /></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>T</td>
                                    <td>T</td>
                                    <td>T</td>
                                </tr>
                                <tr>
                                    <td>T</td>
                                    <td>F</td>
                                    <td>T</td>
                                </tr>
                                <tr>
                                    <td>F</td>
                                    <td>T</td>
                                    <td>T</td>
                                </tr>
                                <tr>
                                    <td>F</td>
                                    <td>F</td>
                                    <td>F</td>
                                </tr>
                            </tbody>
                        </table>

                        <h4>Negation (<span dangerouslySetInnerHTML={renderMath('\\neg P')} />) Truth Table:</h4>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>P</th>
                                    <th><span dangerouslySetInnerHTML={renderMath('\\neg P')} /></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>T</td>
                                    <td>F</td>
                                </tr>
                                <tr>
                                    <td>F</td>
                                    <td>T</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <h2>My Depiction</h2>
                    <ImageWrapper src={"https://pub-9d21c789c65640719683b20c684341f2.r2.dev/sententialLogic.jpeg"} alt={"My depiction"}/>
                    <h2>Deepening</h2>
                    <p>The chapter that I used to learn this is <a href='https://pub-a1db9c9fc4e947c8a68d875a60916f63.r2.dev/chapter1.pdf'>HERE</a>, from the Daniels Velleman's book How to Prove It.</p>
                    <p>My solutions for most of the problems are:</p>
                </div>
            )}
        {language === 'es' && (
                <div id="spanishContent">
                    <div className={styles.textCenter}>
                        <h1>Lógica Sentencial: Comprendiendo el Razonamiento Deductivo y los Conectivos Lógicos</h1>
                    </div>
                    <h2>¿Qué es el Razonamiento Deductivo?</h2>
                    <p>
                        El razonamiento deductivo es un proceso lógico donde se llega a una conclusión basada en premisas (enunciados) que se asumen como verdaderas.
                        Un argumento se considera válido si es imposible que todas las premisas sean verdaderas mientras la conclusión es falsa.
                    </p>

                    <h3>Ejemplos de Razonamiento Deductivo</h3>

                    <div className={styles.content}>
                        <h4>Ejemplo 1:</h4>
                        <ul>
                            <li>Premisa 1: <span dangerouslySetInnerHTML={renderMath('P')} /> - Lloverá mañana.</li>
                            <li>Premisa 2: <span dangerouslySetInnerHTML={renderMath('Q')} /> - Nevará mañana.</li>
                            <li>Premisa Combinada: <span dangerouslySetInnerHTML={renderMath('P \\lor Q')} /> - O lloverá o nevará mañana.</li>
                            <li>Premisa 3: Hace demasiado calor para nevar (<span dangerouslySetInnerHTML={renderMath('\\neg Q')} />).</li>
                            <li>Conclusión: Por lo tanto, lloverá (<span dangerouslySetInnerHTML={renderMath('P')} />).</li>
                        </ul>
                    </div>

                    <div className={styles.content}>
                        <h4>Ejemplo 2:</h4>
                        <ul>
                            <li>Premisa 1: <span dangerouslySetInnerHTML={renderMath('P')} /> - Hoy es domingo.</li>
                            <li>Premisa 2: <span dangerouslySetInnerHTML={renderMath('Q')} /> - No tengo que ir a trabajar hoy.</li>
                            <li>Premisa Combinada: Si hoy es domingo (<span dangerouslySetInnerHTML={renderMath('P')} />), entonces no tengo que ir a trabajar hoy (<span dangerouslySetInnerHTML={renderMath('Q')} />).</li>
                            <li>Premisa 3: Hoy es domingo (<span dangerouslySetInnerHTML={renderMath('P')} />).</li>
                            <li>Conclusión: Por lo tanto, no tengo que ir a trabajar hoy (<span dangerouslySetInnerHTML={renderMath('Q')} />).</li>
                        </ul>
                    </div>

                    <div className={styles.content}>
                        <h4>Ejemplo 3:</h4>
                        <ul>
                            <li>Premisa 1: <span dangerouslySetInnerHTML={renderMath('P')} /> - Iré a trabajar mañana.</li>
                            <li>Premisa 2: <span dangerouslySetInnerHTML={renderMath('Q')} /> - Iré a trabajar hoy.</li>
                            <li>Premisa Combinada: Iré a trabajar mañana o hoy (<span dangerouslySetInnerHTML={renderMath('P \\lor Q')} />).</li>
                            <li>Premisa 3: Me quedaré en casa hoy (<span dangerouslySetInnerHTML={renderMath('\\neg Q')} />).</li>
                            <li>Conclusión: Por lo tanto, iré a trabajar mañana (<span dangerouslySetInnerHTML={renderMath('P')} />).</li>
                        </ul>
                    </div>

                    <h3>Definición de Validez</h3>
                    <p>
                        Un argumento es válido si las premisas no pueden ser todas verdaderas sin que la conclusión también sea verdadera. En los ejemplos anteriores, todos los argumentos son válidos.
                    </p>

                    <h3>Ejemplo de Argumento Deductivo Inválido:</h3>
                    <ul>
                        <li>Premisa 1: <span dangerouslySetInnerHTML={renderMath('P')} /> - El mayordomo es culpable.</li>
                        <li>Premisa 2: <span dangerouslySetInnerHTML={renderMath('Q')} /> - La criada es culpable.</li>
                        <li>Premisa 3: <span dangerouslySetInnerHTML={renderMath('R')} /> - El cocinero es culpable.</li>
                        <li>Premisas Combinadas: O el mayordomo es culpable o la criada es culpable (<span dangerouslySetInnerHTML={renderMath('P \\lor Q')} />), y o la criada es culpable o el cocinero es culpable (<span dangerouslySetInnerHTML={renderMath('Q \\lor R')} />).</li>
                        <li>Conclusión: Por lo tanto, o el mayordomo es culpable o el cocinero es culpable (<span dangerouslySetInnerHTML={renderMath('P \\lor R')} />).</li>
                    </ul>
                    <p>
                        <b>¿Por qué es Inválido?:</b> Es posible que todas las premisas sean verdaderas, pero la conclusión sea falsa (por ejemplo, si la criada es la única culpable).
                    </p>

                    <h2>Conectivos Lógicos y Sus Símbolos</h2>
                    <div className={styles.content}>
                        <h4>O (Disyunción):</h4>
                        <ul>
                            <li>Símbolo: <span dangerouslySetInnerHTML={renderMath('\\lor')} /></li>
                            <li>Significado: <span dangerouslySetInnerHTML={renderMath('P \\lor Q')} /> es verdadero si al menos uno de <span dangerouslySetInnerHTML={renderMath('P')} /> o <span dangerouslySetInnerHTML={renderMath('Q')} /> es verdadero.</li>
                        </ul>

                        <h4>Y (Conjunción):</h4>
                        <ul>
                            <li>Símbolo: <span dangerouslySetInnerHTML={renderMath('\\land')} /></li>
                            <li>Significado: <span dangerouslySetInnerHTML={renderMath('P \\land Q')} /> es verdadero solo si tanto <span dangerouslySetInnerHTML={renderMath('P')} /> como <span dangerouslySetInnerHTML={renderMath('Q')} /> son verdaderos.</li>
                        </ul>

                        <h4>No (Negación):</h4>
                        <ul>
                            <li>Símbolo: <span dangerouslySetInnerHTML={renderMath('\\neg')} /></li>
                            <li>Significado: <span dangerouslySetInnerHTML={renderMath('\\neg P')} /> es verdadero si <span dangerouslySetInnerHTML={renderMath('P')} /> es falso.</li>
                        </ul>
                    </div>

                    <h3>Ejemplos de Formas Lógicas</h3>
                    <ul>
                        <li>Enunciado: "O Juan fue a la tienda, o no tenemos huevos." Forma Lógica: <span dangerouslySetInnerHTML={renderMath('P \\lor Q')} />, donde <span dangerouslySetInnerHTML={renderMath('P')} /> es "Juan fue a la tienda" y <span dangerouslySetInnerHTML={renderMath('Q')} /> es "No tenemos huevos."</li>
                        <li>Enunciado: "Joe se va a ir de casa y no va a volver." Forma Lógica: <span dangerouslySetInnerHTML={renderMath('P \\land \\neg R')} />, donde <span dangerouslySetInnerHTML={renderMath('P')} /> es "Joe se va a ir de casa" y <span dangerouslySetInnerHTML={renderMath('R')} /> es "Joe va a volver."</li>
                        <li>Enunciado: "O Bill está en el trabajo y Jane no, o Jane está en el trabajo y Bill no." Forma Lógica: <span dangerouslySetInnerHTML={renderMath('(B \\land \\neg J) \\lor (J \\land \\neg B)')} />, donde <span dangerouslySetInnerHTML={renderMath('B')} /> es "Bill está en el trabajo" y <span dangerouslySetInnerHTML={renderMath('J')} /> es "Jane está en el trabajo."</li>
                    </ul>

                    <h3>Tablas de Verdad para los Conectivos Lógicos</h3>
                    <div className={styles.content}>
                        <h4>Conjunción (<span dangerouslySetInnerHTML={renderMath('P \\land Q')} />) Tabla de Verdad:</h4>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>P</th>
                                    <th>Q</th>
                                    <th><span dangerouslySetInnerHTML={renderMath('P \\land Q')} /></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>V</td>
                                    <td>V</td>
                                    <td>V</td>
                                </tr>
                                <tr>
                                    <td>V</td>
                                    <td>F</td>
                                    <td>F</td>
                                </tr>
                                <tr>
                                    <td>F</td>
                                    <td>V</td>
                                    <td>F</td>
                                </tr>
                                <tr>
                                    <td>F</td>
                                    <td>F</td>
                                    <td>F</td>
                                </tr>
                            </tbody>
                        </table>

                        <h4>Disyunción (<span dangerouslySetInnerHTML={renderMath('P \\lor Q')} />) Tabla de Verdad:</h4>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>P</th>
                                    <th>Q</th>
                                    <th><span dangerouslySetInnerHTML={renderMath('P \\lor Q')} /></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>V</td>
                                    <td>V</td>
                                    <td>V</td>
                                </tr>
                                <tr>
                                    <td>V</td>
                                    <td>F</td>
                                    <td>V</td>
                                </tr>
                                <tr>
                                    <td>F</td>
                                    <td>V</td>
                                    <td>V</td>
                                </tr>
                                <tr>
                                    <td>F</td>
                                    <td>F</td>
                                    <td>F</td>
                                </tr>
                            </tbody>
                        </table>

                        <h4>Negación (<span dangerouslySetInnerHTML={renderMath('\\neg P')} />) Tabla de Verdad:</h4>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>P</th>
                                    <th><span dangerouslySetInnerHTML={renderMath('\\neg P')} /></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>V</td>
                                    <td>F</td>
                                </tr>
                                <tr>
                                    <td>F</td>
                                    <td>V</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h2>Lo que pienso sobre esto</h2>
                    <ImageWrapper src={"https://pub-9d21c789c65640719683b20c684341f2.r2.dev/sententialLogic.jpeg"} alt={"Perspectiva"}/>
                    <h2>Profundización</h2>
                    <p>El capítulo con el que aprendí está <a href='https://pub-a1db9c9fc4e947c8a68d875a60916f63.r2.dev/chapter1.pdf'>AQUÍ</a>, del libro How to Prove It de Daniel Velleman.</p>
                    <p>Mis soluciones para la mayoría de ejercicios:</p>
                    
                </div>
            )}
            {images.map((image, _) => (
                <ImageWrapper src={`https://pub-9d21c789c65640719683b20c684341f2.r2.dev/${image}.jpeg`} alt={`Mi solución ${image}`}/>
            ))}
        </div>
    );
};

export default LogicContent;
