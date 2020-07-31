import React, { useEffect, useState } from "react";

import {
  getClientTotalValue,
  getOrderedList,
} from "../../../shared/gateway/QueryGateway";

/* Problem1 - Liste os clientes ordenados pelo maior valor total em compras. */

const ListItem = ({ item }) => {
  console.log("item: " + item.valorTotal);

  return (
    <li>
      <h4>Cliente: {item.cliente.nome}</h4>
      <h5>Valor Total de Compras: {item.valorTotal}</h5>
    </li>
  );
};

const Problem1 = ({ clients, history }) => {
  const [orderedList, setOrderedList] = useState();

  useEffect(() => {
    const list = getClientTotalValue(clients, history);
    const orderedListTemp = getOrderedList(list, "valorTotal", "DEC");
    setOrderedList(orderedListTemp);
    console.log(orderedListTemp[0].cliente.nome);
  }, []);

  return (
    <ul className="problem1">
      {orderedList &&
        orderedList.map((orderedListItem) => {
          return <ListItem item={orderedListItem} />;
        })}
    </ul>
  );
};

export default Problem1;
