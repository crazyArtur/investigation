import { ContactContainer, Form, Input, Label, Div, Textarea } from './Contact.styles';
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
        
        <Div>
        <Input id="name" name="name" required ref={register({ required: 'Required'})} />
        <Label for="name">Name <span>*</span></Label>
        </Div>
        
        <Error errors={errors.name} />
        
        <Div>
        <Input id="email" name="email" type="email" required ref={register({
          required: 'Required',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: "Incorrect email address"
          }})}
        />
        <Label for="email">Email <span>*</span></Label>
        </Div>
          
          {errors.email && <p className="error">{errors.email.message}</p>}

        <Div>
          <p>
        <Textarea name="message" placeholder="Message" ref={register} />
        <Button type="submit">SEND</Button>
        </p>
        </Div>
      </Form>
    </Card>
  </ContactContainer>
 );
};

export default Contact;