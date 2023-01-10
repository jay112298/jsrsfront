import styled from 'styled-components'

export const BodyBox = styled.article`
    display: flex;
    .widgets {
        padding-top: 50px;
        width: 100%;
        flex: 3;
        background: linear-gradient(to right, #edeceb, #efeeee, #efeeef, #f0efee, #f0f0f0);
        display: grid;
        gap: 15px;
        align-items: center;
        justify-content: center;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(3, 1fr);

        .widget-box-4 {
            grid-row: 2 / 4;
        }

    }

    

    .sidebar {
        padding-top: 50px;
        width: 100%;
        flex: 1;
        background: linear-gradient(to right, #eacaa2, #ebcca4, #eccba3, #edcba5);
    }

`