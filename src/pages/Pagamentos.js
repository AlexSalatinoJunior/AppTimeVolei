import { NavLink, Link } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"

const Pagamentos = () => {

  const url = "http://localhost:3000/pagamentos"
  const {data, loading, error} = useFetch(url)
  console.log(data)

  return (
    <div>
      <h2>Pagamentos</h2>
      <NavLink to="/novo-pagamento">Novo pagamento</NavLink>
      <ul>
        {error && <p>{error.message}</p>}
        {loading && <p>Carregando</p>}
        {data && !error && !loading && data.map((pagamento) => (
          <li key={pagamento.id} className="pagamento-item">
            <p>{pagamento.dia}</p>
            <p>{pagamento.finalidade}</p>
            <p>{pagamento.valor}</p>
            <Link to={`/pagamentos/${pagamento.id}`}>Editar pagamento</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Pagamentos