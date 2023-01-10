import styled from 'styled-components'

export const AboutWidget = styled.div`

    height: 300px;
    background-color: white;
    border-radius: 15px;
    padding: 5px;

    .about-heading {
        font-size: 40px;
        font-weight: 600;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 8px
    }

    hr {
        width: 65px;
        height: 5px;
        border-radius: 5px;
        background-color: #fd9a3d;
    }

    .about-body {

        font-size: 20px;
        padding: 0 15px;

        .arrow-icon {
            color: #ffc827;
            font-size: 45px;
        }
    }

    .about-learn-more {
        font-size: 15px;
        align-items: center;
        gap: 0.5em;
        padding: 0 15px;

        hr {
            width: 105px;
            height: 5px;
        }
    }

`