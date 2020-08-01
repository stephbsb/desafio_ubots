import React from "react";

import HistoryItem from "./HistoryItem";

const HistoryList = ({ order, index }) => {
  return (
    <>
      <h5>Compra {index + 1 || ""}:</h5>
      <ul>
        <li>Código: {order.codigo}</li>
        <li>Data: {order.data}</li>
        <li>
          <h4>Itens: </h4>
          <ul>
            {order.itens.map((item) => (
              <HistoryItem item={item} />
            ))}
          </ul>
        </li>
        <li></li>
        <li>
          <h4>Valor Total: {order.valorTotal}</h4>
        </li>
      </ul>
    </>
  );
};

export default HistoryList;
