import React from 'react';
import Head from 'next/head';

const Forms = () => {

  return (
    <>
    <div id='forms' className='w-full lg:h-screen p-2'>
        <Head>
          <title>EarthHelp</title>
          <link href='/favicon.ico'/>
        </Head>

        <div className='max-w-[1240px] m-auto px-2 py-24'>

          <p className='text-xl tracking-widest uppercase text-[#16A34A]'> Denuncie </p>
          <h3 className='py-4'>Cadastre sua denúncia:</h3>
          <div className='grid gap-2'>
            <div className='col-span-3 shadow-xl shadow-gray-400 rounded-xl p-2'>
              <div className='p-2 rounded-xl'>
                <form action='https://getform.io/f/0cea69d3-d0e2-4265-a55e-d614843c9f43' method='POST' enctype='multipart/form-data'>

                  <div className='grid grid-cols-2 gap-4 py-2'>
                    <div className='flex flex-col'>
                      <label className='text-sm py-2'>Data</label>
                      <input className='border-2 rounded-lg p-2 flex border-gray-300' type='date'/>
                    </div>
                    <div className='flex flex-col'>
                      <label className='text-sm py-2'>Hora</label>
                      <input className='border-2 rounded-lg p-2 flex border-gray-300' type='time'/>
                    </div>
                  </div>
                  <div className='flex flex-col py-2'>
                    <label className='text-sm py-2'>Local</label>
                    <input className='border-2 rounded-lg p-2 flex border-gray-300' type='text'/>
                  </div>
                  <div className='grid grid-cols-2 gap-4 py-2'>
                    <div className='flex flex-col'>
                      <label className='text-sm py-2'>Latitude</label>
                      <input className='border-2 rounded-lg p-2 flex border-gray-300' type='latitude' />
                    </div>
                    <div className='flex flex-col'>
                      <label className='text-sm py-2'>Longitude</label>
                      <input className='border-2 rounded-lg p-2 flex border-gray-300' type='longitude' />
                    </div>
                  </div>
                  <div className='flex flex-col py-2'>
                    <label className='text-sm py-2'>Descrição do crime</label>
                    <textarea className='border-2 rounded-lg p-2 border-gray-300' rows='5' name='message'></textarea>
                  </div>
                  <button className='p-2 text-gray-100 mt-2'>
                    Enviar
                  </button>
                  
                </form>
              </div>
            </div>
          </div>

        </div>
    </div>
    </>
  );
};

export default Forms;

