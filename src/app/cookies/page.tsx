"use client"
import React from 'react';
import '@/app/globals.css';
import CookiesPolicy from '@/components/shared/cookies';

const Page: React.FC=() => {
  return (
    <>
      <CookiesPolicy />
    </>
  );
};

export default Page;