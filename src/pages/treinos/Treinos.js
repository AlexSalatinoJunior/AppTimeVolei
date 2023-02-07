import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

const Treinos = () => {

  const url = "http://localhost:3000/treinos/"
  const [treinos, setTreinos] = useState()
  const [loading, setLoading] = useState()
  const [error, setError] = useState()
  const [date] = useState(new Date())

  useEffect(() => {
    const getTreinos = async () => {
      setLoading(true)
      await axios.get(url)
        .then((resp) => {
          setTreinos(resp.data)
          setLoading(false)
        })
        .catch((err) => {
          setError(err)
        })
    }
    getTreinos()
  }, [])

  const tratarData = (data) => {
    const dataInteira = new Date(data)
    if(dataInteira >= date){
      return true
    }
    return false
  }

  return (
    <div>
      <h2>Treinos</h2>
      <Link to="/novo-treino">Novo treino</Link>
      {loading && <p>Carregando...</p>}
      {error && <p>Ocorreu um erro</p>}
      <h3>Proximos treinos</h3>
      <ul>
        {!loading && !error && treinos && treinos.map((treino) => {
          if(tratarData(treino.date)){
            return (
              <Link to={`/treino/${treino.id}`} key={treino.id}>
                <li>
                  <p>Foco: {treino.foco}</p>
                  <p>Data: {treino.date}</p>
                  <p>Local: {treino.local}</p>
                </li>
              </Link>
            )}
            return null
          })}
      </ul>
      <h3>Outros treinos</h3>
      <ul>
        {!loading && !error && treinos && treinos.map((treino) => {
          if(!tratarData(treino.date)){
            return (
              <Link to={`/treino/${treino.id}`} key={treino.id}>
                <li>
                    <p>Foco: {treino.foco}</p>
                    <p>Data: {treino.date}</p>
                    <p>Local: {treino.local}</p>
                  </li>
                </Link>
            )}
            return null
        })}
      </ul>
    </div>
  )
}

export default Treinos