import React from "react";

import "./Client.css";

const Client = ({ client }) => {
  return (
    <div className="client">
      <div>Nome: {client.nome}</div>
    </div>
  );
};

export default Client;
