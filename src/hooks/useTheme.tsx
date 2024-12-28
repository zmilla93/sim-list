
import { useEffect, useState } from "react";

// Handles swapping between light and dark themes
let darkTheme = false;
let codeWriterEnabled = false;
// FIXME : any
let codeWriterCSSLight: any;
let codeWriterCSSDark: any;
const DARK = "dark";
const LIGHT = "light";
const THEME = "theme";

export function useTheme() {
    const [isDark, setIsDark] = useState(document.documentElement.dataset.theme == DARK);
    useEffect(() => {
        preloadPreferredTheme();
        init();
    }, []);
    function toggleTheme() {
        const newTheme = isDark ? LIGHT : DARK;
        setIsDark(newTheme == DARK);
        console.log(newTheme);
        localStorage.setItem(THEME, newTheme);
        document.documentElement.dataset.theme = newTheme;
    }
    return toggleTheme;
}

// export function useThemeSwitchButton() {
//     function handleClick() {

//     }
//     return (
//         <span onClick={handleClick}>
//             THEME
//         </span>
//     );
// }

// FIXME : If this causes flickering, try moving to bottom of file instead of on mount
function preloadPreferredTheme() {
    let currentTheme = localStorage.getItem(THEME);
    if (currentTheme == null) {
        const osThemeDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        currentTheme = osThemeDark ? DARK : LIGHT;
        localStorage.setItem(THEME, currentTheme);
    }
    darkTheme = currentTheme == DARK;
    document.documentElement.dataset.theme = currentTheme;
    console.log("preloaded theme: " + currentTheme);
}

function init() {
    // FIXME
    const themeButton = document.getElementById("themeSwitchButton");
    themeButton!.onclick = toggleTheme;
    codeWriterCSSLight = document.getElementById("codeWriterCSSLight");
    codeWriterCSSDark = document.getElementById("codeWriterCSSDark");
    codeWriterEnabled = codeWriterCSSLight != undefined;
    if (codeWriterEnabled) {
        if (darkTheme) codeWriterCSSLight.disabled = true;
        else codeWriterCSSDark.disabled = true;
    }
    console.log("theme-switcher initialized.");
}

function toggleTheme() {
    darkTheme = !darkTheme;
    const newTheme = darkTheme ? DARK : LIGHT;
    document.documentElement.dataset.theme = newTheme;
    localStorage.setItem(THEME, newTheme);
    console.log("theme switched to: " + newTheme);
}

function clearLocalTheme() {
    localStorage.removeItem(THEME);
}