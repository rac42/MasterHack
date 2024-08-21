import React, { useContext, useEffect } from "react";
import Blogs from "./Blogs";


function BlogCollection() {
  
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6" // Use the ref here if needed
    >
      <Blogs />
      <Blogs />
      <Blogs />
      <Blogs />
    </div>
  );
}

export default BlogCollection;
