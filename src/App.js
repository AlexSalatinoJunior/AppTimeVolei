import './App.css'
import Header from './components/header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Informativos from './pages/Informativos'
import Treinos from './pages/treinos/Treinos'
import Pagamentos from './pages/pagamentos/Pagamentos'
import Perfil from './pages/Perfil'
import Cadastro from './pages/Cadastro'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import NovoPagamento from './pages/pagamentos/NovoPagamento'
import Pagamento from './pages/pagamentos/Pagamento'
import NovoTreino from './pages/treinos/NovoTreino'
import Treino from './pages/treinos/Treino'
import AvaliacaoRapida from "./pages/avaliacoes/AvaliacaoRapida"
import AvaliacaoCompleta from "./pages/avaliacoes/AvaliacaoCompleta"
import Avaliacoes from './pages/avaliacoes/Avaliacoes'
import Atletas from './pages/atletas/Atletas'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Informativos />} />
          <Route path="/treinos" element={<Treinos />} />
          <Route path="/treino/:id" element={<Treino />} />
          <Route path="/novo-treino" element={<NovoTreino />} />
          <Route path="/avaliacoes" element={<Avaliacoes />} />
          <Route path="/atletas" element={<Atletas />} />
          <Route path="/treino/:id/avaliacao-rapida" element={<AvaliacaoRapida />} />
          <Route path="/avaliacoes/:id/avaliacao-completa/" element={<AvaliacaoCompleta />} />
          <Route path="/pagamentos" element={<Pagamentos />} />
          <Route path="/pagamentos/:id" element={<Pagamento />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/novo-pagamento" element={<NovoPagamento />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
