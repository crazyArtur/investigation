import styled from "styled-components";

export const FormStyled = styled.form`
   background: white;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   margin: 0 auto;
   max-width: 500px;
   padding: 30px 50px;

   .error {
   color: red;
   font-size: 12px;
   height: 30px;
 }
`;

export const INPUT = styled.input`
   border: none;
   border-bottom: 1px solid #d9d9d9;
   box-sizing: border-box;
   width: 100%;

   ::placeholder {
      color: #adadad;
 }
`;
