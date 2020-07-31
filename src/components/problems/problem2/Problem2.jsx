import React, { useEffect, useState } from "react";

import { getBiggestOrder2016 } from "../../../shared/gateway/QueryGateway";

/* Problem2 - Mostre o cliente com maior compra única no último ano (2016) */

const Item = ({ item }) => {
  return (
    <li>
      <ul>
        <li>
          <h6>Produto: {item.produto}</h6>
        </li>
        <li>Categoria: {item.categoria}</li>
        <li>Variedade: {item.variedade}</li>
        <li>Pais: {item.pais}</li>
        <li>Safra: {item.safra}</li>
        <li>Preco: {item.preco}</li>
      </ul>
    </li>
  );
};

const Order = ({ order }) => {
  return (
    <>
      <h4>Cliente: {order.cliente.nome}</h4>
      <h5>Compra:</h5>
      <ul>
        <li>Código: {order.compra.codigo}</li>
        <li>Data: {order.compra.data}</li>
        <li>
          <h5>Itens: </h5>
          <ul>
            {order.compra.itens.map((item) => (
              <Item item={item} />
            ))}
          </ul>
        </li>
        <li>Valor Total: {order.compra.valorTotal}</li>
      </ul>
    </>
  );
};

const Problem2 = ({ clients, history }) => {
  const [order, setOrder] = useState(false);

  useEffect(() => {
    const biggestOrder2016Client = getBiggestOrder2016(clients, history);
    setOrder(biggestOrder2016Client);
    console.log(biggestOrder2016Client);
  }, []);

  return <div className="problem2">{order && <Order order={order} />}</div>;
};

export default Problem2;
