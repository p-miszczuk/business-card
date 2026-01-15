import { ValidationError } from "@formspree/react";
import { useContactForm } from "./useContactForm";
import React from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  gap: 20px;
  width: 100%;
  border-radius: 8px;
  padding: 10px 8px;
  box-shadow: 0 0 8px 0px rgba(10, 10, 10, 0.2);
  height: 300px;
  margin-top: 2rem;
  @media (min-width: 768px) {
    max-width: 400px;
  }
`;

const FormField = styled.div`
  width: 100%;
  margin-bottom: 0;
`;

const Label = styled.label`
  font-size: 13px;
  font-family: "Courier", Courier, monospace;
  letter-spacing: 0.1rem;
  color: #333;
  display: block;
  margin: 0;
  padding: 0;
  line-height: 1.2rem;
  text-transform: uppercase;
`;

const Input = styled.input`
  width: calc(100% - 10px);
  padding: 8px 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 17px;
  &::placeholder {
    color: #ccc;
    font-size: 12px;
    text-transform: uppercase;
  }
`;

const Textarea = styled.textarea`
  width: calc(100% - 10px);
  padding: 8px 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 17px;
  min-height: 80px;
  resize: none;
  margin-top: 3px;
  &::placeholder {
    color: #ccc;
    font-size: 12px;
    text-transform: uppercase;
  }
`;

const Button = styled.button`
  background-color: #333;
  color: white;
  padding: 8px 16px;
  font-size: 17px;
  border-radius: 4px;
  border: none;
  box-shadow: 0 0 8px 0px rgba(10, 10, 10, 0.3);
  cursor: pointer;
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
`;

const ContactForm = () => {
  const { state, formErrors, handleChange, handleFormSubmit } =
    useContactForm();

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
      <FormField>
        <Label htmlFor="email">Email</Label>
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
        <Label htmlFor="message">Message</Label>
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
