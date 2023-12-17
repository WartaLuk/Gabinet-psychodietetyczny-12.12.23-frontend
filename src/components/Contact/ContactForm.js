import React, { useState } from "react";
import axios from "axios";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/contact", { name, email, message })
      .then((response) => {
        // Obsługa po pomyślnym wysłaniu formularza
      })
      .catch((error) => {
        console.error("Błąd podczas wysyłania formularza:", error);
      });
  };

  return (
    <div>
      <h2>Skontaktuj się z nami</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Twoje imię"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Twój email"
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Twoja wiadomość"
        />
        <button type="submit">Wyślij</button>
      </form>
    </div>
  );
};

export default ContactForm;
