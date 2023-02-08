import "./Treinos.css"
import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

const Treinos = () => {

  const url = "http://localhost:3000/treinos/"
  const [treinos, setTreinos] = useState()
  const [loading, setLoading] = useState()
  const [error, setError] = useState()
  const [date] = useState(new Date())
  const [data, setData] = useState()

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
    <div className="treinos">
      <h2>Treinos</h2>
      <Link to="/novo-treino" className="link-novo-treino">
        <button>Novo treino</button>
      </Link>
      {loading && <p>Carregando...</p>}
      {error && <p>Ocorreu um erro</p>}
      <h3>Proximos treinos</h3>
      <ul className="lista-treinos">
        {!loading && !error && treinos && treinos.map((treino) => {
          if(tratarData(treino.date)){
            var data = new Date(treino.date).toLocaleDateString()
            return (
              <Link to={`/treino/${treino.id}`} key={treino.id}>
                <li>
                  <p>Foco: {treino.foco}</p>
                  <p>Data: {data}</p>
                  <p>Local: {treino.local}</p>
                </li>
              </Link>
            )}
            return null
          })}
      </ul>
      <h3>Outros treinos</h3>
      <ul className="lista-treinos">
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