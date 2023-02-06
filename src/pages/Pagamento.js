import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useForm } from "react-hook-form"
import axios from "axios"

const Pagamento = () => {

  const {id} = useParams()
  const url = "http://localhost:3000/pagamentos/" + id
  const [loading, setLoading] = useState()
  const [error, setError] = useState()
  const [valor, setValor] = useState()
  const [finalidade, setFinalidade] = useState()
  const [dia, setDia] = useState()
  const navigate = useNavigate()
  const { register, reset} = useForm()

  useEffect(() => {
    setLoading(true)
    axios.get(url)
      .then((response) => {
        console.log("Axios " + response.data)
        reset(response.data)
        setValor(response.data.valor)
        setFinalidade(response.data.finalidade)
        setDia(response.data.dia)
      })
      .catch((err) => {
        console.log(err)
        setError(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [reset, url])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const pagamento = {
      valor,
      finalidade,
      dia,
      id
    }
    console.log(pagamento)
    axios.put(url, pagamento)
    if(!error){
      navigate(-1)
    }
  }

  const handleDelete = (e) => {
    e.preventDefault()
    axios.delete(url)
      .catch((err) => {
        console.log(err)
        setError(err)
      })
      .then(() => {
        navigate(-1)
    })
  }

  return (
    <div>
      <h2>Registrar novo pagamento</h2>
      {error && <p>{error.message}</p>}
      {loading && <p>Carregando...</p>}
      {!error && !loading &&
        <form onSubmit={(e) => handleSubmit(e)}>
          <button onClick={(e) => handleDelete(e)}>Excluir pagamento</button>
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