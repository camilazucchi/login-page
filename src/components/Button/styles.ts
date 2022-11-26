import styled from "styled-components";

export const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 2.625rem;
  background: rgb(224, 170, 255);
  background: linear-gradient(
    90deg,
    rgba(224, 170, 255, 1) 0%,
    rgba(199, 125, 255, 1) 35%,
    rgba(157, 78, 221, 1) 100%
  );
  color: #ffffff;
  border: none;
  border-radius: 2rem;
  font-weight: 400;
  font-size: 1rem;

  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;
