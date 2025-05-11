// components/Loading.js (or Loading.tsx)
import React from 'react';
import Image from 'next/image'; // Next.js optimized image component

const Loading=() => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center  z-50">
      <div className="animate-bounce">
        <Image
          src="/images/logos/logo-no-background.png"
          alt="Loading..."
          width={100} // adjust size as needed
          height={100} // adjust size as needed
        />
      </div>
    </div>
  );
};

export default Loading;
