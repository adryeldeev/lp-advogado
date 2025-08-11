import Atuacao from './Componentes/Atuacao/Atuacao'
import Contato from './Componentes/Contato/Contato'
import { Footer } from './Componentes/Footer/Footer'
import Header from './Componentes/Header/Header'
import Sobre from './Componentes/Sobre/Sobre'
function App() {
  return (
    <div>
      <Header />
      <Sobre />
      <Atuacao />
      <Contato/>
      <Footer/>
    </div>
  )
}

export default App
