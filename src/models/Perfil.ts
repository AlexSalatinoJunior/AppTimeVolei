import Endereco from './Endereco'

export default class Perfil{
    nome: string
    email: string
    dataNasc: string
    celular: string
    funcao: string
    posicao: string
    contatoResp: string
    endereco = new Endereco()
}