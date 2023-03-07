import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useForm } from "react-hook-form"
import axios from "axios"
import React from "react"

const Pagamento = () => {

  const {id} = useParams()
  const url = "http://localhost:3000/pagamentos/" + id
  const [loading, setLoading] = useState<boolean>()
  const [error, setError] = useState<Error>()
  const [valor, setValor] = useState<string>()
  const [finalidade, setFinalidade] = useState<string>()
  const [dia, setDia] = useState<string>()
  const navigate = useNavigate()
  const { register, reset} = useForm()

  useEffect(() => {
    const getPagamento = async () => {
      setLoading(true)
      await axios.get(url)
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
    }
    getPagamento()
  }, [reset, url])

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    const pagamento = {
      valor,
      finalidade,
      dia,
      id
    }
    console.log(pagamento)
    await axios.put(url, pagamento)
    if(!error){
      navigate(-1)
    }
  }

  const handleDelete = async (e: any) => {
    e.preventDefault()
    await axios.delete(url)
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