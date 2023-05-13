import styled, { css } from "styled-components";

export const CardStyle = styled.div`
  ${({ theme }) => css`
    display: flex;
    border-radius: 15px;
    border: solid 2px ${theme.colors.lightColor};
    flex-direction: column;
    background-color: black;
    opacity: 0.9;
    width: 100%;
    margin: 10px;
    align-items: center;
    max-height: 500px;
    padding: 10px;
    :hover {
      border: solid 2px yellow;
    }
  `}
  svg {
    margin: 0px 5px;
  }
  a {
    color: white;
    text-decoration: none;
  }
  h3 {
    text-shadow: 2px 2px 0 white, 2px -2px 0 yellow, -3px 2px 0 yellow,
      -2px -2px 0 yellow, 2px 0px 0 yellow, 0px 2px 0 yellow, -2px 0px 0 yellow,
      0px -2px 0 yellow;
    color: black;
    font-family: "Roboto", cursive;
    margin-top: 10px;

    font-size: 20px;
  }
  @media (min-width: 468px) {
    max-width: 38%;
  }

  @media (min-width: 1024px) {
    width: 30%;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  max-height: 240px;
  min-height: 240px;
  border-radius: 12px;
`;

export const Infos = styled.div`
  ${({ theme }) => css`
    display: flex;
    margin-top: 10px;
    flex-wrap: wrap;
    justify-content: center;

    h4 {
      text-shadow: 0 0 0.2em ${theme.colors.purpleDark};
      border: 0.25em solid ${theme.colors.purpleDark};
      letter-spacing: 1px;
      display: flex;
      flex-direction: column;
      outline: none;
      background-color: #160016;
      box-shadow: 0 0 0.4em 0.15em ${theme.colors.purpleDark},
        0 0 0.4em 0.2em #350035,
        inset 0 0 0.75em 0.25em ${theme.colors.purpleDark};
      border-radius: 1em;
      color: ${theme.colors.lightColor};
      font-size: ${theme.fontSize.small};
      padding: 0.5em 0.4em;
      margin: 2px 6px;
      transition: all 0.3s;
    }

    span {
      color: white;
    }
  `}
`;
