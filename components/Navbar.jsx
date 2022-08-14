import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

import NavLogo from '../public/navLogo.png'

const Navbar = () => {
  const [shadow, setShadow] = useState(false);
  const [navBg] = useState('#ecf0f3');
  const [linkColor] = useState('#1f2937');

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={shadow ? 'fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300' : 'fixed w-full h-20 z-[100]'}>
      
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        
        <Link href='/'>
          <a>
            <Image src={NavLogo} alt='/' width='100px' height='70px' className='cursor-pointer'/>
          </a>
        </Link>

        <div>
          <ul style={{ color: `${linkColor}` }} className='hidden md:flex'>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/'>Início</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/#about'>Sobre</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/#news'>Notícias</Link>
            </li>
          </ul> 
        </div>

        <a href="/login">
          <button className='p-2 text-gray-100 mt-2'>
            Entrar/Cadastrar
          </button>
        </a>
      </div>

    </div>
  );
};

export default Navbar;
