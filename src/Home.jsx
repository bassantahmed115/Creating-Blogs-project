import axios from "axios";
import React, { useState, useEffect } from "react";
import { BlogList } from "./BlogList";
import { useFetch } from "./useFetch";

export const Home = () => {
  // import backend data using the custom hook useFetch
  const {
    loading,
    error,
    data: blogs,
    setData: setBlogs,
  } = useFetch("http://localhost:8001/blogs");

  // to hide a blog
  const handleHide = (id) => {
    setBlogs(blogs.filter((item) => item.id !== id));
  };

  // to delete a blog
  const handleDelete = (id) => {
    axios.delete("http://localhost:8001/blogs/" + id);
  };

  return (
    <div>
      {error ? (
        <div>{error}</div>
      ) : (
        <>
          {loading ? (
            "loading.."
          ) : (
            <>
              <BlogList
                blogs={blogs}
                title={"All Blogs!"}
                handleHide={handleHide}
                handleDelete={handleDelete}
              />
              {/* filter data of author mario only */}
              <BlogList
                blogs={blogs.filter((item) => item.author === "mario")}
                title={"Mario's Blogs"}
              />
            </>
          )}
        </>
      )}
    </div>
  );
};
