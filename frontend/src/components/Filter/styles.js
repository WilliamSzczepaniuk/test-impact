import styled, { css } from "styled-components";

export const Box = styled.div`
  margin-top: 15px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  div {
    margin: 1px 5px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
  }
  label {
    font-size: 12px;
    width: 100%;
    margin-bottom: 3px;
  }
  ${({ theme }) => css`
    svg {
      margin: 0px 5px;
    }
    h2 {
      color: rgba(255, 255, 255, 0.8);
      font-size: 18px;
      margin-top: 5px;
      letter-spacing: 1px;
      text-shadow: 0px 4px 3px rgba(255, 255, 255, 0.3);
      width: 100%;
      font-weight: bold;
    }
    select {
      font-size: 16px;
      padding: 10px;
      background-color: ${theme.colors.primaryDarkColor};
      color: white;
      border: dashed 2px ${theme.colors.purpleDark};
      border-radius: 18px;
      width: 100%;
      :hover {
        color: #6575ae;
      }
    }
    option {
      cursor: pointer;
      font-size: 11px;
      color: #6575ae;
    }
    button {
      border-radius: 20px;
      margin-top: 18px;
      padding: 8px;
      color: ${theme.colors.purpleDark};
      background-color: ${theme.colors.whiteColor};
    }
  `}

  @media (min-width:480px) {
    justify-content: center;
    div {
      width: 23%;
    }
    h2 {
      width: 120px;
    }
    select {
      font-size: 14px;
    }
  }
  @media (min-width: 720px) {
    div {
      margin: 10px 15px;
    }
  }
`;
