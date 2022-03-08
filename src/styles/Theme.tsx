import { createContext, useContext } from "solid-js";
import { createTheme } from "./createTheme";
import { Theme } from "./types";

export const ThemeContext = createContext(createTheme({}));

export function useTheme() { 
    return useContext(ThemeContext);
}

export function ThemeProvider(props: { theme: any, children?: any }) {
    return (
        <ThemeContext.Provider value={props.theme}>
            {props.children}
        </ThemeContext.Provider>
    );
}