import React, { useState }  from "react";
import ThemeContext from "./ThemeContext";

function ThemeProvider({children})
{
    const[Theme,setTheme] = useState('dart')


    const toggleTheme = () =>
    {
        setTheme((prev) => (prev === 'light' ? 'dart':'light'))
    }

    return (

        <ThemeContext.Provider value={{Theme,toggleTheme}}>

            {children}

        </ThemeContext.Provider>

    )
}

export default ThemeProvider;