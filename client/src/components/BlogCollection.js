import React from "react";
import Blogs from "./Blogs";
import { useRef } from "react";

function BlogCollection() {
  const blogRef = useRef(null);
  return (
    <div ref={blogRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
      <Blogs />
      <Blogs />
      <Blogs />
      <Blogs />
    </div>
  );
}

export default BlogCollection;
