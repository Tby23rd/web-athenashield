// BlogSection.tsx
import React from 'react';
import BlogPosts from './blogposts';

const BlogSection=() => {
  return (
    
      <div className="text-center m-4">
        <h2 className="text-4xl m-4 font-extrabold">
          Latest Blogs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 px-4 lg:grid-cols-3 gap-8">
          <BlogPosts /> {/* Render BlogPosts here */}
        </div>
      </div>
    
  );
};

export default BlogSection;
