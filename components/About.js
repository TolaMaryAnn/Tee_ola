import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import about from '../public/assets/abt.png'
const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16  font-[Raleway]'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-2xl tracking-widest text-[#c69c72] font-bold'>
            About
          </p>
          <h2 className='py-4 text-xl'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
            I specialize in building mobile responsive front-end UI applications
            that connect with API’s and other backend technologies. I’m
            passionate about learning new technologies and understand there is
            more than one way to accomplish a task. Though I am most proficient
            in building front-end applications using HTML, CSS, Javascript, and
            React, I am a quick learner and can pick up new tech stacks as
            needed. I believe that being a great developer is not using one
            specific language, but choosing the best tool for the job \uD83D\uDE0A👍
          </p>
          <p className='py-2 text-gray-600'>
            I started web developement in 2021 working on several projects to aid my learning and growth in software development. I have worked with quite a number of teams on several projects .In my spare
            time I learn new technologies, read books, watch movies, bake or chat with friends \uD83D\uDE0A👍
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer '>
              Check out some of my projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={about} className='rounded-xl ' alt='/' />
        </div>
      </div>
    </div>
  );
}

export default About;
