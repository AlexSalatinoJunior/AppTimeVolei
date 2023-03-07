import "./Treinos.css"
import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import Treino from "../../../models/Treino"
import React from "react"

const Treinos = () => {

  const url = "http://localhost:3000/treinos/"
  const [treinos, setTreinos] = useState<Treino[]>()
  const [loading, setLoading] = useState<boolean>()
  const [error, setError] = useState<Error>()
  const [date] = useState<Date>(new Date())
  const [data, setData] = useState<string>()

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

  const tratarData = (data: string) => {
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
        {!loading && !error && treinos && treinos.map((treino: Treino) => {
          if(tratarData(treino.data)){
            var data = new Date(treino.data).toLocaleDateString()
            return (
              <Link to={`/treino/${treino.id}`} key={treino.id}>
                <li>
                  <p>Foco: {treino.focoTreino}</p>
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
          if(!tratarData(treino.data)){
            return (
              <Link to={`/treino/${treino.id}`} key={treino.id}>
                <li>
                    <p>Foco: {treino.focoTreino}</p>
                    <p>Data: {treino.data}</p>
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