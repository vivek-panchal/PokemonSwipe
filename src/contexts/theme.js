import { createContext, useContext } from "react";


//a new context object with an initial value.
//mode define the current mode & other two functions for the toggle theme whenever mode change
export const ThemeContext = createContext({
    mode: "light",
    darkTheme: ()=> {},
    lightTheme: () => {}
})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme() {
    return useContext(ThemeContext)
}