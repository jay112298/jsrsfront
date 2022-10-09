import styled from "styled-components";

export const Wrapper = styled.div`
    height: 84vh;
    margin: 10px;
    display: grid;
    grid-gap: 5px;
    grid-template-columns: repeat(12, 1fr);
    grid-auto-rows: 100px auto 100px;
    grid-template-areas: 
        "m m c c c c c c c c c c"
        "m m c c c c c c c c c c"
        "m m t t t t t t t t t t";


    /* & > div {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2em;
        color: #ffeead;
    } */
    

    .content {
        background-color: #88d8b0;
        grid-area: c;
        font-size: 3em;
        color: #ffeead;
    }

    .menu {
        background-color: #ff6f69;
        grid-area: m;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        font-size: 2em;
        color: #ffeead;

        .child:hover {
            background-color: #ffeead;
            color: #b7b7b7;
        }
    }

    .menu > div {
        border: 2px solid #ffeead;
        padding: 2rem 0;
        display: flex;
        justify-content: center;
        width: 20rem;
        transition: 650ms ease-in-out;
    }

    

    .sidebar {
        background-color: #ff6f69;
        grid-area: s;
    }

    .content2 {
        background-color: #ffcc5c;
        grid-area: t;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2em;
        color: #ffeead;
    }

    
    @media (max-width: 1300px) {
        .menu {
            font-size: 2em;
        }
    }
    @media (max-width: 1300px) {
        .menu {
            font-size: 2em;
        }
    }
`;