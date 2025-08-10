import React from "react";
import { FaExclamationCircle, FaHourglassHalf, FaHandHoldingUsd, FaBriefcaseMedical, FaGavel, FaPiggyBank } from "react-icons/fa";
import vector from '../../assets/Vector2.svg'
import vector1 from '../../assets/Vector1.svg'
const Atuacao = () => {
  return (
    <div className="bg-[#F2F2F2] w-full">


        <img src={vector} className="w-[50%] h-[50%]" alt="" />
      <section className="bg-[#0D1B2A] text-white py-12 px-6">


      <div className="max-w-6xl mx-auto">
        {/* Título */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Áreas de atuação
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Item */}
          <div className="flex flex-col items-center text-center">
            <FaGavel className="text-yellow-500 text-4xl mb-3" />
            <h3 className="font-semibold">Demissão Sem Justa Causa</h3>
            <p className="text-sm text-gray-300">
              Podemos reverter a demissão e buscar todos os seus direitos.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <FaExclamationCircle className="text-yellow-500 text-4xl mb-3" />
            <h3 className="font-semibold">Assédio Moral no Trabalho</h3>
            <p className="text-sm text-gray-300">
              Situações humilhantes ou abusivas? Você tem direito a se proteger.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <FaHourglassHalf className="text-yellow-500 text-4xl mb-3" />
            <h3 className="font-semibold">Horas Extras não pagas</h3>
            <p className="text-sm text-gray-300">
              Trabalhou a mais e não recebeu? Lutamos por seus direitos.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <FaPiggyBank className="text-yellow-500 text-4xl mb-3" />
            <h3 className="font-semibold">FGTS não depositado</h3>
            <p className="text-sm text-gray-300">
              O não pagamento do FGTS é ilegal — vamos atrás dos seus direitos.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <FaHandHoldingUsd className="text-yellow-500 text-4xl mb-3" />
            <h3 className="font-semibold">Verbas Rescisórias não pagas</h3>
            <p className="text-sm text-gray-300">
              Não recebeu tudo que é seu na rescisão? Vamos cobrar por você.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <FaBriefcaseMedical className="text-yellow-500 text-4xl mb-3" />
            <h3 className="font-semibold">Acidente ou Doença no Trabalho</h3>
            <p className="text-sm text-gray-300">
              Problemas de saúde causados pela empresa? Você pode ter direito à indenização.
            </p>
          </div>
        </div>

        {/* Botão */}
        <div className="flex justify-center mt-12">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-6 rounded-full flex items-center gap-2">
            Fale Conosco
          </button>
        </div>
      </div>
    </section>
    <img src={vector1} className="w-[50%] h-[50%] absolute right-0 md:pt-14 -translate-y-1/2"  alt="" />




    </div>

  );
};

export default Atuacao;
