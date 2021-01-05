import styled from 'styled-components/macro';

export const ButtonStyled = styled.button`
  height: 40px;
  display: inline-block;

  border: none;
  border-bottom: ${({isSelected }) => (isSelected ? "#ff7c2e 2px solid" : "none" )}; 
  border-radius: ${({isSelected }) => (isSelected ? "0" : "2px" )};

  background-color: ${({ tab }) => (tab ? "#fff" : "#2196f3")};

  color: ${({ tab, isSelected }) =>
   (tab
    ? isSelected
        ? "#ff7c2e"
        : "#545454"
    : "#fff")};

  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0;

`;