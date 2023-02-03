import { useState } from "react"
import { useFetch } from "../hooks/useFetch"
import { useNavigate } from "react-router-dom"

const NovoPagamento = () => {

  const url = "http://localhost:3000/pagamentos"

  const {loading, error, httpConfig} = useFetch(url)
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
    httpConfig(pagamento, "POST")
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