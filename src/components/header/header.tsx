import React from 'react';
import './header.css'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div className="header">
      <ul>
        <li>
          <NavLink to='/treinos'>Treinos</NavLink>
        </li>
        <li>
          <NavLink to='/avaliacoes'>Avaliações</NavLink>
        </li>
        <li>
          <NavLink to='/atletas'>Atletas</NavLink>
        </li>
        <li>
         <NavLink to='/'>Informativos</NavLink>
        </li>
        <li>
          <NavLink to='/pagamentos'>Pagamentos</NavLink>
        </li>
        <li>
          <NavLink to='/perfil'>Perfil</NavLink>
        </li>
      </ul>
    </div>
  )
}
export default Header;