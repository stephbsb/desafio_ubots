import React, { useState } from "react";

import "./Navigation.css";

const Navigation = ({ onClick }) => {
  const [activeButton, setActiveButton] = useState();

  const onClickHandler = (event) => {
    onClick(event.target.id);

    if (event.target.id !== activeButton) {
      event.target.className = "active";
      if (activeButton) {
        document.getElementById(activeButton).className = "";
      }
      setActiveButton(event.target.id);
    }
  };

  return (
    <>
      <h2 className="navigation-label">
        Escolha uma das opções abaixo para ver o resultado.
      </h2>
      <ul className="navigation">
        <li>
          <button id="Problem1" onClick={onClickHandler}>
            1. CLIENTES ORDENADOS PELO VALOR TOTAL DE COMPRAS
          </button>
        </li>
        <li>
          <button id="Problem2" onClick={onClickHandler}>
            2. CLIENTE COM MAIOR COMPRA ÚNICA NO ÚLTIMO ANO
          </button>
        </li>
        <li>
          <button id="Problem3" onClick={onClickHandler}>
            3. CLIENTES MAIS FIEIS
          </button>
        </li>
        <li>
          <button id="Problem4" onClick={onClickHandler}>
            4. RECOMENDE UM VINHO PARA UM CLIENTE
          </button>
        </li>
      </ul>
    </>
  );
};

export default Navigation;
