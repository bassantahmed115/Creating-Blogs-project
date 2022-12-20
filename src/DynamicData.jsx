import React from "react";

export const DynamicData = () => {
  const title = "Welcome to my blog";
  const likes = 50;
  const link = "www.google.com";
  // jsx cannot return boolean or objects such as this
  // const person={name:'bob',age:12}
  return (
    <div className="content">
      <h1>{title}</h1>
      <p>Liked {likes} times</p>
      <a href={link}>Visit google</a>
      <p>{[1, 2, 3, 4, 5]}</p>
      <p>{Math.random() * 10}</p>
      {/* dynamic data rendering */}
    </div>
  );
};
