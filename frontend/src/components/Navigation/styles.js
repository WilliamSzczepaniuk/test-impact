import styled, { keyframes } from "styled-components";

const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(149, 0, 174, 0.4);
  }
  50% {
    transform: scale(1.05);
    box-shadow: 0 0 0 15px rgba(149, 0, 174, 0);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(149, 0, 174, 0);
  }
`;

export const Box = styled.div`
  margin: 0 auto;
  display: flex;
  width: 80%;
  align-items: center;
  justify-content: space-around;
  p {
    color: 0 0 0 0 rgba(149, 0, 174, 0.4);
  }
`;
export const Button = styled.button`
  background-color: #6500ae;
  margin: 8px 2px;
  color: white;
  border: none;
  color: white;
  padding: 10px 16px;
  border-radius: 12px;
  font-size: 14px;
  cursor: pointer;
  animation: ${pulseAnimation} 1.5s ease-in-out infinite;
`;
