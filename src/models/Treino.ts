import Avaliacao from "./Avaliacao"

export default class Treino{
    id: string
    horarioInicio: string
    horarioTermino: string
    data: string
    local: string
    valor: number
    focoTreino: string
    avaliacaoRapida = new Avaliacao()
    avaliacaoIndividual = new Avaliacao()
}