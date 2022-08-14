import Image from 'next/image';
import React from 'react';
import Noticias from '../public/news/news.png';
import Link from 'next/link';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';

const News = () => {
  return (
    <div id='news' className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#16a34a]'>
          Notícias
        </p>
        <h3 className='py-4'>Últimas notícias sobre ecologia e clima:</h3>
        <div className='grid grid-cols-2 lg:grid-cols-2 gap-4'>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <a href="https://g1.globo.com/meio-ambiente/noticia/2022/08/12/o-que-sao-os-raios-secos-causadores-de-incendios-florestais-devastadores.ghtml" target="_blank">
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Noticias} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>O que são os 'raios secos', causadores de incêndios florestais devastadores.</h3>
              </div>
            </div>
            </a>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <a href="https://g1.globo.com/meio-ambiente/noticia/2022/08/12/o-que-sao-os-raios-secos-causadores-de-incendios-florestais-devastadores.ghtml" target="_blank">
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Noticias} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>O que são os 'raios secos', causadores de incêndios florestais devastadores.</h3>
              </div>
            </div>
            </a>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <a href="https://g1.globo.com/meio-ambiente/noticia/2022/08/12/o-que-sao-os-raios-secos-causadores-de-incendios-florestais-devastadores.ghtml" target="_blank">
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Noticias} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>O que são os 'raios secos', causadores de incêndios florestais devastadores.</h3>
              </div>
            </div>
            </a>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <a href="https://g1.globo.com/meio-ambiente/noticia/2022/08/12/o-que-sao-os-raios-secos-causadores-de-incendios-florestais-devastadores.ghtml" target="_blank">
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Noticias} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>O que são os 'raios secos', causadores de incêndios florestais devastadores.</h3>
              </div>
            </div>
            </a>
          </div>
        </div>
      </div>

      <div className='flex justify-center py-12'>
        <Link href='/'>
          <a>
            <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
              <HiOutlineChevronDoubleUp
                className='text-[#16A34A]'
                size={30}
              />
            </div>
          </a>
        </Link>
      </div>

    </div>
  );
};

export default News;
