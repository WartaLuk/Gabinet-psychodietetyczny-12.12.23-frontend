import React, { useState } from "react";
import axios from "axios";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/posts", { title, content })
      .then((response) => {
      })
      .catch((error) => {
        console.error("Błąd podczas dodawania postu:", error);
      });
  };

  return (
    <div>
      <h2>Dodaj Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Tytuł postu"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Treść postu"
        />
        <button type="submit">Dodaj</button>
      </form>
    </div>
  );
};

export default AddPost;
