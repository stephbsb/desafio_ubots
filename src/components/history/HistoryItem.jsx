import React, { useEffect } from "react";

import "./HistoryItem.css";

const HistoryItem = ({ item }) => {
  useEffect(() => {
    console.log(item);
  }, []);

  return <li></li>;
};

export default HistoryItem;
