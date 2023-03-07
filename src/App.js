import './App.css'
import Header from './components/header/header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Informativos from './pages/informativos/Informativos'
import Treinos from './pages/treinos/treinos/Treinos'
import Pagamentos from './pages/pagamentos/pagamentos/Pagamentos'
import Perfil from './pages/perfil/Perfil'
import Cadastro from './pages/cadastro/Cadastro'
import Login from './pages/login/Login'
import NotFound from './pages/notFound/NotFound'
import NovoPagamento from './pages/pagamentos/novoPagamento/NovoPagamento'
import Pagamento from './pages/pagamentos/pagamento/Pagamento'
import NovoTreino from './pages/treinos/novoTreino/NovoTreino'
import Treino from './pages/treinos/treino/TreinoPage'
import AvaliacaoRapida from "./pages/avaliacoes/avaliacaoRapida/AvaliacaoRapida"
import AvaliacaoCompleta from "./pages/avaliacoes/avaliacaoCompleta/AvaliacaoCompleta"
import Avaliacoes from './pages/avaliacoes/avaliacoes/Avaliacoes'
import Atletas from './pages/atletas/atletas/Atletas'
import React from 'react'

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
