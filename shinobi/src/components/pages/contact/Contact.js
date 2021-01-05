import { ContactContainer, Form, Input, Label } from './Contact.styles';
import { useForm } from "react-hook-form";
import Card from '../../shared/card/Card';
import Button from '../../shared/button/Button';

const Contact = () => {

  const { register, handleSubmit, errors } = useForm();

 const Error = ({ errors }) => {
    return (
        <div className={"error"}>{errors ? errors.message : " "}</div>);
   };

 return (
  <ContactContainer>
    <Card>
      <Form onSubmit={handleSubmit(data => console.log(data))}>
        <>
        <Input id="name" name="name" required ref={register({ required: 'Required'})} />
        {/* <Label for="name">Name <span>*</span></Label> */}
        </>
        <Error errors={errors.name} />
        <>
        <Input id="email" name="email" type="email" required ref={register({
          required: 'Required',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: "Incorrect email address"
          }})}
        />
        <Label for="email">Email <span>*</span></Label>
          </>
          {errors.email && <p className="error">{errors.email.message}</p>}
        <Input name="message" placeholder="Message" ref={register} />
        <Button type="submit">SEND</Button>
      </Form>
    </Card>
  </ContactContainer>
 );
};

export default Contact;