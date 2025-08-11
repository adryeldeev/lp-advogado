import { FaTrophy, FaGavel, FaComments } from 'react-icons/fa';

const Qualidade = () => {
  return (
    <div className="bg-[#0D1B2A] rounded-lg grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-700">

      
      {/* Item 1 */}
      <div className="flex items-center gap-3 py-4 px-6">
        <FaTrophy className="text-yellow-500 text-3xl flex-shrink-0" />
        <div>
          <h3 className="text-sm font-semibold">+90% de Causas Vencidas</h3>
          <p className="text-xs text-gray-100">Resultados sólidos em ações trabalhistas.</p>
        </div>
      </div>

      {/* Item 2 */}
      <div className="flex items-center gap-3 py-4 px-6">
        <FaGavel className="text-yellow-500 text-3xl flex-shrink-0" />
        <div>
          <h3 className="text-sm font-semibold">Especialista em Direito</h3>
          <p className="text-xs text-gray-100">Foco exclusivo em ações contra empresas e CLTs.</p>
        </div>
      </div>

      {/* Item 3 */}
      <div className="flex items-center gap-3 py-4 px-6">
        <FaComments className="text-yellow-500 text-3xl flex-shrink-0" />
        <div>
          <h3 className="text-sm font-semibold">Atendimento Humanizado</h3>
          <p className="text-xs text-gray-100">Ouvido atento, respeito e agilidade no processo.</p>
        </div>
      </div>

    </div>
  );
};

export default Qualidade;
