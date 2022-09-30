import styled from "styled-components";
import Bow from "../../assets/bow.png";
import BowMob from "../../assets/bow-mob.png";


export const Section = styled.section`
    background-color: #b7b7b7;
    background-image: url(${Bow});
    background-size: 100% 100%;

    width: 100vw;
    height: 66.66vw;

    div {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      position: relative;
      top: 20rem;
      left: 10rem;
      width: 50rem;
      height: 50rem;
      background-color: #fec627;
      opacity: 0.5;
      align-items: center;
    }
    div > p {
      font-size: 5rem;
      padding: 4rem 4rem;
      font-weight: bold;
    }
    button {
      background-color: rgb(133, 185, 250);
      border: none;
      padding: 2rem 4rem;
      font-size: 2.5rem;
      border-radius: 20px;
      display: inline-block;
      opacity: 1;
    }

    @media screen and (max-width: 1300px) {
      div {

        top: 15rem;
        left: 10rem;
        width: 40rem;
        height: 40rem;
        background-color: #fec627;
        opacity: 0.5;
        align-items: center;
      }
      div > p {
        font-size: 4.3rem;
        padding: 3rem 3rem;
        font-weight: bold;
      }
      button {
        padding: 1.5rem 3rem;
        font-size: 2.5rem;
        border-radius: 20px;
        display: inline-block;
        opacity: 1;
      }
      button:hover {
      }
    }
    @media screen and (max-width: 980px) {
      background-image: url(${BowMob});
      width: 100vw;
      height: 118vw;
      div {

        top: 5rem;
        left: 5rem;
        width: 30rem;
        height: 30rem;
        background-color: #fec627;
        opacity: 0.5;
        align-items: center;
      }
      div > p {
        font-size: 3rem;
      }
      button {
        padding: 1rem 2rem;
        font-size: 1.5rem;
      }
    }
  `;