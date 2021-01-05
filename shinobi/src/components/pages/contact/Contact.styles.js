import styled from 'styled-components'

export const ContactContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #545454;
`;

export const Form = styled.form`
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

export const Input = styled.input`
   border: none;
   border-bottom: 1px solid #d9d9d9;
   box-sizing: border-box;
   min-width: 250px;
   width: 100%;

   ::placeholder {
      color: #adadad;
 }
`;
