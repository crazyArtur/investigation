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
   display: flex;
   flex-direction: column;
   justify-content: flex-end;
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
   padding: 0;
   /* &:not(:valid)+label {
     display: inline;
   } */
   &:valid+label {
     display: none;
   }

   ::placeholder {
      color: #adadad;
 }
`;

export const Label = styled.label`
    position: absolute;
    /* transform: translateY(-50px); */
    pointer-events: none;
    color: #adadad;
    font-size: 10px;
    span {
      color: red;
    }
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Textarea = styled.textarea`
  display : block;

   border: none;
   border-bottom: 1px solid #d9d9d9;
   box-sizing: border-box;
   min-width: 250px;
   width: 100%;
   margin  : 0;
   height  : 90%;
   padding: 0;

/* resize  : none; */
overflow: visible; 
`;