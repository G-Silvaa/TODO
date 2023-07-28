import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

body{
    background-color: #333;
}

a{
    text-decoration: none;
    color: inherit;
}

button, a{
    cursor: poiter;
    transition: filter 0.2s;
 }

    button:hover a:hover {
    filter: brightness(0.9);
 }

 



`