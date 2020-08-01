import React, { useEffect, useState } from "react";

import { getHistoryByClient } from "../../../shared/gateway/QueryGateway";
import { getRecomendedWine } from "./LogicProblem4";
import HistoryItem from "../../history/HistoryItem";
import HistoryList from "../../history/HistoryList";

import "./Problem4.css";

/* Problem4 - Recomende um vinho para um determinado cliente a partir do histórico de compras. */

const Problem4 = ({ clients, history, className }) => {
  const [selectedClient, setSelectedClient] = useState();
  const [recomendedWine, setRecomendedWine] = useState("");
  const [clientHistory, setClientHistory] = useState("");

  useEffect(() => {
    if (selectedClient && selectedClient !== "0") {
      const clientHistoryList = getHistoryByClient(history, selectedClient);
      const selectedWine = getRecomendedWine(clientHistoryList, selectedClient);
      setRecomendedWine(selectedWine);
      setClientHistory(clientHistoryList);
      console.log(clientHistoryList);
    }
  }, [selectedClient]);

  const onSelectHandler = (event) => {
    setSelectedClient(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div className={`${className} problem4`}>
      <label htmlFor="clients">
        <h2>Escolha um cliente para recomendar um vinho:</h2>
      </label>

      <select name="clients" id="clients" onChange={onSelectHandler}>
        <option value="0">Selecione um cliente</option>
        {clients &&
          clients.map((client) => {
            return (
              <>
                <option value={client.cpf}>{client.nome}</option>
              </>
            );
          })}
      </select>

      {recomendedWine && (
        <>
          <h3>Vinho recomendado com base no histórico de compras:</h3>
          <HistoryItem item={recomendedWine} />
          <div></div>
          <h4>Histórico de compras:</h4>
          {clientHistory.map((history, index) => (
            <HistoryList order={history} index={index} />
          ))}
        </>
      )}
    </div>
  );
};

export default Problem4;
