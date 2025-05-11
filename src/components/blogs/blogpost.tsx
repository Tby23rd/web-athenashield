// BlogPost.tsx
import Image from 'next/image';
import React from 'react';
import { FaRegClock } from 'react-icons/fa';

interface BlogPostProps {
  title: string;
  excerpt: string;
  date: string; // Format: YYYY-MM-DD
  link: string; // Link to the full blog post
}

const BlogPost: React.FC<BlogPostProps> = ({ title, excerpt, date, link }) => {
  return (
    <div 
    className="flex items-start rounded-lg shadow-md overflow-hidden transition-transform transform
     hover:scale-105 duration-300 p-4 bg-cyan-900 dark:bg-gray-800 ">
      
      <div className="p-6">
        <h3 className="text-xl font-semibold  mb-2">{title}</h3>
        <p className=" mb-4">{excerpt}</p>
        <div className="flex items-center justify-between  mb-4">
          <span className="flex items-center">
            <FaRegClock className="mr-1" />
            {new Date(date).toLocaleDateString()}
          </span>
          <a href={link} className="dark:text-cyan-500 text-cyan-100 hover:underline">Read More</a>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
