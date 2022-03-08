import { createStore } from "solid-js/store";
import { DEFAULT_THEME } from "./defaultTheme";
import { Theme } from "./types";

export function createTheme(t: Theme) {
    const themeStore = createStore<Theme>(DEFAULT_THEME);
    themeStore[1](t);
    return themeStore;
}
