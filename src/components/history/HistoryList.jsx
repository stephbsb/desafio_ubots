import React from "react";

import HistoryItem from "./HistoryItem";

const HistoryList = ({ historyList }) => {
  if (historyList.length === 0) {
    return (
      <div className="center">
        <h2>Histórico de compras vazio.</h2>
      </div>
    );
  }

  return (
    <ul className="history-list">
      {historyList.map((historyItem) => (
        <HistoryItem item={historyItem} />
      ))}
    </ul>
  );
};

export default HistoryList;
