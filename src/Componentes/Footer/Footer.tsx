import { FaWhatsapp } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";


export const Footer = () => {
  const data = new Date();
  const ano = data.getFullYear();


  return (
    <>
   <div className='w-full bg-[#0D1B2A] py-12'>
    <div className='grid grid-cols-1 md:grid-cols-2 px-12'>
      <div className='flex flex-col'>
        <h2 className='text-white'>Fale conosco</h2>
        <div className='flex items-center my-2 gap-2'>
          <FaWhatsapp className='text-yellow-500' />
          <p className='text-white'>(11) 98765-4321</p>
        </div>
        <div className='flex items-center my-2 gap-2'>
          <FaInstagram className='text-yellow-500' />
          <p className='text-white'>@advogado</p>
        </div>
        <div className='flex items-center my-2 gap-2'>
          <MdOutlineMailOutline className='text-yellow-500' />

          <p className='text-white'>advogado@advogado.com</p>

        </div>
      </div>
      <iframe
        title="Mapa de Fortaleza"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15932.083349960586!2d-38.54339421700325!3d-3.7304519464232376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c746299b8b43db%3A0x2c43707c0b75674!2sFortaleza%2C%20CE!5e0!3m2!1spt-BR!2sbr!4v1691357157497!5m2!1spt-BR!2sbr"
        width="100%"
        height="100%"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
          className="w-full mt-10 md:mt-0 md:w-[500px] h-[200px] border-0 rounded-md"

      ></iframe>
    </div>
   </div>
   <div className='bg-[#07121E] py-4'>
    <p className='text-white text-center'>© Todos os direitos reservados - {ano}</p>
   </div>
        </>
  )
}
