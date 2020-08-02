import React, { useEffect, useState } from "react";

import { getListOrderedByTotalValue } from "./LogicProblem1";

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
    const orderedListTemp = getListOrderedByTotalValue(clients, history);
    setOrderedList(orderedListTemp);
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
