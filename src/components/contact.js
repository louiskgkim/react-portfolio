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

      if (!validate)
    }
}

export default Contact;
