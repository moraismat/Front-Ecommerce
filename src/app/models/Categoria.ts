import { Produto } from "./Produto";

export interface Categoria {
    id: string,
    name: string,
    produtos: Produto[]
}
