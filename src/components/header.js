import './header.css'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div className="header">
          <NavLink to='/treinos'>Treinos</NavLink>
          <NavLink to='/avaliacoes'>Avaliações</NavLink>
          <NavLink to='/atletas'>Atletas</NavLink>
          <NavLink to='/'>Informativos</NavLink>
          <NavLink to='/pagamentos'>Pagamentos</NavLink>
          <NavLink to='/perfil'>Perfil</NavLink>
    </div>
  )
}
export default Header;