"use client";

import React from 'react';

const teamMembers = [
  {
    name: 'Zarqa',
    role: 'Quality Assurance Specialist & UI/UX Designer',
    bio: 'With a degree in Computer Engineering and over 5 years of hands-on experience, Zarqa ensures websites and applications meet the highest standards of performance and usability. She specializes in functional and non-functional testing, and is passionate about delivering polished, user-centered digital experiences with professionalism and efficiency.',
  },
  {
    name: 'Mario Akpoghomeh, MEng (in progress)',
    role: 'Full-Stack Developer & Data Analyst',
    bio: 'Energetic engineering professional at the University of Calgary with a background in petroleum and process systems. Mario brings hands-on expertise in data analysis, machine efficiency modeling, and full-stack web development, blending engineering insight with digital innovation.',
  },
  {
    name: 'Japraas Chowdhary',
    role: 'Cybersecurity Intern & Tech Enthusiast',
    bio: 'An undergraduate student at UBC gaining real-world experience in cybersecurity. Japraas is passionate about how secure systems enable modern innovation and is actively exploring the intersection of business and technology.',
  },
  {
    name: 'Ikenna Ezeodurukwe, EIT, MEng',
    role: 'Cybersecurity Specialist',
    bio: 'Cybersecurity professional with a strong foundation in information and network security. Ikenna’s expertise spans threat management, incident response, forensic investigation, and navigating complex IT infrastructures.',
  },
  {
    name: 'Vincent Trinh',
    role: 'Software Engineer & Quality Assurance',
    bio: 'A McGill University graduate in Software Engineering, Vincent is driven by a passion for impactful technology. He brings strong coding skills and a quality-first mindset to deliver reliable, community-focused tech solutions.',
  },
  {
    name: 'Shema Khan',
    role: 'Co-founder & Delivery Lead',
    bio: 'Currently leading telematics and security-focused technology projects at YYC Airports, Shema holds a Master’s in Engineering from the University of Calgary. She has deep experience managing cross-functional product teams and delivering complex solutions in the security tech space.',
  },
  {
    name: 'Nadir Qureshi',
    role: 'Cybersecurity Expert',
    bio: 'With over 8 years in cybersecurity, Nadir has tackled challenges from ransomware prevention to designing practical, resilient security systems. He has supported teams in finance, mining, oil & gas, and tech to balance security with usability.',
  },
];


const TeamSection = () => {
  return (
    <section className="py-16 bg-white/50 dark:bg-gray-800/50 backdrop-blur-lg" id="team">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
            >
             
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">{member.name}</h3>
              <p className="text-cyan-600 dark:text-cyan-400 font-medium mb-2">{member.role}</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
