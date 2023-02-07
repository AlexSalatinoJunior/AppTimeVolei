import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'

const Treino = () => {

    const navigate = useNavigate()
    const {id} = useParams()
    const url = "http://localhost:3000/treinos/"
    const [treino, setTreino] = useState()
    const [loading, setLoading] = useState()
    const [error, setError] = useState()

    useEffect(() => {
        const getTreino = async () => {
            setLoading(true)
            await axios.get(url+id)
                .then((resp) => {
                    setTreino(resp.data)
                    setLoading(false)
                })
                .catch((err) => {
                    setError(err)
                })
        }
        getTreino()
    }, [id])

    const handleDelete = () => {
        setLoading(true)
        axios.delete(url+id)
            .then(() => {
                setLoading(false)
                navigate(-1)
            })
            .catch((err) => {
                console.log(err)
                setError(err)
            })
    }

  return (
    <div>
        {loading && <p>Carregando...</p>}
        {error && <p>Ocorreu um erro</p>}
        {treino && !loading && !error &&
        <div>
            <button onClick={handleDelete}>Excluir treino</button>
            <div>
                <p>Treino de {treino.foco} do dia {treino.date}</p>
                <p>Foco: {treino.foco}</p>
                <p>Data: {treino.date}</p>
                <p>Horario inicio: {treino.horarioInicio}</p>
                <p>Horario término: {treino.horarioTermino}</p>
                <p>Local: {treino.local}</p>
                <p>Valor: {treino.valor}</p>
            </div>
            <Link to={`/treino/${treino.id}/avaliacao-rapida`}>Avaliacao rápida</Link>
            <Link to={`/avaliacoes/avaliacao-completa/${treino.id}`}>Avaliacao completa</Link>
        </div>
        }
    </div>
  )
}

export default Treino