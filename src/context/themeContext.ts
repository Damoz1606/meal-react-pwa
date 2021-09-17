import { createContext } from "react";

interface Context {
    category?: string,
    name?: string
}

export const ThemeContext = createContext<Context>({});