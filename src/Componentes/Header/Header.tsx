import React from 'react';
import fotoAdvogado1 from '../../assets/fotoAdvogado1.svg';
import Qualidade from '../Qualidade/Qualidade';
import { FaWhatsapp } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-[#0D1B2A] py-12 px-12 text-white relative">
      {/* Conteúdo do header */}
      <div className="container mx-auto px-9 md:px-12 flex flex-col md:flex-row items-center justify-between gap-16">

        
        {/* Texto */}
        <div className="w-full md:w-1/2 max-w-lg text-center md:text-left space-y-4">
          <h1 className="text-2xl w-[180px] md:w-full md:text-4xl font-bold leading-snug">

            Foi demitido injustamente? <br />
            Reivindique seus direitos com quem entende!
          </h1>
          <p className="text-lg md:text-xl">
            Análise gratuita do seu caso em menos de 24h
          </p>
          <button className="text-[10px] md:text-[16px] bg-[#FFD60A] text-[#0D1B2A] w-[200px] md:w-auto px-10 py-2 rounded-full font-semibold shadow-lg hover:bg-[#ffc107] transition duration-300 flex items-center justify-center cursor-pointer gap-2">




            Quero uma avaliação gratuita
            <FaWhatsapp className="text-xl text-green-500" />
          </button>
        </div>

        {/* Imagem */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img src={fotoAdvogado1} alt="Advogado" className=" hidden md:block max-w-xs md:max-w-sm lg:max-w-md object-contain" />
        </div>
      </div>

      {/* Qualidade sobreposto */}
      <div className="
      absolute
    left-1/2
    bottom-[-15rem]    /* empurra mais pra baixo em mobile */
    transform
    -translate-x-1/2
    w-[90%]           /* deixa quase a largura toda em mobile */
    md:w-4/5
    md:bottom-0       /* volta para posição original no desktop */
    md:translate-y-1/2 ">


        <Qualidade />
      </div>
    </header>
  );
};

export default Header;
