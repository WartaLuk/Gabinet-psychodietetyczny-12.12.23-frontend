import React, { useState, useEffect } from "react";
import axios from "axios";

const EditPost = ({ postId }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    axios
      .get(`/api/posts/${postId}`)
      .then((response) => {
        setTitle(response.data.title);
        setContent(response.data.content);
      })
      .catch((error) => {
        console.error("Błąd podczas pobierania postu:", error);
      });
  }, [postId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`/api/posts/${postId}`, { title, content })
      .then((response) => {
        // Obsługa po pomyślnym edytowaniu postu
      })
      .catch((error) => {
        console.error("Błąd podczas edytowania postu:", error);
      });
  };

  return (
    <div>
      <h2>Edytuj Post</h2>
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
        <button type="submit">Edytuj</button>
      </form>
    </div>
  );
};

export default EditPost;
