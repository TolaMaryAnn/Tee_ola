import React from 'react';
import Image from 'next/image';
import bootstrap from '../public/assets/bootstrap.png'
import css from '../public/assets/css.png'
import firebase from '../public/assets/firebase.png'
import git from '../public/assets/git.png'
import Github from '../public/assets/github.png'
import html from '../public/assets/html.png'
import nextjs from '../public/assets/nextjs.png'
import js from '../public/assets/js.png'
import ts from '../public/assets/ts.png'
import tailwind from '../public/assets/tailwind.png'
import react from '../public/assets/react.png'
import sass from '../public/assets/sass.png'
const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2 font-[Raleway]'>
    <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
      <p className='text-2xl tracking-widest uppercase text-[#c69c72]'>
        Skills
      </p>
      <h2 className='py-4 text-xl'>What I Can Do</h2>
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
          <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
              <Image src={html} width='64px' height='64px' alt='/' />
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h3>HTML</h3>
            </div>
          </div>
        </div>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
          <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
              <Image src={css} width='64px' height='64px' alt='/' />
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h3>CSS</h3>
            </div>
          </div>
        </div>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
          <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
              <Image src={js} width='64px' height='64px' alt='/' />
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h3>JavaScript</h3>
            </div>
          </div>
        </div>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
          <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
              <Image src={react} width='64px' height='64px' alt='/' />
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h3>React</h3>
            </div>
          </div>
        </div>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
          <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
              <Image src={sass} width='64px' height='64px' alt='/' />
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h3>Sass</h3>
            </div>
          </div>
        </div>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
          <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
              <Image src={ts} width='64px' height='64px' alt='/' />
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h3>TypeScript</h3>
            </div>
          </div>
        </div>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
          <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
              <Image src={bootstrap} width='64px' height='64px' alt='/' />
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h3>BootStrap</h3>
            </div>
          </div>
        </div>

        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
          <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
              <Image src={tailwind} width='64px' height='64px' alt='/' />
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h3>Tailwind</h3>
            </div>
          </div>
        </div>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
          <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
              <Image src={firebase} width='64px' height='64px' alt='/' />
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h3>Firebase</h3>
            </div>
          </div>
        </div>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
          <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
              <Image src={git} width='64px' height='64px' alt='/' />
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h3>Git</h3>
            </div>
          </div>
        </div>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
          <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
              <Image src={Github} width='64px' height='64px' alt='/' />
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h3>Github</h3>
            </div>
          </div>
        </div>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
          <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
              <Image src={nextjs} width='64px' height='64px' alt='/' />
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h3>NextJS</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Skills;
