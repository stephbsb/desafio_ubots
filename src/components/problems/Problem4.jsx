import React, { useEffect, useState } from "react";

import {
  getClientByCpf,
  getHistoryByClient,
} from "../../shared/gateway/QueryGateway";

/* Problem4 - Recomende um vinho para um determinado cliente a partir do histórico de compras. */

const ProblemsSection = ({ clients, history }) => {
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
      <h1>Problem 4</h1>
    </>
  );
};

export default ProblemsSection;
