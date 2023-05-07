import React, { useState } from "react";
import { useForm } from "@formspree/react";
import { toast, ToastContainer } from "react-toastify";
import { Button } from "@/components/atoms/Button/Button";
import { TextField } from "@/components/atoms/TextField/TextField";
import { TextareaField } from "@/components/atoms/TextareaField/TextareaField";

function validate(values: { name: string; email: string; message: string }) {
  const errors = { name: "", email: "", message: "" };

  if (!values.name) {
    errors.name = "Please enter a name.";
  }

  if (!values.email || !/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.message) {
    errors.message = "Please enter a message.";
  }

  return errors;
}

export function ContactForm() {
  const [state, handleFormspreeSubmit] = useForm("xwkjyyjo");
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });

  const handleChange = (event: { target: { name: any; value: any } }) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newErrors = validate(formValues);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      toast.error("Unable to submit form, please fill in the required fields", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }

    handleFormspreeSubmit({
      ...formValues,
    }).then((response) => {
      // eslint-disable-next-line no-console
      console.info(`Form: `, state);
      if (response.body.ok) {
        toast.success("Form submitted successfully", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        toast.error(
          "Failed to submit the form, please fill in the required fields",
          {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          },
        );
      }
    });

    setFormValues({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <>
      <ToastContainer />
      <form onSubmit={handleSubmit} className="mt-4 w-full">
        <div className="flex w-full flex-col items-center justify-center gap-8 sm:items-start ">
          <TextField
            label="Name"
            name="name"
            onChange={handleChange}
            errorMessage={errors.name}
            value={formValues.name}
          />
          <TextField
            label="Email"
            name="email"
            onChange={handleChange}
            errorMessage={errors.email}
            value={formValues.email}
          />
          <TextareaField
            label="Message"
            name="message"
            onChange={handleChange}
            errorMessage={errors.message}
            value={formValues.message}
          />
          <Button type="submit" variant="primary">
            Send
          </Button>
        </div>
      </form>
    </>
  );
}
