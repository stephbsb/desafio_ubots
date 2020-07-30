import React, { useEffect, useState } from "react";

import {
  getClientByCpf,
  getHistoryByClient,
} from "../../shared/gateway/QueryGateway";

/* Problem1 - Liste os clientes ordenados pelo maior valor total em compras. */

const Problem1 = ({ clients, history }) => {
  const [client, setClient] = useState();
  const [historyByClient, setHistoryByClient] = useState();

  useEffect(() => {
    setClient(getClientByCpf(clients, "000.000.000-02"));
  }, []);

  useEffect(() => {
    setHistoryByClient(getHistoryByClient(history, "0000.000.000-01"));
  }, []);

  return (
    <>
      <h1>Problem 1</h1>
    </>
  );
};

export default Problem1;
