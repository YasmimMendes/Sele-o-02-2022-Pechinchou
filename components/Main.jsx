import React from 'react';
import { FaFacebookF, FaGoogle, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>

          <h1 className='py-4 text-gray-700'>
            Olá, seja bem-vindo ao <span className='text-[#16a34a]'> EarthHelp!</span>
          </h1>

          <h3 className='py-2 text-gray-700'>Sistema Online para Denúncias Contra Crimes Ambientais.</h3>
          
          <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto'>
            A consciência é a principal ferramenta de preservação e conservação do meio ambiente, <span className='text-[#16a34a]'> <a href='/login'>DENUNCIE!</a></span>
          </p>

          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a href='/' target='_blank' rel='noreferrer'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'><FaEnvelope /></div>
            </a>
            <a href='/' target='_blank' rel='noreferrer'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'><FaFacebookF /></div>
            </a>
            <a href='/' target='_blank' rel='noreferrer'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'><FaGoogle /></div>
            </a>
            <a href='/' target='_blank' rel='noreferrer'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'><FaTwitter /></div>
            </a>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Main;
