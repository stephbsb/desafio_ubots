import { getClientByCpf } from "../../../shared/gateway/QueryGateway";

// Função chamada pela view - irá chamar outras funções:
export const getBiggestOrder2016 = (clients, history) => {
  let biggestOrder = { valorTotal: 0 };

  // todo o historico inicial de compras será pesquisado para retornar o cpf do cliente correspondente à maior compra.
  history.forEach((historyItem) => {
    if (
      historyItem.valorTotal > biggestOrder.valorTotal &&
      historyItem.data.split("-").pop() === "2016"
    ) {
      biggestOrder = historyItem;
    }
  });

  // Chama a função que retorna os dados do cliente a partir do cpf.
  const client = getClientByCpf(clients, biggestOrder.cliente);

  // Retorna o cliente e a compra correspondente ao maior valor.
  return {
    cliente: client,
    compra: biggestOrder,
  };
};
