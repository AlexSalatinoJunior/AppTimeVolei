import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import './Treino.css'

const Treino = () => {

    const navigate = useNavigate()
    const {id} = useParams()
    const url = "http://localhost:3000/treinos/"
    const [treino, setTreino] = useState()
    const [loading, setLoading] = useState()
    const [error, setError] = useState()
    const [data, setData] = useState()

    useEffect(() => {
        const getTreino = async () => {
            setLoading(true)
            await axios.get(url+id)
                .then((resp) => {
                    setTreino(resp.data)
                    setLoading(false)
                    setData(new Date(resp.data.date).toLocaleDateString())
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
    <div className='treino-container'>
        {loading && <p>Carregando...</p>}
        {error && <p>Ocorreu um erro</p>}
        {treino && !loading && !error &&
        <div className='box-treino'>
            <button onClick={handleDelete}>Excluir treino</button>
            <div className='treino-info'>
                <p>Treino de {treino.foco} do dia {data}</p>
                <label>
                    <p>Foco:</p>
                    <p>{treino.foco}</p>
                </label>
                <label>
                    <p>Data:</p>
                    <p>{data}</p>
                </label>
                <label>
                    <p>Horario inicio:</p>
                    <p>{treino.horarioInicio}</p>
                </label>
                <label>
                    <p>Horario término:</p>
                    <p>{treino.horarioTermino}</p>
                </label>
                <label>
                    <p>Local:</p>
                    <p>{treino.local}</p>
                </label>
                <label>
                    <p>Valor:</p>
                    <p>{treino.valor}</p>
                </label>
            </div>
            <div className='botoes-avaliacao'>
                <Link to={`/treino/${treino.id}/avaliacao-rapida`}>
                    <button>Avaliacao<br></br>rápida</button>
                </Link>
                <Link to={`/avaliacoes/avaliacao-completa/${treino.id}`}>
                    <button>Avaliacao<br></br>completa</button>
                </Link>
            </div>
        </div>
        }
    </div>
  )
}

export default Treino