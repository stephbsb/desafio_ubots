/* Este arquivo simula logica de querys a banco de dados */
/* As funções recebem uma lista e um filtro e retornam o objeto filtrado */

/* FUNÇÕES COMPARTILHADAS  */

const getClientByCpf = (clients, clientCpf) => {
  if (!clientCpf.includes("-")) {
    clientCpf = "000.000.000-" + clientCpf.split(".").pop();
  }

  return clients.find((client) => client.cpf === clientCpf);
};

export const getHistoryByClient = (history, clientCpf) => {
  // cpf na lista de clientes: 000.000.000-XX
  // cpf no histico de compras: 000.000.000.XX ou 0000.000.000.XX (49/50 possuem um zero a mais no inicio)

  const clientCpfNew = clientCpf.replace("-", ".");

  const count = 0;

  return history.filter((historyItem) => {
    if (historyItem.cliente.length !== clientCpfNew.length) {
      return historyItem.cliente.substr(1) === clientCpfNew;
    } else {
      return historyItem.cliente === clientCpfNew;
    }
  });
};

export const getOrderedList = (list, attribute, orderOption) => {
  const orderedList = list.sort(function (a, b) {
    if (orderOption === "DEC") {
      return b[attribute] - a[attribute];
    } else {
      return a[attribute] - b[attribute];
    }
  });

  return orderedList;
};

/* problem 1 */
export const getClientTotalValue = (clients, history) => {
  const list = clients.map((client) => {
    const ClientHistory = getHistoryByClient(history, client.cpf);

    const valorTotal = ClientHistory.reduce(function (prevVal, historyItem) {
      return prevVal + historyItem.valorTotal;
    }, 0);

    return {
      cliente: client,
      valorTotal: valorTotal,
    };
  });

  return list;
};

/* problem 2 */
export const getBiggestOrder2016 = (clients, history) => {
  let biggestOrder = { valorTotal: 0 };

  history.forEach((historyItem) => {
    if (
      historyItem.valorTotal > biggestOrder.valorTotal &&
      historyItem.data.split("-").pop() === "2016"
    ) {
      biggestOrder = historyItem;
    }
  });

  const client = getClientByCpf(clients, biggestOrder.cliente);

  return {
    cliente: client,
    compra: biggestOrder,
  };
};

/* problem 3 e 4 */
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

/* problem 4 */
