import { useEffect, useState } from "react"
import { useFetch } from "../hooks/useFetch"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const NovoPagamento = () => {

  const url = "http://localhost:3000/pagamentos"

  const [error, setError] = useState()
  const [loading, setLoading] = useState()
  const [valor, setValor] = useState()
  const [finalidade, setFinalidade] = useState()
  const [dia, setDia] = useState()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const pagamento = {
      valor,
      finalidade,
      dia
    }
    setLoading(true)
    axios.post(url, pagamento)
      .then(() => {
        setLoading(false)
      })
      .catch((err) => {
        setError(err)
    })
    if(!error){
      navigate(-1)
    }
    console.log(pagamento)
  }

  return (
    <div>
      <h2>Registrar novo pagamento</h2>
      {loading && <p>Carregando...</p>}
      {error && <p>{error.message}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          <p>Valor</p>
          <input type="number" required onChange={(e) => setValor(e.target.value)} />
        </label>
        <label>
          <p>Finalidade</p>
          <input type="text" placeholder="mensalidade/uniforme/etc" onChange={(e) => setFinalidade(e.target.value)} />
        </label>
        <label>
          <p>Data do pagamento</p>
          <input type="date" required onChange={(e) => setDia(e.target.value)} />
        </label>
        <input type="submit" />
      </form>
    </div>
  )
}

export default NovoPagamento