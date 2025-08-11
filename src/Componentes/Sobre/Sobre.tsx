import perfilAdvogado from '../../assets/hotel-receptionist-work__1_-removebg-preview.png'

const Sobre = () => {
  return (
    <div className="bg-[#F2F2F2] py-16 mx-auto">


      <div className="flex flex-col md:flex-row md:items-center gap-12 md:gap-90 mt-44 md:mt-14 px-12">



        <img
          src={perfilAdvogado}
          alt="foto do advogado"
          className="max-w-xs md:w-115"
        />
        {/* Coloca flex-1 para o texto ocupar o espaço restante */}
        <div className="max-w-xl flex-1">
          <h2 className="text-[#D4AF37] font-semibold text-lg mb-2">Conheça</h2>
          <h3 className="font-extrabold text-2xl mb-4">Paulo Mendes</h3>
          <p className="text-gray-700 text-base leading-relaxed w-full md:w-[450px]">

            Com mais de 10 anos de experiência em causas trabalhistas, o Dr. Paulo Mendes já atendeu mais de 2.300 clientes em todo o Brasil com mais de 90% de causas ganhas.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Sobre
