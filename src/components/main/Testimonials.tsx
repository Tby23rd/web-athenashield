"use client";

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

interface Testimonial {
  id: string;
  userName: string;
  comment: string;
  imageUrl: string;
}

const testimonialsData: Testimonial[] = [
  {
    id: '1',
    userName: 'John Doe',
    imageUrl: '/images/ai0.webp',
    comment: 'AthenaShield helps me catch phishing attempts before they even reach my inbox. It’s like having a personal email security guard.',
  },
  {
    id: '2',
    userName: 'Jane Smith',
    imageUrl: '/images/ai1.webp',
    comment: 'The AI alerts are accurate and timely. I feel much safer opening emails now that AthenaShield is monitoring them for me.',
  },
  {
    id: '3',
    userName: 'Emily Johnson',
    imageUrl: '/images/ai.webp',
    comment: 'AthenaShield gives me peace of mind. I no longer worry about missing suspicious content or dangerous attachments.',
  },
  {
    id: '4',
    userName: 'Michael Brown',
    imageUrl: '/images/ai8.webp',
    comment: 'Their inbox analytics gave me insights I didn’t even know I needed. Highly recommend for anyone serious about email security.',
  },
];


const Testimonials: React.FC=() => {
  const settings={
    dots: true,           // Show dots navigation
    arrows: true,         // Show prev/next arrows
    infinite: true,       // Infinite loop
    speed: 500,           // Transition speed in milliseconds
    slidesToShow: 1,      // Number of slides to show at a time
    slidesToScroll: 1,    // Number of slides to scroll on prev/next
    autoplay: true,       // Auto play the carousel
    autoplaySpeed: 3000,  // Auto play speed in milliseconds
    pauseOnHover: true,   // Pause auto play on hover
  };

  return (
    <div id="Testimonials" className="m-8 p-10">
      <h2 className="text-4xl text-primary-teal flex justify-center font-bold mb-4">What Our Users Say</h2>



      {/* Right Side: Testimonials Slider */}
      <div className=" p-10 ">
        <Slider {...settings}>
          {testimonialsData.map((testimonial) => (
            <div key={testimonial.id} >
              <div className="flex justify-center">
                <Image
                  width={100}
                  height={100}
                  src={testimonial.imageUrl} // Use the imageUrl from the testimonial
                  alt={testimonial.userName}
                  className='rounded-full'
                />
              </div>

              {/* Testimonial Content */}
              <div>
                <p className='text-lg font-bold flex justify-center'>{testimonial.userName}</p>
                <p className="flex justify-center">{testimonial.comment}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
