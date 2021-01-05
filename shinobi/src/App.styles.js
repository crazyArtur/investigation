import styled from "styled-components/macro";

export const GlobalStyles = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;

  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  font-family: "Roboto", sans-serif;
  font-size: "16px";
`;

export const ContentContainer = styled.div`
  background-color: #f8f8f8;
  min-height: 70.5vh;
  overflow: auto;
`;
