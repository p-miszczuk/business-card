import React from "react";
import { ValidationError } from "@formspree/react";
import { useContactForm } from "./useContactForm";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
  width: 100%;
`;

const FormTitle = styled.span`
  font-size: var(--font-size-small);
  font-weight: var(--font-weight-medium);
  color: var(--text-muted);
  margin-bottom: var(--spacing-xs);
  text-transform: uppercase;
  letter-spacing: 0.08em;
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
`;

const Label = styled.label`
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-medium);
  letter-spacing: 0.04em;
  color: var(--text-secondary);
`;

const Input = styled.input`
  width: 100%;
  padding: var(--spacing-md);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-sm);
  font-size: var(--font-size-medium);
  font-family: inherit;
  background: var(--background-color);
  color: var(--text-color);
  transition:
    border-color var(--transition-fast),
    box-shadow var(--transition-fast);

  &::placeholder {
    color: var(--text-muted);
  }

  &:focus {
    outline: none;
    border-color: var(--accent-primary);
    box-shadow: 0 0 0 2px var(--accent-muted);
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: var(--spacing-md);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-sm);
  font-size: var(--font-size-medium);
  font-family: inherit;
  background: var(--background-color);
  color: var(--text-color);
  min-height: 100px;
  resize: vertical;
  transition:
    border-color var(--transition-fast),
    box-shadow var(--transition-fast);

  &::placeholder {
    color: var(--text-muted);
  }

  &:focus {
    outline: none;
    border-color: var(--accent-primary);
    box-shadow: 0 0 0 2px var(--accent-muted);
  }
`;

const Button = styled.button`
  padding: var(--spacing-md) var(--spacing-xl);
  font-size: var(--font-size-small);
  font-weight: var(--font-weight-semibold);
  letter-spacing: 0.04em;
  color: white;
  background: var(--link-background-color);
  border: none;
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition:
    background-color var(--transition-fast),
    transform var(--transition-fast);

  &:hover:not(:disabled) {
    background: var(--secondary-green);
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const ErrorText = styled.div`
  font-size: var(--font-size-small);
  color: #cf222e;
`;

const ContactForm = () => {
  const { state, formErrors, handleChange, handleFormSubmit } =
    useContactForm();

  const renderFieldErrors = (field: "email" | "message", prefix: string) => (
    <>
      <ValidationError prefix={prefix} field={field} errors={state.errors} />
      {formErrors[field] && <ErrorText>{formErrors[field]}</ErrorText>}
    </>
  );

  return (
    <Form onSubmit={handleFormSubmit}>
      <FormTitle>Send message</FormTitle>
      <FormField>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          name="email"
          placeholder="your@email.com"
          autoComplete="off"
          onChange={handleChange}
        />
        {renderFieldErrors("email", "Email")}
      </FormField>
      <FormField>
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Message..."
          onChange={handleChange}
        />
        {renderFieldErrors("message", "Message")}
      </FormField>
      <Button type="submit" disabled={state.submitting}>
        {state.submitting ? "Sending..." : "Send"}
      </Button>
    </Form>
  );
};

export default ContactForm;
