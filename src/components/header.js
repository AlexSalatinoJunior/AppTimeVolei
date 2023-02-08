import './header.css'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div className="header">
      <ul>
        <li>
          <NavLink activeclassname="active" to='/treinos'>Treinos</NavLink>
        </li>
        <li>
          <NavLink activeclassname="active" to='/avaliacoes'>Avaliações</NavLink>
        </li>
        <li>
          <NavLink activeclassname="active" to='/atletas'>Atletas</NavLink>
        </li>
        <li>
         <NavLink activeclassname="active" to='/'>Informativos</NavLink>
        </li>
        <li>
          <NavLink activeclassname="active" to='/pagamentos'>Pagamentos</NavLink>
        </li>
        <li>
          <NavLink activeclassname="active" to='/perfil'>Perfil</NavLink>
        </li>
      </ul>
    </div>
  )
}
export default Header;