import { Theme } from "./types";

export const DEFAULT_THEME: Theme = {
    palette: {
        text: {
            default: 'black',
            disabled: 'rgba(0, 0, 0, 0.38)',
        },
        divider: "#E7EBF0",
        background: {
            default: "rgb(231, 235, 240)",
            paper: "#fff"
        },
        primary: {
            dark: "#0059B2",
            light: "#66B2FF",
            main: "#007FFF",
            contrastText: "#fff"
        },
        secondary: {
            contrastText: "#fff",
            dark: "#7b1fa2",
            light: "#ba68c8",
            main: "#9c27b0",
        },
        error: {
            contrastText: "#fff",
            dark: "#C70011",
            light: "#FF99A2",
            main: "#EB0014",
        },
        warning: {
            contrastText: "#fff",
            dark: "#AB6800",
            light: "#FFDC48",
            main: "#DEA500",
        },
        success: {
            contrastText: "#fff",
            dark: "#1AA251",
            light: "#6AE79C",
            main: "#1AA251",
        },
        info: {
            contrastText: "#fff",
            dark: "#01579b",
            light: "#03a9f4",
            main: "#0288d1",
        }
    },
    spacing: 8,
    typography: {
        h1: {
            fontSize: "clamp(2.625rem, 1.2857rem + 3.5714vw, 4rem)",
            fontWeight: 800,
            lineHeight: 1.1142857142857143,
        },
        h2: {
            fontSize: "clamp(1.5rem, 0.9643rem + 1.4286vw, 2.25rem)",
            fontWeight: 800,
            lineHeight: 1.2222222222222223,
        },
        h3: {
            fontSize: "2.25rem",
            lineHeight: 1.2222222222222223,
            letterSpacing: 0.2,
            fontWeight: 400
        },
        h4: {
            fontSize: "1.75rem",
            lineHeight: 1.5,
            letterSpacing: 0.2,
            fontWeight: 400
        },
        h5: {
            fontSize: "1.5rem",
            lineHeight: 1.5,
            letterSpacing: 0.1,
            fontWeight: 400
        },
        h6: {
            fontSize: "1.25rem",
            lineHeight: 1.5,
            fontWeight: 500
        },
        button: {
            textTransform: "initial",
            fontWeight: 700,
            letterSpacing: 0,
            fontSize: "0.875rem",
            lineHeight: 1.75
        },
        subtitle1: {
            fontSize: "1.125rem",
            lineHeight: 1.3333333333333333,
            letterSpacing: 0,
            fontWeight: 500,
        },
        body1: {
            fontSize: "1rem",
            lineHeight: 1.5,
            letterSpacing: 0,
            fontWeight: 400
        },
        body2: {
            fontSize: "0.875rem",
            lineHeight: 1.5,
            letterSpacing: 0,
            fontWeight: 400
        },
        subtitle2: {
            fontWeight: 500,
            fontSize: "0.875rem",
            lineHeight: 1.57
        },
        label: {
            fontSize: "1rem",
            lineHeight: 1.5,
            letterSpacing: 0,
            fontWeight: 650
        }
    }
}

