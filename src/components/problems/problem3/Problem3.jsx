import React, { useEffect, useState } from "react";

import { getLoyalClients } from "./LogicProblem3";

/* Problem3 - Liste os clientes mais fiéis. */
/* Verificar os 3 clientes que realizaram o maior numero de pedidos no histórico de compras */
/* Chamar função que gera lista de compras por cliente, gerar uma lista de numero de compras, ordenar esta lista e pegar os 3 primeiros clientes pelo cpf */

const Client = ({ client }) => {
  return (
    <li>
      <h4>Nome: {client.cliente.nome}</h4>
      <h5>Quantidade de compras: {client.quantidade}</h5>
    </li>
  );
};

const ProblemsSection = ({ clients, history, className }) => {
  const [loyalClients, setLoyalClients] = useState();

  useEffect(() => {
    const loyalClients = getLoyalClients(clients, history);

    setLoyalClients(loyalClients);
  }, []);

  return (
    <ol className={`${className} problem3`}>
      {loyalClients &&
        loyalClients.map((client) => {
          return <Client client={client} />;
        })}
    </ol>
  );
};

export default ProblemsSection;
