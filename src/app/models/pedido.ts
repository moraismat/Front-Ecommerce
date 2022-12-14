import { Cliente } from "./Cliente";
import { Pagamento } from "./pagamento";

export interface Pedido{
    id: string,
    pagamento: Pagamento,
    total: string,
    cliente: Cliente
}
