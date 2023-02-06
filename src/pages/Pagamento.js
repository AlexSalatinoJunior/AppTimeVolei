import { useEffect, useState } from "react"
import { useFetch } from "../hooks/useFetch"
import { useNavigate, useParams } from "react-router-dom"
import { useForm } from "react-hook-form"

const Pagamento = () => {

  const {id} = useParams()
  const url = "http://localhost:3000/pagamentos/" + id
  const {data, loading, error, httpConfig} = useFetch(url)
  const [valor, setValor] = useState()
  const [finalidade, setFinalidade] = useState()
  const [dia, setDia] = useState()
  const navigate = useNavigate()
  const { register, reset} = useForm()

  useEffect(() => {
    if(data){
      reset(data)
    }
  }, [data, reset])

  const handleSubmit = async (e, method) => {
    e.preventDefault()
    const pagamento = {
      valor,
      finalidade,
      dia,
      id
    }
    httpConfig(pagamento, method)
    if(!error){
      navigate(-1)
    }
    console.log(pagamento)
  }

  return (
    <div>
      <h2>Registrar novo pagamento</h2>
      {error && <p>{error.message}</p>}
      {loading && <p>Carregando...</p>}
      {!error && data && !loading &&
        <form onSubmit={(e) => handleSubmit(e, "PUT")}>
          <button onClick={(e) => handleSubmit(e, "DELETE")}>Excluir pagamento</button>
          <label>
            <p>Valor</p>
            <input type="number" {...register("valor")} required onChange={(e) => setValor(e.target.value)} />
          </label>
          <label>
            <p>Finalidade</p>
            <input type="text" {...register("finalidade")} onChange={(e) => setFinalidade(e.target.value)} />
          </label>
          <label>
            <p>Data do pagamento</p>
            <input type="date" {...register("dia")} required onChange={(e) => setDia(e.target.value)} />
          </label>
          <input type="submit" />
        </form>
      }
    </div>
  )
}

export default Pagamento