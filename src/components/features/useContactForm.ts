import { useRef, useState } from "react";
import { useForm } from "@formspree/react";

const INITIAL_FORM_VALUES = {
  email: "",
  message: "",
};

export const useContactForm = () => {
  const [state, handleSubmit] = useForm("xyzprnde");
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
    const newErrors = new Map<string, string>();

    const email = formValues.current.email?.trim() || "";
    const message = formValues.current.message?.trim() || "";

    if (!email) {
      newErrors.set("email", "Email jest wymagany");
    } else if (!validateEmail(email)) {
      newErrors.set("email", "Niepoprawny format email");
    }

    if (!message) {
      newErrors.set("message", "Wiadomość jest wymagana");
    } else if (message.length < 10) {
      newErrors.set("message", "Wiadomość musi zawierać co najmniej 10 znaków");
    }

    if (newErrors.size > 0) {
      setFormErrors(
        Object.fromEntries(newErrors.entries()) as {
          email: string;
          message: string;
        },
      );
      return;
    }

    try {
      await handleSubmit(event);
      // Clear form after submission
      formValues.current = { ...INITIAL_FORM_VALUES };
      (event.target as HTMLFormElement).reset();
      setFormErrors({ email: "", message: "" });
    } catch (error) {
      console.error(error);
    }
  };

  return {
    state,
    formErrors,
    handleChange,
    handleFormSubmit,
  };
};
