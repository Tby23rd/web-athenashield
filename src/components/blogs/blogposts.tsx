'use client';

import React from 'react';
import BlogPost from './blogpost';

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string; // Format: YYYY-MM-DD
  link: string;
}

export const posts: BlogPost[] = [
  {
    id: 1,
    title: "How AI is Changing Email Security",
    excerpt: "From threat scoring to intelligent filters, AI is reshaping how we protect our inboxes from phishing and scams.",
    date: "2025-04-12",
    link: "https://athenashield.blog/ai-email-security",
  },
  {
    id: 2,
    title: "Detecting Phishing Before It Hits: Real-Time Defense with AthenaShield",
    excerpt: "Learn how AI and behavior modeling can block phishing threats before they reach your inbox.",
    date: "2025-04-04",
    link: "https://athenashield.blog/phishing-prevention",
  },
  {
    id: 3,
    title: "The Rise of Smart Inbox Analytics",
    excerpt: "Why inbox analytics are key to modern email protection — and how they help detect invisible threats.",
    date: "2025-03-22",
    link: "https://athenashield.blog/inbox-analytics-trends",
  },
  {
    id: 4,
    title: "How to Train Your Team to Spot Email Threats",
    excerpt: "Phishing is often a human problem. Here’s how to make your team the first line of defense.",
    date: "2025-03-15",
    link: "https://athenashield.blog/security-awareness-training",
  },
  {
    id: 5,
    title: "Red Flags in Your Inbox: How to Recognize Malicious Emails",
    excerpt: "From spoofed senders to suspicious links, we break down the most common phishing signs.",
    date: "2025-03-05",
    link: "https://athenashield.blog/phishing-red-flags",
  },
  {
    id: 6,
    title: "What is Threat Scoring? A Smarter Way to Filter Emails",
    excerpt: "AthenaShield uses dynamic threat scoring to decide what’s dangerous — learn how it works.",
    date: "2025-02-20",
    link: "https://athenashield.blog/threat-scoring-email",
  },
  {
    id: 7,
    title: "Inbox Fatigue is a Security Risk. Here’s Why.",
    excerpt: "Overloaded inboxes lead to missed threats. Find out how AthenaShield tackles alert fatigue.",
    date: "2025-02-10",
    link: "https://athenashield.blog/inbox-fatigue-risk",
  },
  {
    id: 8,
    title: "Behind the Scenes: How AthenaShield Scores Every Email",
    excerpt: "Peek into the AI logic that powers our email filtering and why it outperforms static rules.",
    date: "2025-01-28",
    link: "https://athenashield.blog/how-email-scoring-works",
  },
  {
    id: 9,
    title: "Security Isn’t Just Spam Filters Anymore",
    excerpt: "Why traditional email filters fall short and what modern AI-based tools do differently.",
    date: "2025-01-14",
    link: "https://athenashield.blog/ai-vs-spam-filters",
  },
  {
    id: 10,
    title: "From Phishing to AI Impersonation: What’s Next in Email Threats?",
    excerpt: "Emerging threats like AI voice and style cloning are already impacting inbox security.",
    date: "2024-12-20",
    link: "https://athenashield.blog/future-email-threats",
  }
];

const BlogPosts: React.FC = () => {
  return (
    <>
      {posts.map((post) => (
        <BlogPost
          key={post.id}
          title={post.title}
          excerpt={post.excerpt}
          date={post.date}
          link={post.link}
        />
      ))}
    </>
  );
};

export default BlogPosts;
