import React, { useEffect, useState } from "react";

import { getBiggestOrder2016 } from "./LogicProblem2";

/* Problem2 - Mostre o cliente com maior compra única no último ano (2016) */

import HistoryList from "../../history/HistoryList";

const Problem2 = ({ clients, history, className }) => {
  const [order, setOrder] = useState(false);

  useEffect(() => {
    const biggestOrder2016Client = getBiggestOrder2016(clients, history);
    setOrder(biggestOrder2016Client);
  }, []);

  return (
    <div className={className}>
      {order && (
        <>
          <h2>Cliente com maior compra única no último ano - 2016</h2>
          <h3>Cliente: {order.cliente.nome}</h3>
          <div className="problem2">
            <HistoryList order={order.compra} />{" "}
          </div>
        </>
      )}
    </div>
  );
};

export default Problem2;
