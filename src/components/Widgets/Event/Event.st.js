import styled from 'styled-components'

export const EventWidget = styled.div`

    .box1-top {
        background-color: #feb86d;
        margin-top: 15px;
        margin-left: 15px;
        padding: 5px 0;
        border-radius: 10px;
        font-size: 25px;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;

    }
    .box1-bottom {
        margin-top: 15px;
        margin-left: 15px;
        height: 250px;
        padding: 15px;
        background-color: #feb86d;
        border-radius: 5px;
        font-size: 15px;
        color: #fff;

        .date {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 2px 0;
        }

        .cover {
            height: 150px;
            overflow: hidden;
            border-radius: 8px;
            img {
                object-fit: scale-down;
            }
        }

        .event-name {
            text-align: center;
            letter-spacing: 0.08em;
        }

        .venue {
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }


`