import React, { useEffect, useState } from "react";

import ApiGateway from "./shared/gateway/ApiGateway";
import Problem1 from "./components/problems/problem1/Problem1";
import Problem2 from "./components/problems/problem2/Problem2";
import Problem3 from "./components/problems/problem3/Problem3";
import Problem4 from "./components/problems/problem4/Problem4";

import "./App.css";
import Navigation from "./components/navigation/Navigation";
import Header from "./components/header/Header";

function App() {
  const [clients, setClients] = useState();
  const [history, setHistory] = useState();
  const [problemOption, setProblemOption] = useState();
  const [error, setError] = useState();

  const setProblemOptionHandler = (option) => {
    setProblemOption(option);
    console.log("option: " + option);
  };

  // Chama apenas uma vez no inicio da aplicação para popular os estados client e history.
  useEffect(() => {
    ApiGateway.getClients().then((response) => {
      if (!response.error) {
        setClients(response);
      } else {
        const error = response.error.message;
        setError(error);
      }
    });
    ApiGateway.getHistory().then((response) => {
      if (!response.error) {
        setHistory(response);
      } else {
        const error = response.error.message;
        setError(error);
      }
    });
  }, []);

  const renderProblem = () => {
    switch (problemOption) {
      case "Problem1":
        return (
          <Problem1 className="problem" clients={clients} history={history} />
        );
      case "Problem2":
        return (
          <Problem2 className="problem" clients={clients} history={history} />
        );
      case "Problem3":
        return (
          <Problem3 className="problem" clients={clients} history={history} />
        );
      case "Problem4":
        return (
          <Problem4 className="problem" clients={clients} history={history} />
        );
      default:
        return false;
    }
  };

  return (
    <div className="App">
      <Header />
      {clients && history && <Navigation onClick={setProblemOptionHandler} />}
      {!error && problemOption ? renderProblem() : <h1>{error}</h1>}
    </div>
  );
}

export default App;
