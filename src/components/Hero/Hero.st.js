import styled from 'styled-components'

export const Section = styled.div`
    /* background: linear-gradient(90deg, #EFEEEE 0%, rgba(237, 236, 236, 0.885417) 36.98%, rgba(240, 240, 240, 0) 69.79%); */
    background: linear-gradient(to right, #F5E3E6, #D9E4F5);
    display: flex;
    align-items: center;
    height: 650px;

    .left {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 250px;
        background: rgba(189, 83, 48,0.6);

        div {
            margin: 0 15px
        }

        .title {
            font-size: 46px;
        }

        .tagline {
            font-size: 15px;
        }
    }

    .right{
        height: 650px;
        width: 100%;
        flex: 2;
        background: #EFB881;
        border-bottom-left-radius: 60px;
        overflow: hidden;
        img {
            height: 650px;
            object-fit: fill;
        }
    }

`