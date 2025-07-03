import React from "react";
import ThemeContext from "./ThemeContext";

function ThemedComponent()
{

    const {Theme,toggleTheme} = React.useContext(ThemeContext)

    return (

        <div style={{background: Theme === 'light' ? "#fff" : '#333',color : Theme === 'light' ? "#000" : '#fff' ,width : '100vh',height:'100vh'}}>

<p> Current Theme is {Theme}</p>

<button onClick={toggleTheme}> Change Theme</button>

        </div>
    )
}

export default ThemedComponent;