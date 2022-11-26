import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export const LoginContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 20rem;
  max-width: 26.25rem;
  background-color: #ffffff;
  background-opacity: 0.1;
  box-shadow: rgba(27, 31, 35, 0.04) 0px 1px 0px, rgba(255, 255, 255, 0.25) 0px 1px 0px inset;
  border-radius: 0.5rem;
  padding: 1.25rem;
`;

export const Title = styled.h1`
  font-size: 2.625rem;
  font-weight: 700;
  color: #0b090a;
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

export const Column = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
export const Spacing = styled.div`
  margin: 0.625rem 0;
`;
