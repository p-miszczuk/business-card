import { useRef, useState } from "react";
import { useForm } from "@formspree/react";

export const useContactForm = () => {
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

  return {
    state,
    formErrors,
    handleChange,
    handleFormSubmit,
  };
};
