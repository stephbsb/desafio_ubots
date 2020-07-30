/* Este arquivo simula logica de querys a banco de dados */
/* As funções recebem uma lista e um filtro e retornam o objeto filtrado */

export const getClientByCpf = (clients, clientCpf) => {
  return clients.find((client) => client.cpf === clientCpf);
};

export const getHistoryByClient = (history, clientCpf) => {
  // cpf na lista de clientes: 000.000.000-XX
  // cpf no histico de compras: 000.000.000.XX ou 0000.000.000.XX (49/50 possuem um zero a mais no inicio)

  const clientCpfNew = clientCpf.replace("-", ".");

  return history.filter((historyItem) => {
    if (historyItem.cliente.length !== clientCpfNew.length) {
      return historyItem.cliente.substr(1) === clientCpfNew;
    } else {
      return historyItem.cliente === clientCpfNew;
    }
  });
};
