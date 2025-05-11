"use client";

import React from 'react';

const teamMembers = [
  {
    name: 'Tabitha',
    role: 'Software Developer',
    bio: 'Tabitha is a software developer focused on building responsive, secure, and scalable applications. With experience in UI development, backend integration, and AI workflows, she contributes to the technical execution of the product with precision and creativity.',
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
  {
    name: 'Ahsan Aziz',
    role: 'Senior Manager & Technology Consultant',
    bio: 'Ahsan Aziz is a Senior Manager and Technology Consultant with a Master’s degree in Data Science and Management. At EY New Zealand, he has led a wide range of technology initiatives, combining his expertise in data analytics and product development to drive innovation and impact.',
  },
  {
    name: 'Zarka Khan',
    role: 'Cybersecurity Researcher',
    bio: 'Zarka is a cybersecurity researcher with 5 years of experience in malware analysis, phishing response, and threat hunting. She leverages frameworks like MITRE ATT&CK to detect and mitigate advanced threats, delivering deep insights and strengthening organizational cyber resilience.',
  },
];



const TeamSection = () => {
  return (
    <section
      className="py-20 bg-gradient-to-br from-cyan-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 backdrop-blur-lg"
      id="team"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-16">
          🎉 Meet Our Team
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-10">
        {teamMembers.map((member, index) => (
  <div
    key={index}
    className="group relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-cyan-400 dark:hover:border-cyan-500 text-center"
  >
    {/* Avatar */}
    <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-700">
      <img
        src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(member.name)}`}
        alt={`Avatar of ${member.name}`}
        className="w-full h-full object-cover"
      />
    </div>

    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
      {member.name}
    </h3>
    <p className="text-cyan-600 dark:text-cyan-400 text-sm font-medium mb-3">
      {member.role}
    </p>
    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
      {member.bio}
    </p>
  </div>
))}

        </div>
      </div>
    </section>
  );
};


export default TeamSection;
