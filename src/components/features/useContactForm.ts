import { useRef, useState } from "react";
import { useForm } from "@formspree/react";

const INITIAL_FORM_VALUES = {
  email: "",
  message: "",
};

export const useContactForm = () => {
  const [state, handleSubmit] = useForm("xyzprnd");
  const formValues = useRef({
    ...INITIAL_FORM_VALUES,
  });

  const [formErrors, setFormErrors] = useState({
    ...(formValues.current || {}),
  });

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    formValues.current[event.target.name as keyof typeof formValues.current] =
      event.target.value;
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
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
      try {
        await handleSubmit(event);
        // Clear form after submission
        formValues.current = { ...INITIAL_FORM_VALUES };
        setFormErrors({ email: "", message: "" });
        (event.target as HTMLFormElement).reset();
      } catch (error) {
        console.error(error);
      }
    }
  };

  return {
    state,
    formErrors,
    handleChange,
    handleFormSubmit,
  };
};
