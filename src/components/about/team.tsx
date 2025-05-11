"use client";

import React from 'react';
import Image from 'next/image';

const teamMembers = [
  {
    name: 'hello Maru',
    role: 'Developer',
    image: '/images/team/hello.jpg',
    bio: 'Leads product strategy and development',
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
              <div className="w-32 h-32 mx-auto mb-4 relative rounded-full overflow-hidden border-4 border-cyan-600">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
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
