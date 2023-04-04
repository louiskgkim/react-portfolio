import React, { useState } from "react";
import { validateEmail } from "../utils/validateEmail";
// look into a form submission tool like formspree or herotofu?

function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

}

export default Contact;
