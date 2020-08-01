import React from "react";

const HistoryItem = ({ item }) => {
  return (
    <li>
      <ul>
        <li>
          <h5>Produto: {item.produto}</h5>
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

export default HistoryItem;
