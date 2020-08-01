import React, { useState } from "react";

import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        <h2>Problema:</h2>
        <p>
          Velasquez possui uma loja de vinhos e, ao longo dos anos, guardou
          dados de seus clientes e um histórico de compras. Velasquez quer
          personalizar o atendimento e contratou você para desenvolver um
          software que:
        </p>
        <ol>
          <li>
            Liste os clientes ordenados pelo maior valor total em compras.
          </li>
          <li>Mostre o cliente com maior compra única no último ano (2016).</li>
          <li>Liste os clientes mais fiéis.</li>
          <li>
            Recomende um vinho para um determinado cliente a partir do histórico
            de compras.
          </li>
        </ol>

        <p>
          Para criar esse software o neto do Velasquez (o Velasquinho)
          disponibilizou uma API com cadastro de clientes (
          <a
            href="http://www.mocky.io/v2/598b16291100004705515ec5"
            target="_blank"
          >
            http://www.mocky.io/v2/598b16291100004705515ec5
          </a>
          ) e histórico de compras (
          <a
            href="http://www.mocky.io/v2/598b16861100004905515ec7"
            target="_blank"
          >
            http://www.mocky.io/v2/598b16861100004905515ec7
          </a>
          ).
        </p>
      </div>
    </div>
  );
};

export default Header;
