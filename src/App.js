import './App.css';
import Header from './components/header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Informativos from './pages/Informativos'
import Treinos from './pages/Treinos'
import Desempenho from './pages/Desempenho'
import Pagamentos from './pages/Pagamentos'
import Perfil from './pages/Perfil'
import Cadastro from './pages/Cadastro'
import Login from './pages/Login'
import NotFound from './pages/NotFound';
import NovoPagamento from './pages/NovoPagamento'
import Pagamento from './pages/Pagamento'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Informativos />} />
          <Route path="/treinos" element={<Treinos />} />
          <Route path="/desempenho" element={<Desempenho />} />
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
