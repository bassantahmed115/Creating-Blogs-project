import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    console.log(blog);
    setLoading(false);
    axios.post("http://localhost:8001/blogs", blog).then(() => {
      // then redirect to home page
      history.push("/");
    });
  };

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <input value={author} onChange={(e) => setAuthor(e.target.value)} />

        <button>{!loading ? "Add Blog" : "Loading..."}</button>
      </form>
    </div>
  );
};
