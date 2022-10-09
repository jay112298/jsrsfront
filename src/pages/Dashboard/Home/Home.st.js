import styled from "styled-components";

export const Container = styled.div`
    grid-area: c;
    display: grid;
    background-color: #88d8b0;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    grid-auto-rows: 151px;

    & > div {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #ff6f69;
        font-size: 2em;
        color: #ffeead;
    }
    
    @media (max-width: 1400px) {
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        grid-auto-rows: 151px;
    }
`