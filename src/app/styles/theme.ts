import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html:root { 
    //BACKGROUND
    --main-background: hsl(120, 100%, 25%); /* Verde del fondo */
    --toggle-background: hsl(120, 90%, 30%); /* Verde ligeramente más claro */
    --screen-background:  hsl(120, 90%, 30%); /* Verde ligeramente más claro */
    //KEYS
    --key-background-dark-blue: hsl(120, 80%, 20%); /* Verde oscuro */
    --key-shadow-dark-blue: hsl(120, 70%, 35%); /* Verde un poco más claro */
    --key-background-red: hsl(0, 100%, 50%); /* Rojo puro */
    --key-shadow-dark-red: hsl(0, 100%, 70%); /* Rojo más claro */
    --key-background-orange: hsl(30, 100%, 50%); /* Naranja puro */
    --key-shadow-orange:hsl(30, 100%, 70%); /* Naranja más claro */
    //TEXT
    --very-dark-grayish-blue: hsl(0, 0%, 100%); /* Blanco */
    --white: #fff;
    --white-text: hsl(0, 0%, 100%); /* Blanco */
}
body{
    min-width: 100vw;
    min-height: 100vh;
    background-color: var(--main-background);
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Spartan', sans-serif;
}
`;

