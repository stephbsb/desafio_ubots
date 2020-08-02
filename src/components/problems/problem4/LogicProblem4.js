/* 
Descrição: Esta função recebe uma lista e o atributo que deve ser verificado em que ocorre
maior frequencia de um determinado valor, retorna quantidade de vezes que o atributo se repete e 
os itens correspondente ao atributo repetido.

Retorna: 
  [{
    attributeName: String,
    quantity: Number,
    items: Array
  }]

 */
const getMostFrequentValueByAttribute = (list, attribute) => {
  const listByAttribute = [];

  list.forEach((item) => {
    let found = false;

    if (listByAttribute.length !== 0) {
      listByAttribute.forEach((attributeItem) => {
        if (attributeItem[attribute] === item[attribute]) {
          attributeItem.quantity++;
          attributeItem.items.push(item);
          found = true;
        }
      });
    }

    if (found === false) {
      listByAttribute.push({
        [attribute]: item[attribute],
        quantity: 1,
        items: [item],
      });
    }
  });

  let frequentByAttribute;
  let highest = 0;

  // irá retornar o útimo com maior quantidade de itens comprados para esse atributo.
  listByAttribute.forEach((item) => {
    if (item.quantity > highest) {
      highest = item.quantity;
      frequentByAttribute = item;
    }
  });

  /* Retorna um objeto contendo o attributo mais frequente, um array com os 
  itens do historico de compras correspondente(para ser reutilizado chamando 
  esta mesma função com outro atributo) e a quantidade. */
  return frequentByAttribute;
};

/* 
Descrição: Esta função irá receber todos as compras realizadas e irá devolver uma lista com todos os ítens
comprados.

Retorna: 
  [{}]

 */
const getItemsFromHistoryList = (historyList) => {
  let itemsList = [];

  historyList.map((historyItem) =>
    historyItem.itens.map((item) => {
      itemsList.push(item);
    })
  );

  return itemsList;
};

// Função chamada pela view - irá chamar outras funções:
/* 
Descrição: Esta função irá chamar as funções getItemsFromHistoryList e getMostFrequentValueByAttribute.

Retorna: 
  [{Object}]
 */
export const getRecomendedWine = (clientHistoryList, selectedClient) => {
  // Recebe lista com todo os itens ja comprados pelo cliente em um array:

  const clientItemsList = getItemsFromHistoryList(clientHistoryList);

  // Filtrar primeiro pelo gosto de uvas para diminuir a lista de itens:
  const frequentVariedade = getMostFrequentValueByAttribute(
    clientItemsList,
    "variedade"
  );

  // Filtrar pelo produto com mais frequência dentro da lista recebida do gosto de uva em frequentVariedade
  const getRecomendedWine = getMostFrequentValueByAttribute(
    frequentVariedade.items,
    "produto"
  );

  // Retorna o último ítem da lista caso haja outros:
  return getRecomendedWine.items[getRecomendedWine.items.length - 1];
};
