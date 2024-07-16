import React from 'react';
import { Button } from './ui/button';


const Hero: React.FC = () => {
  return (
    <div className="flex items-center justify-center flex-1">
      {/* video as background */}

      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center'>
        <h1 className='group inline-flex text-6xl h-10 w-max items-center justify-center rounded-md px-2 py-2 font-medium text-slate-50'>
          Lorem Ipsum
        </h1>
        <h2 className='m-8 group inline-flex text-3xl h-10 w-max items-center justify-center rounded-md px-2 py-2 font-medium text-slate-50'>
          Lorem Ipsum
        </h2>
        <a href='/demo'>
          <Button className=''>
            Try Now
          </Button>
        </a>
      </div>


      <video className='absolute top-0 left-0 w-full h-full object-cover -z-50 inset-0 bg-cover bg-center brightness-[0.25]' autoPlay muted loop>
        <source src="hero.m4v" type="video/mp4" />
      </video>
    </div>
  );
};

export default Hero;
