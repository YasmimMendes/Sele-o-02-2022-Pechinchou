import React from 'react';
import Image from 'next/image';
import AboutImg from '../public/about.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#16a34a]'>
            Sobre
          </p>
          <h2 className='py-4'>Quem nós somos?</h2>
          <p className='py-2 text-gray-600'>
            Somos uma instituição dedicada à conservação da biodiversidade em bases científicas.
            Atuamos em pesquisas, educação ambiental e programas de negócios sustentáveis que ampliem a responsabilidade socioambiental de comunidades.
            <br></br><span className='text-[#16a34a]'> <a href='/login'>Cadastre-se</a> </span>em nosso site para fazer denúncias e contribuir com a preservação ambiental!
          </p>
        </div>
        <div className='w-full h-auto m-auto rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;