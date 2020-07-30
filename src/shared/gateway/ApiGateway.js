/* Hub para fazer as requisições às APIs - Retornam um objeto a partir do JSON recebido */
/* Para uma melhor performance - as listas serão guardadas em memória para que seja necessário fazer fetch apenas uma vez */

export const getClients = async (setStateFunction) => {
  try {
    const response = await fetch(
      "http://www.mocky.io/v2/598b16291100004705515ec5"
    );

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error("Não foi possível recuperar os dados");

      throw error;
    } else {
      setStateFunction(responseData);
    }
  } catch (err) {
    const error = new Error("Não foi possível recuperar os dados");

    throw error;
  }
};

export const getHistory = async (setStateFunction) => {
  try {
    const response = await fetch(
      "http://www.mocky.io/v2/598b16861100004905515ec7"
    );

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error("Não foi possível recuperar os dados");

      throw error;
    } else {
      setStateFunction(responseData);
    }
  } catch (err) {
    const error = new Error("Não foi possível recuperar os dados");

    throw error;
  }
};
