import {
  getOrderedList,
  getHistoryByClient,
} from "../../../shared/gateway/QueryGateway";

/* 
Descrição: Esta função irá retornar uma lista com os clientes e o valor total de compras feito por cada

Retorna: [{cliente: Object, valorTotal: Number}]

*/
export const getClientTotalValue = (clients, history) => {
  // iteração para que a lógica aconteça com todos os clientes
  const list = clients.map((client) => {
    // Função usada para pegar todo o histórico de compras do cliente
    const ClientHistory = getHistoryByClient(history, client.cpf);

    // Função que irá somar os valores
    const valorTotal = ClientHistory.reduce(function (prevVal, historyItem) {
      return prevVal + historyItem.valorTotal;
    }, 0);

    return {
      cliente: client,
      valorTotal: valorTotal,
    };
  });

  //retorna array de objetos contendo o nome do cliente e o valor total de compras realizadas
  return list;
};

// Função chamada pela view - irá chamar outras funções:
/* 
Descrição: Esta função irá retornar uma lista com os clientes e o valor total de compras feito por cada

Retorna: Lista gerada por getClientTotalValue, ordenada de forma decrescente.

*/
export const getListOrderedByTotalValue = (clients, history) => {
  const list = getClientTotalValue(clients, history);
  const orderedListTemp = getOrderedList(list, "valorTotal", "DEC");

  return orderedListTemp;
};
