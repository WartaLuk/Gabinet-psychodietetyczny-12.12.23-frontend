import React, { useState } from "react";
import axios from "axios";

const PostForm = ({ post, onSave }) => {
  const [title, setTitle] = useState(post ? post.title : "");
  const [content, setContent] = useState(post ? post.content : "");
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    if (image) {
      formData.append("image", image);
    }

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    if (post) {
      axios
        .put(`/api/posts/${post.id}`, formData, config)
        .then((response) => onSave(response.data))
        .catch((error) =>
          console.error("Błąd podczas aktualizacji postu:", error)
        );
    } else {
      axios
        .post("/api/posts", formData, config)
        .then((response) => onSave(response.data))
        .catch((error) =>
          console.error("Błąd podczas dodawania postu:", error)
        );
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      
      <label>
        Zdjęcie:
        <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      </label>
      <button type="submit">Zapisz</button>
    </form>
  );
};

export default PostForm;
