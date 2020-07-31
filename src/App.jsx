import React, { useEffect, useState } from "react";

import { getClients, getHistory } from "./shared/gateway/ApiGateway";
import Problem1 from "./components/problems/problem1/Problem1";
import Problem2 from "./components/problems/problem2/Problem2";
import Problem3 from "./components/problems/problem3/Problem3";
import Problem4 from "./components/problems/problem4/Problem4";

import "./App.css";
import Navigation from "./components/navigation/Navigation";

function App() {
  const [clients, setClients] = useState();
  const [history, setHistory] = useState();
  const [problemOption, setProblemOption] = useState("");

  const createClientsList = (lista) => {
    setClients(lista);
  };

  const createHistoryList = (lista) => {
    setHistory(lista);
  };

  const setProblemOptionHandler = (option) => {
    setProblemOption(option);
    console.log("option: " + option);
  };

  // Chama apenas uma vez no inicio da aplicação para popular os estados client e history.
  useEffect(() => {
    getClients(createClientsList);
    getHistory(createHistoryList);
  }, []);

  const renderProblem = () => {
    switch (problemOption) {
      case "problem1":
        return <Problem1 clients={clients} history={history} />;
      case "problem2":
        return <Problem2 clients={clients} history={history} />;
      case "problem3":
        return <Problem3 clients={clients} history={history} />;
      case "problem4":
        return <Problem4 clients={clients} history={history} />;
      default:
        return false;
    }
  };

  return (
    <div className="App">
      {/* Header */}
      <Navigation onClick={setProblemOptionHandler} />
      {clients && history && problemOption && renderProblem()}
    </div>
  );
}

export default App;
