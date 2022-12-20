import React from "react";
import { Link } from "react-router-dom";

export const BlogList = (props) => {
  return (
    <div className="blog-list">
      <h2>{props.title}</h2>
      {props.blogs.map((item) => {
        return (
          <div className="blog-preview" key={item.id}>
            <Link to={`/blog/${item.id}`}>
              <h2>{item.title}</h2>
              <h4>Written by {item.author}</h4>
            </Link>
            <button onClick={() => props.handleHide(item.id)}>
              Hide the Blog
            </button>
            <button onClick={() => props.handleDelete(item.id)}>
              Delete the Blog
            </button>
          </div>
        );
      })}
    </div>
  );
};
