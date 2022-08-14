import React from 'react';
import Head from 'next/head';
import { FaFacebookF, FaGoogle, FaTwitter, FaRegEnvelope, FaRegUser } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";

const login = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
        <Head>
          <title>EarthHelp</title>
          <link href='/favicon.ico'/>
        </Head>

        <section className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
            <div className="w-3/5 p-4">
              <p className="text-green-600 font-bold text-start text-left">Earth<span className="text-black">Help</span> </p>
              <h2 className="text-2xl mb-2 font-bold text-green-600 my-8">Entre na sua conta</h2>
              <div className="border-2 w-10  border-green-600 inline-block mb-2"></div>
              <div className="flex justify-center my-2 gap-2">
                <a href="#" className="border-2 border-gray-200 p-2 rounded-full">
                  <FaFacebookF className="text-sm" />
                </a>
                <a href="#" className="border-2 border-gray-200 p-2 rounded-full">
                  <FaGoogle className="text-sm" />
                </a>
                <a href="#" className="border-2 border-gray-200 p-2 rounded-full">
                  <FaTwitter className="text-sm" />
                </a>
              </div>
              <p className="text-sm mb-2 text-gray-400 my-4">Ou use sua conta de e-mail.</p>
              <div className="flex flex-col items-center">
                <div className="bg-gray-100 w-64 p-3 flex gap-2 rounded-full align-center mb-2">
                  <FaRegEnvelope className="text-gray-400 text-xl" />
                  <input type="email" required className="bg-gray-100 text-sm outline-none text-gray-500" placeholder="E-mail" />
                </div>
                <div className="bg-gray-100 w-64 p-3 flex gap-2 rounded-full align-center">
                  <MdLockOutline className="text-gray-400 text-xl" />
                  <input
                    type="password"
                    className="bg-gray-100 text-sm outline-none text-gray-500"
                    placeholder="Senha"
                  />
                </div>
                <div className="flex justify-between w-64 my-2">
                  <label className="text-xs">
                    <input type="checkbox" required className="text-sm" placeholder="Password" /> Lembre-me
                  </label>
                  <a href="#" className="text-xs">
                    Esqueceu sua senha?
                  </a>
                </div>
                <a href="/forms" className="border-2 border-green-600 text-green-600 rounded-full px-10 py-1.5 inline-block mt-2 transition-all hover:bg-green-600 hover:text-white"> Entrar </a>
              </div>
            </div>

            {/* Cadastre-se */}

            <div className="w-3/5 p-5 bg-green-600 text-white rounded-tr-2xl rounded-br-2xl py-8 px-2">
              <h2 className="text-2xl mb-2 font-bold">Oi, amigos!</h2>
              <div className="border-2 w-10  border-white inline-block mb-2"></div>
              <p className="text-sm mb-4">Ainda não possui cadastro? <br></br> Preencha as informações pessoais:</p>
              <div className="flex flex-col items-center">
                <div className="bg-gray-100 w-64 p-3 flex gap-2 rounded-full align-center mb-2">
                  <FaRegEnvelope className="text-gray-400 text-xl" />
                  <input type="email" required className="bg-gray-100 text-sm outline-none text-gray-500" placeholder="E-mail" />
                </div>
                <div className="bg-gray-100 w-64 p-3 flex gap-2 rounded-full align-center mb-2">
                  <FaRegUser className="text-gray-400 text-xl" />
                  <input type="text" required mask="###.###.####-##" className="bg-gray-100 text-sm outline-none text-gray-500" placeholder="CPF" />
                </div>
                <div className="bg-gray-100 w-64 p-3 flex gap-2 rounded-full align-center mb-2">
                  <MdLockOutline className="text-gray-400 text-xl" />
                  <input type="password" required className="bg-gray-100 text-sm outline-none text-gray-500" placeholder="Senha" />
                </div>
                <div className="bg-gray-100 w-64 p-3 flex gap-2 rounded-full align-center">
                  <MdLockOutline className="text-gray-400 text-xl" />
                  <input type="password" required className="bg-gray-100 text-sm outline-none text-gray-500" placeholder="Confirmar senha" />
                </div>
              </div>
              <a href="#" className="border-2 border-white rounded-full px-10 py-1.5 inline-block mt-2 transition-all hover:bg-white hover:text-green-600"> Cadastrar </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default login;
