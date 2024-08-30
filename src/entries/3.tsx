// LogicContent.tsx
import React from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';

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
                </div>
            )}
        </div>
    );
};

export default LogicContent;
