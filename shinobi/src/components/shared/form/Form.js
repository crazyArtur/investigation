import React from "react";
import { useForm } from "react-hook-form";
import Button from "../button/Button";
import { FormStyled, INPUT } from "./Form.styles";

const Form = () => {
 const { register, handleSubmit, errors } = useForm();

 const Error = ({ errors }) => {
    return (
        <div className={"error"}>{errors ? errors.message : " "}</div>);
   };

 return (
     <>
   <FormStyled onSubmit={handleSubmit(data => console.log(data))}>
     <INPUT id="name" name="name" placeholder="Name *" ref={register({ required: 'Required'})} />
     <Error errors={errors.name} />
     <INPUT id="email" name="email" type="email" placeholder="Email *" ref={register({
          required: 'Required',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: "Incorrect email address"
          }})}
          />
          {errors.email && <p className="error">{errors.email.message}</p>}
     <INPUT name="message" placeholder="Message" ref={register} />
    <Button type="submit">Send</Button>
   </FormStyled>
   </>
 );
};

export default Form;