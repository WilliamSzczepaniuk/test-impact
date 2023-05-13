import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  div {
    display: flex;
    width: 100%;
    justify-content: center;
    margin-bottom: 20px;
  }
  p {
    text-align: center;
    width: 220px;
    border-radius: 10px;
    background-color: blueviolet;
    padding: 10px;
    margin: 5px;
  }
  button {
    top: 2px;
    left: 10px;
    position: absolute;
  }
  a {
    color: white;
    text-decoration: none;
  }
`;
export const Image = styled.img`
  margin-top: 18px;
  border-radius: 10px;
  min-width: 88vw;
  max-width: 90vw;
  max-height: 80vh;
  min-height: 50vh;
  opacity: ${(props) => props.opacity};
  transition: opacity 6s ease-in-out;
  @media (min-width: 720px) {
    min-height: 80vh;
  }
  @media (min-width: 1080px) {
    min-width: 38vw;
    margin-bottom: 20px;
  }
`;
