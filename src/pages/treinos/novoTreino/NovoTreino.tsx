import "./NovoTreino.css"
import React from 'react'
import { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const NovoTreino = () => {

    const navigate = useNavigate()
    const url = "http://localhost:3000/treinos/"
    const [foco, setFoco] = useState<string>()
    const [date, setDate] = useState<string>()
    const [local, setLocal] = useState<string>()
    const [horarioInicio, setHorarioInicio] = useState<string>()
    const [horarioTermino, setHorarioTermino] = useState<string>()
    const [valor, setValor] = useState<string>()
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>()

    const handleSubmit = async () => {
        const treino = {
            foco,
            date,
            local,
            horarioInicio,
            horarioTermino,
            valor
        }
        setLoading(true)
        await axios.post(url, treino)
            .then(() => {
                setLoading(false)
                navigate(-1)
            })
            .catch((err) => {
                setError(err)
                console.log(err)
            })
    }

  return (
    <div className='novoTreino'>
        <div className='box'>
            <h3>Criar novo treino</h3>
            {error && <p>Ocorreu um erro</p>}
            {loading && <p>Carregando...</p>}
            {!loading && !error &&
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Foco do treino</p>
                    <input type="text" onChange={(e) => setFoco(e.target.value)}></input>
                </label>
                <label>
                    <p>Data</p>
                    <input type="date" required onChange={(e) => setDate(e.target.value)}></input>
                </label>
                <label>
                    <p>Local</p>
                    <input type="text" required onChange={(e) => setLocal(e.target.value)}></input>
                </label>
                <label>
                    <p>Horário inicio</p>
                    <input type="time" required onChange={(e) => setHorarioInicio(e.target.value)}></input>
                </label>
                <label>
                    <p>Horário término</p>
                    <input type="time" required onChange={(e) => setHorarioTermino(e.target.value)}></input>
                </label>
                <label>
                    <p>Valor</p>
                    <input type="number" onChange={(e) => setValor(e.target.value)}></input>
                </label>
                <button type='submit'>Criar</button>
            </form>
            }
        </div>
    </div>
  )
}

export default NovoTreino