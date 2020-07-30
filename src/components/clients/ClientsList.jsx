import React from "react";

import "./ClientsList.css";
import Client from "./Client";

const ClientsList = (props) => {
  return (
    <ul className="clients-list">
      {props.clients.map((client) => (
        <Client client={client} />
      ))}
    </ul>
  );
};

export default ClientsList;
