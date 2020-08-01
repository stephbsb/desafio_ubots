import React, { useEffect, useState } from "react";

import {
  getClientTotalValue,
  getOrderedList,
} from "../../../shared/gateway/QueryGateway";

/* Problem1 - Liste os clientes ordenados pelo maior valor total em compras. */

const ListItem = ({ item }) => {
  console.log("item: " + item.valorTotal);

  return (
    <li className="list-item">
      <h4>Cliente: {item.cliente.nome}</h4>
      <h5>Valor Total de Compras: {item.valorTotal.toFixed(2)}</h5>
    </li>
  );
};

const Problem1 = ({ clients, history, className }) => {
  const [orderedList, setOrderedList] = useState();

  useEffect(() => {
    const list = getClientTotalValue(clients, history);
    const orderedListTemp = getOrderedList(list, "valorTotal", "DEC");
    setOrderedList(orderedListTemp);
    console.log(orderedListTemp[0].cliente.nome);
  }, []);

  return (
    <div className={`${className}`}>
      <h2>Lista de clientes ordenados pelo maior valor total em compras:</h2>
      <ol className={` problem1`}>
        {orderedList &&
          orderedList.map((orderedListItem) => {
            return <ListItem item={orderedListItem} />;
          })}
      </ol>
    </div>
  );
};

export default Problem1;
