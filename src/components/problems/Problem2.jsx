import React, { useEffect, useState } from "react";

import {
  getClientByCpf,
  getHistoryByClient,
} from "../../shared/gateway/QueryGateway";

/* Problem2 - Mostre o cliente com maior compra única no último ano (2016) */

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
      <h1>Problem 2</h1>
    </>
  );
};

export default ProblemsSection;
