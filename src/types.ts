export type Styles = {
    [className: string]: string;
};

interface ComponentImp {
    styles: Styles;
    globalStyles: Styles;
    language: string;
}

export default ComponentImp;