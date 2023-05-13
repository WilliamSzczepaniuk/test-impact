import styled, { css } from "styled-components";
export const HeaderBox = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
  ${({ theme }) => css`
    h1 {
      color: ${theme.colors.lightColor};
      letter-spacing: 1px;
      text-shadow: 0px 4px 3px rgba(255, 255, 255, 0.3);
    }
    img {
      width: 300px;
    }
  `}
`;
