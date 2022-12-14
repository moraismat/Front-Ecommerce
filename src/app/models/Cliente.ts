import { Endereco } from "./Endereco";

export interface Cliente{
    id: string,
    name: string,
    telefone: string
    cpf: string,
    email: string,
    endereco: Endereco
}
