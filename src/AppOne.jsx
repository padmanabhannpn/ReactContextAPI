import React  from "react";
import ThemeProvider from "./ThemeProvider";
import ThemedComponent from "./ThemedCompoment";

function AppOne()
{
return(
    <ThemeProvider>
        <ThemedComponent />
    </ThemeProvider>
)
}

export default AppOne;