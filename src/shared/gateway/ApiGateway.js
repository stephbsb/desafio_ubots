/* Hub para fazer as requisições às APIs - Retornam um objeto a partir do JSON recebido */
/* Para uma melhor performance - as listas serão guardadas em memória para que não seja necessário fazer fetch apenas uma vez */

const getClients = () => {
  return fetch("http://www.mocky.io/v2/598b16291100004705515ec5")
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Não foi possível recuperar os dados.");
      }
    })
    .then((responseData) => {
      return responseData;
    })
    .catch((error) => {
      return {
        error: "Não foi possível recuperar os dados.",
      };
    });
};

const getHistory = () => {
  return fetch("http://www.mocky.io/v2/598b16861100004905515ec7")
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Não foi possível recuperar os dados.");
      }
    })
    .then((responseData) => {
      return responseData;
    })
    .catch((error) => {
      return {
        error: "Não foi possível recuperar os dados.",
      };
    });
};

export default {
  getClients,
  getHistory,
};
