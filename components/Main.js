import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
    <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
      <div>
        <p className='uppercase text-sm tracking-widest sm:mt-4 text-gray-600'>
          LET&#39;S BUILD SOMETHING AMAZING TOGETHER
        </p>
        <h1 className='py-4 text-gray-700 text-6xl  font-bold'>
          Hi, I&#39;m <span className='text-[#c69c72]'>Tola MaryAnn</span>
        </h1>
        <h1 className='py-2 text-gray-700 text-5xl  font-bold'>A Front-End Engineer</h1>
        <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto font-[Raleway]'>
          I’m focused on building responsive front-end web applications
          integrating back-end technologies.
        </p>
        <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
          <Link
            href='https://www.linkedin.com/in/ojegbile-maryann-omotola-59ab91227/'
            target='_blank'
            rel='noreferrer'
          >
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
              <FaLinkedinIn />
            </div>
          </Link>
          <Link
            href='https://github.com/TolaMaryAnn'
            target='_blank'
            rel='noreferrer'
          >
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
              <FaGithub />
            </div>
          </Link>
          <Link href='/#contact'>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
              <AiOutlineMail />
            </div>
          </Link>
          <Link href='/Resume'>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
              <BsFillPersonLinesFill />
            </div>
          </Link>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Main;
