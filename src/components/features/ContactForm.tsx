import { ValidationError, useForm } from "@formspree/react";
import styled from "styled-components";
import React, { useRef, useState } from "react";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 300px;
  width: 100%;
`;

const FormField = styled.div`
  width: 100%;
  margin-bottom: 8px;
`;

const Label = styled.label`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
  display: block;
`;

const Input = styled.input`
  width: 100%;
  padding: 4px;
  border: 1px solid #333;
  border-radius: 4px;
  font-size: 17px;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 4px;
  border: 1px solid #333;
  border-radius: 4px;
  font-size: 17px;
  height: 50px;
  resize: none;
`;

const Button = styled.button`
  background-color: #333;
  color: white;
  padding: 8px 16px;
  font-size: 17px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  margin-top: 8px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #555;
  }
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const ErrorText = styled.div`
  color: red;
  font-size: 14px;
  align-self: flex-start;
  margin-top: 2px;
`;

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xyzprnde");
  const [formErrors, setFormErrors] = useState({
    email: "",
    message: "",
  });
  const formValues = useRef({
    email: "",
    message: "",
  });

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    formValues.current[event.target.name as keyof typeof formValues.current] =
      event.target.value;
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Validate form before submission
    let isValid = true;
    const newErrors = { email: "", message: "" };

    if (!formValues.current.email) {
      newErrors.email = "Email jest wymagany";
      isValid = false;
    } else if (!validateEmail(formValues.current.email)) {
      newErrors.email = "Niepoprawny format email";
      isValid = false;
    }

    if (!formValues.current.message) {
      newErrors.message = "Wiadomość jest wymagana";
      isValid = false;
    } else if (formValues.current.message.length < 10) {
      newErrors.message = "Wiadomość musi zawierać co najmniej 10 znaków";
      isValid = false;
    }

    setFormErrors(newErrors);

    if (isValid) {
      handleSubmit(event);
    }
  };

  const renderFieldErrors = (field: "email" | "message", prefix: string) => {
    return (
      <>
        <ValidationError prefix={prefix} field={field} errors={state.errors} />
        {formErrors[field] && <ErrorText>{formErrors[field]}</ErrorText>}
      </>
    );
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      <Label htmlFor="email">Contact form</Label>
      <FormField>
        <Input
          id="email"
          type="email"
          name="email"
          placeholder="Enter your email"
          onChange={handleChange}
        />
        {renderFieldErrors("email", "Email")}
      </FormField>
      <FormField>
        <Textarea
          id="message"
          name="message"
          placeholder="Enter your message"
          onChange={handleChange}
        />
        {renderFieldErrors("message", "Message")}
      </FormField>
      <Button type="submit" disabled={state.submitting}>
        Submit
      </Button>
    </Form>
  );
};

export default ContactForm;
