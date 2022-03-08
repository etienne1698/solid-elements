import { CSSObject } from "@emotion/css";

export interface ColorSet {
    main?: string;
    light?: string;
    dark?: string;
    contrastText?: string;
}


export interface Palette {
    primary?: ColorSet;
    secondary?: ColorSet;
    error?: ColorSet;
    warning?: ColorSet;
    success?: ColorSet;
    info?: ColorSet;
    text?: {
        default?: string;
        disabled?: string;
    }
    background?: {
        default?: string;
        paper?: string;
    };
    divider?: string;

}

//export type Typography = CSSObject;

export interface Typography {
    fontSize?: string,
    fontWeight?: Number,
    lineHeight?: Number,
    letterSpacing?: Number;
    textTransform?: string;
}

export interface Typographies {
    h1?: Typography;
    h2?: Typography;
    h3?: Typography;
    h4?: Typography;
    h5?: Typography;
    h6?: Typography;
    body1?: Typography;
    body2?: Typography;
    strong?: Typography;
    subtitle1?: Typography;
    subtitle2?: Typography;
    button?: Typography;
    label?: Typography;
}


export interface Theme {
    palette?: Palette;
    spacing?: Number; // ${theme?.spacing * ...}px
    typography?: Typographies;

}