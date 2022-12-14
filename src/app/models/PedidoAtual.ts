import { ItemPedido } from "./ItemPedido";
import { Pagamento } from "./pagamento";

export interface PedidoAtual {
    cliente_id: string,
    pagamentoRequest: Pagamento,
    lstItemPedidoRequest: ItemPedido[]
}
