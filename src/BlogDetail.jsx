import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "./useFetch";

export const BlogDetail = () => {
  const { id } = useParams();
  const { data: blogs } = useFetch("http://localhost:8001/blogs/" + id);
  return (
    <div className="blog-details">
      <h2>Blog {id}</h2>
      <article>
        <div>{blogs.body}</div>
      </article>
    </div>
  );
};
