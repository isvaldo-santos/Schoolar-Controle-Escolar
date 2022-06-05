import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`

    * {
        font-family: 'Poppins', sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        scroll-padding-top: 2rem;
        scroll-behavior: smooth;
    }

    :root {
        --text-color: #021f2a;
        --bg-color: #26a0da;
        --green: #5ce065;
    }

    /* Scroll customizado */
    html::-webkit-scrollbar {
        width: 0.5rem;
    }
    html::-webkit-scrollbar-thumb {
        background: transparent;
    }
    html::-webkit-scrollbar-track {
        background: var(--text-color);
        border-radius: 5rem;
    }


`;

export default Global;
