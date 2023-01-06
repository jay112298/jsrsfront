import styled from "styled-components";



export const Section = styled.section`
    background-color: #b7b7b7;
    background-image: url("https://ik.imagekit.io/jsrsngp/bow_jyqWefWhG.png");
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
      border-radius: 15px;
      display: inline-block;
      opacity: 1;
      box-shadow: -3px 3px 2px gray, 1px 3px 2px gray;
      transition: 500ms ease-out;
    }

    button:hover {
      box-shadow: none;
      transform: translate(-5px, 2px);
      /* transform: translateX(-40px); */

    }

    @media screen and (max-width: 1300px) {
      div {

        top: 15rem;
        left: 10rem;
        width: 40rem;
        height: 40rem;

      }
      div > p {
        font-size: 4.3rem;
        padding: 3rem 3rem;

      }
      button {
        padding: 1.5rem 3rem;
        font-size: 2.5rem;

      }
      button:hover {
      }
    }
    @media screen and (max-width: 980px) {
      background-image: url("https://ik.imagekit.io/jsrsngp/bow-mob_Ez0e3pRMq.png?ik-sdk-version=javascript-1.4.3&updatedAt=1664615912378");
      width: 100vw;
      height: 118vw;
      div {

        top: 5rem;
        left: 5rem;
        width: 30rem;
        height: 30rem;
      }
      div > p {
        font-size: 3rem;
      }
      button {
        padding: 1rem 2rem;
        font-size: 1.5rem;
      }
    }

    @media screen and (max-width: 650px) {
      div{
        top: 2rem;
        left: 2rem;
        width: 20rem;
        height: 20rem;
      }
      div > p {
        font-size: 2rem;
        padding: 1rem;
      }
      button {
        padding: 1rem 1.5rem;
        margin-top: 1rem;
        font-size: 1.5rem;
      }
    }
  `;