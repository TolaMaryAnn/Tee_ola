'use client'


import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import contact from '../public/assets/contact.jpg'
import { db } from './firebase';
import { addDoc, collection } from 'firebase/firestore'


const Contact = () => {
 

  const [name, setName] = useState('');
  const [phonenumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [loader, setLoader] = useState(false);
  const userCollectionRef = collection(db, "contact")

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);


  addDoc(userCollectionRef, {
    name: name,
    phonenumber: phonenumber,
    email: email,
    subject: subject,
    message: message,
  })
      .then(() => {
        alert('Message has been successfully sent \uD83D\uDE0A👍');
        setLoader(false);
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName('');
    setPhoneNumber('');
    setEmail('');
    setSubject('');
    setMessage('');
  };
  
  return (
    <div id='contact' className='w-full lg:h-screen font-[Raleway]'>
    <div className='max-w-[1240px] m-auto px-2 py-16 w-full '>
      <p className='text-2xl font-bold tracking-widest uppercase text-[#c69c72]'>
        Contact
      </p>
      <h2 className='py-4 text-xl'>Get In Touch</h2>
      <div className='grid lg:grid-cols-5 gap-8'>
        {/* left */}
        <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
          <div className='lg:p-4 h-full '>
            <div>
              <Image
                className='rounded-xl hover:scale-105 ease-in duration-300'
                src={contact}
                alt='/'
              />
            </div>
            <div>
              <h2 className='py-2'>Tola MaryAnn</h2>
              <p>Front-End Developer</p>
              <p className='py-4'>
                I am available for freelance or Remote job positions. Contact
                me and let&apos;s talk.
              </p>
            </div>
            <div>
              <p className='uppercase pt-8'>Connect With Me</p>
              <div className='flex items-center justify-between py-4'>
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

               <Link href="">
               <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                
                <AiOutlineMail /> tolaoje2004@gmail.com
                
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

        {/* right */}
        <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
          <div className='p-4'>
            <form
              // action='https://getform.io/f/08ebcd37-f5b5-45be-8c13-714f011ce060'
              // method='POST'
              // encType='multipart/form-data'
              onSubmit={handleSubmit}
            >
              <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                <div className='flex flex-col'>
                  <label className='uppercase text-sm py-2'>Name</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='text'
                    name='name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className='flex flex-col'>
                  <label className='uppercase text-sm py-2'>
                    Phone Number
                  </label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='text'
                    name='phone'
                   value={phonenumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
              </div>
              <div className='flex flex-col py-2'>
                <label className='uppercase text-sm py-2'>Email</label>
                <input
                  className='border-2 rounded-lg p-3 flex border-gray-300'
                  type='email'
                  name='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className='flex flex-col py-2'>
                <label className='uppercase text-sm py-2'>Subject</label>
                <input
                  className='border-2 rounded-lg p-3 flex border-gray-300'
                  type='text'
                  name='subject'
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>
              <div className='flex flex-col py-2'>
                <label className='uppercase text-sm py-2'>Message</label>
                <textarea
                  className='border-2 rounded-lg p-3 border-gray-300'
                  rows='10'
                  name='message'
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}

                ></textarea>
              </div>
              <button className='w-full p-4 text-gray-100 mt-4 bg-[#c69c72]' style={{background : loader ? "#ccc" : "#c69c72"}}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className='flex justify-center py-12'>
        <Link href='/'>
          
            <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
              <HiOutlineChevronDoubleUp
                className='text-[#5651e5]'
                size={30}
              />
            </div>
          
        </Link>
      </div>
    </div>
  </div>
  );
}

export default Contact;
