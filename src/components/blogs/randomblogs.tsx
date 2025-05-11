// RandomBlogPosts.tsx
import React from 'react';
import {posts} from './blogposts';
import BlogPost from './blogpost';


const getRandomPosts = (postsArray: any[], count = 3) => {
  const shuffled = [...postsArray].sort(() => Math.random() - Math.random());
  return shuffled.slice(0, count);
};

const RandomBlogPosts: React.FC = () => {
  const randomPosts = getRandomPosts(posts); // Get three random posts

  return (
    <div className="grid lg:mx-14 m-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
      {randomPosts.map((post) => (
        <BlogPost 
          key={post.id}
          title={post.title}
          excerpt={post.excerpt}
          date={post.date}
          link={post.link}
        />
      ))}
    </div>
  );
};

export default RandomBlogPosts;
