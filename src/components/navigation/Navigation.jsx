import React from "react";

const Navigation = ({ onClick }) => {
  const onClickHandler = (event) => {
    event.preventDefault();
    onClick(event.target.id);
  };

  return (
    <ul className="navigation">
      <li>
        <a id="problem1" href="#!" onClick={onClickHandler}>
          CLIENTES ORDENADOS PELO VALOR TOTAL DE COMPRAS
        </a>
      </li>
      <li>
        <a id="problem2" href="#!" onClick={onClickHandler}>
          CLIENTE COM MAIOR COMPRA ÚNICA NO ÚLTIMO ANO
        </a>
      </li>
      <li>
        <a id="problem3" href="#!" onClick={onClickHandler}>
          CLIENTES MAIS FIEIS
        </a>
      </li>
      <li>
        <a id="problem4" href="#!" onClick={onClickHandler}>
          RECOMENDE UM VINHO PARA UM CLIENTE
        </a>
      </li>
    </ul>
  );
};

export default Navigation;
