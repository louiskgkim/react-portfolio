import React, { useState } from "react";
import { validateEmail } from "../utils/validateEmail";
// look into a form submission tool like formspree or herotofu?

function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const { name, email, message } = formState;

  function handleChange(e) {
    if (e.target.name === "email") {
      const validate = validateEmail(e.target.value);

      if (!validate) {
        setErrorMessage("Please enter a valid email.");
      } else {
        setErrorMessage("");
      }
    } else if (!e.target.value.length) {
      setErrorMessage(`${e.target.name} is required.`);
    } else setErrorMessage();

    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return {
    <div>
    
  }
  export default Contact;
