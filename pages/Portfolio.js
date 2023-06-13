import React from 'react';
import port from '../public/assets/port.png'
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';
import Image from 'next/image';
import 'tailwindcss/tailwind.css'

const Portfolio = () => {
  return (
    <div className='w-full font-[Raleway] ] tracking-wide'>
    <div className='w-screen h-[50vh]  relative'>
      <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
      <Image
        className='absolute z-1'
        layout='fill'
        objectFit='cover'
        src={port}
        alt='/'
      />
      <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
        <h2 className='py-2 text-3xl sm:text-4xl font-bold'>Portfolio</h2>
        <h3 className='text-2xl sm:text-3xl '>React JS</h3>
      </div>
    </div>

    <div className='max-w-[1240px] mx-auto p-4 grid md:grid-cols-5 gap-8 py-1  '>
      <div className='col-span-4'>
        <p className=' text-gray-600'>Project</p>
        <h2 className='text-3xl sm:text-4xl font-bold text-[#c69c72]'>Overview</h2>
        <p className='py-2 text-gray-600'>
          This app was built using React JS and is hosted on Vercel. My first portfolio website. I used sanityIo for the backend.
        </p>
        <a
          href='https://github.com/TolaMaryAnn/Tola'
          target='_blank'
          rel='noreferrer'
        >
          <button className='px-8 py-2 mt-4 mr-8 shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#c69c72] to-[#c69c72] text-white'>Code</button>
        </a>
        <a
          href='tola.vercel.app'
          target='_blank'
          rel='noreferrer'
        >
          <button className='px-8 py-2 mt-4 shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#c69c72] to-[#c69c72] text-white'>Demo</button>
        </a>
      </div>
      <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-6'>
        <div className='p-2'>
          <p className='text-center font-bold pb-2 text-[#c69c72]'>Technologies</p>
          <div className='grid grid-cols-3 md:grid-cols-1'>
            <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill className='pr-1' /> React JS
            </p>
          
          
           
           
          </div>
        </div>
      </div>
      <Link href='/#projects'>
        <p className='underline cursor-pointer '>Back</p>
      </Link>
    </div>
  </div>
  );
}

export default Portfolio;
