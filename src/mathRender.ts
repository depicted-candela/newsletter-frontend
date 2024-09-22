import katex from 'katex';

const renderMath = (latex: string) => {
    try {
        return { __html: katex.renderToString(latex, { throwOnError: false }) };
    } catch (error) {
        console.error('KaTeX rendering error:', error);
        return { __html: latex };
    }
};

export default renderMath;