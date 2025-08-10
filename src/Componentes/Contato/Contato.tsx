import React, { useState } from 'react';

interface Faq {
  pergunta: string;
  resposta: string;
}

const Contato: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        mensagem: '',
        telefone: '',
        especialidade: ''

      });
      const [errors, setErrors] = useState({
        nome: '',
        email: '',
        mensagem: '',
        telefone: '',
        especialidade: ''

      });


  const faqs: Faq[] = [
    {
      pergunta: "Quais são os direitos ao ser demitido sem justa causa?",
      resposta: "Você tem direito a aviso prévio, saque do FGTS, multa de 40% do FGTS, seguro-desemprego e demais verbas rescisórias."
    },
    {
      pergunta: "Tenho direito a hora extra não paga?",
      resposta: "Sim, é possível solicitar judicialmente o pagamento de horas extras não registradas ou não pagas corretamente."
    },
    {
      pergunta: "Posso processar por assédio moral no trabalho?",
      resposta: "Sim, é possível entrar com ação indenizatória por danos morais se houver provas de assédio moral no ambiente de trabalho."
    },
    {
      pergunta: "Qual o prazo para reclamar meus direitos?",
      resposta: "O prazo prescricional é de até 2 anos após o término do contrato, podendo reclamar de verbas dos últimos 5 anos."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const handleSubmit = (e: React.FormEvent)=>{
    e.preventDefault()
    let valid = true
    if(!formData.nome){
      setErrors({...errors, nome: 'Nome é obrigatório'})
      valid = false
    }
    if(!formData.email){
      setErrors({...errors, email: 'Email é obrigatório'})
      valid = false
    }
    if(!formData.mensagem){
      setErrors({...errors, mensagem: 'Mensagem é obrigatória'})
      valid = false
    }
    if(!formData.telefone){
      setErrors({...errors, telefone: 'Telefone é obrigatório'})
      valid = false
    }
    if(!formData.especialidade){
      setErrors({...errors, especialidade: 'Especialidade é obrigatória'})
      valid = false
    }

    if(valid){
      console.log('Formulário válido', formData)
      alert('Formulário enviado com sucesso')

    }
    else{
      console.log('Formulário inválido', errors)
      alert('Preencha o formulário corretamente')

    }




  }
  return (
    <div className="bg-[#F2F2F2] py-12">
      <div className="container w-[80%] mx-auto mt-20 md:mt-40 bg-[#0D1B2A] p-8 rounded-md shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-white">
          
          {/* FAQ */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Ficou com alguma dúvida?</h2>
            <p className="mb-6">Perguntas Frequentes</p>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-500 pb-2">
                  <button
                    type="button"
                    className="w-full text-left font-semibold flex justify-between items-center"
                    onClick={() => toggleFaq(index)}
                  >
                    {faq.pergunta}
                    <span className='cursor-pointer'>{openIndex === index ? "-" : "+"}</span>
                  </button>
                  {openIndex === index && (
                    <p className="mt-2 text-gray-300">{faq.resposta}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Formulário */}
          <div>
            <h3 className="text-lg mb-4">Consulta de caso</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="Nome" className="bg-transparent border-b border-gray-400 outline-none p-2" value={formData.nome} onChange={(e)=>setFormData({...formData, nome: e.target.value})} />
                <input type="email" placeholder="E-mail" className="bg-transparent border-b border-gray-400 outline-none p-2" value={formData.email} onChange={(e)=>setFormData({...formData, email: e.target.value})} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="Telefone" className="bg-transparent border-b border-gray-400 outline-none p-2" value={formData.telefone} onChange={(e)=>setFormData({...formData, telefone: e.target.value})} />

                <input type="text" placeholder="Especialidade" className="bg-transparent border-b border-gray-400 outline-none p-2" value={formData.especialidade} onChange={(e)=>setFormData({...formData, especialidade: e.target.value})} />
              </div>
              <textarea placeholder="Mensagem" rows={4} className="bg-transparent border-b border-gray-400 outline-none p-2 w-full" value={formData.mensagem} onChange={(e)=>setFormData({...formData, mensagem: e.target.value})}></textarea>
              <button type="submit" className="bg-[#E2B13C] text-black  cursor-pointer font-bold px-6 py-2 rounded-full hover:bg-yellow-500 transition">
                Enviar
              </button>
            </form>
            <div className='flex flex-col items-center mt-4'>



            {errors.nome && <p className="text-red-500">{errors.nome}</p>}
            {errors.email && <p className="text-red-500">{errors.email}</p>}
            {errors.mensagem && <p className="text-red-500">{errors.mensagem}</p>}
            {errors.telefone && <p className="text-red-500">{errors.telefone}</p>}
            {errors.especialidade && <p className="text-red-500">{errors.especialidade}</p>}
            {errors.telefone && <p className="text-red-500">{errors.telefone}</p>}
            </div>


          </div>

        </div>
      </div>
    </div>
  );
};


export default Contato;
