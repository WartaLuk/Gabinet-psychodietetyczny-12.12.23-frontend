import React from "react";
import axios from "axios";

const DeletePost = ({ postId, onPostDeleted }) => {
  const handleDelete = () => {
    axios
      .delete(`/api/posts/${postId}`)
      .then((response) => {
        onPostDeleted(); // Callback po usunięciu postu
      })
      .catch((error) => {
        console.error("Błąd podczas usuwania postu:", error);
      });
  };

  return (
    <div>
      <h2>Usuń Post</h2>
      <button onClick={handleDelete}>Usuń</button>
    </div>
  );
};

export default DeletePost;
