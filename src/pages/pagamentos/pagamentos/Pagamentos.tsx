import { NavLink, Link } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import React from "react"
import Pagamento from "../../../models/Pagamento"

const Pagamentos = () => {

  const url = "http://localhost:3000/pagamentos"
  const [error, setError] = useState<Error>()
  const [loading, setLoading] = useState<boolean>()
  const [data, setData] = useState<Pagamento[]>()

  useEffect(() => {
    const getPagamentos = async () => {
      setLoading(true)
      axios.get(url)
        .then((resp) => {
          setData(resp.data)
          setLoading(false)
        })
        .catch((err) => {
          setError(err)
        })
    }
    getPagamentos()
  }, [])

  return (
    <div>
      <h2>Pagamentos</h2>
      <NavLink to="/novo-pagamento">Novo pagamento</NavLink>
      <ul>
        {error && <p>{error.message}</p>}
        {loading && <p>Carregando</p>}
        {data && !error && !loading && data.map((pagamento: Pagamento) => (
          <li key={pagamento.id} className="pagamento-item">
            <p>{pagamento.data}</p>
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