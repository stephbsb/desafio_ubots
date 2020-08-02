import {
  getOrderedList,
  getHistoryByClient,
} from "../../../shared/gateway/QueryGateway";

/* retorna lista de todos os clientes e o historico de compras de cada e a quantidade de compras realizadas*/
export const getClientHistoryList = (clients, history) => {
  const list = clients.map((client) => {
    const ClientHistory = getHistoryByClient(history, client.cpf);

    return {
      cliente: client,
      historico: ClientHistory,
      quantidade: ClientHistory.length,
    };
  });

  return list;
};

// Função chamada pela view - irá chamar outras funções:
export const getLoyalClients = (clients, history) => {
  const list = getClientHistoryList(clients, history);
  const loyalClientsList = getOrderedList(list, "quantidade", "DEC").slice(
    0,
    3
  );
  return loyalClientsList;
};
