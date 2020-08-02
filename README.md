# Problema:

Velasquez possui uma loja de vinhos e, ao longo dos anos, guardou dados de seus clientes e um histórico de compras. 
Velasquez quer personalizar o atendimento e contratou você para desenvolver um software que:


* Liste os clientes ordenados pelo maior valor total em compras.
* Mostre o cliente com maior compra única no último ano (2016).
* Liste os clientes mais fiéis.
* Recomende um vinho para um determinado cliente a partir do histórico de compras.


Para criar esse software o neto do Velasquez (o Velasquinho) disponibilizou uma API com cadastro de clientes (http://www.mocky.io/v2/598b16291100004705515ec5) 
e histórico de compras (http://www.mocky.io/v2/598b16861100004905515ec7).


# Solução

Este projeto tem uma preocupação maior com a lógica da solução do que com o design. 
Toda a lógica foi desenvolvida em JavaScript, o front end foi feito em ReactJS apenas com a finalidade de visualizar o resultado.
 
Para rodar o programa, faça o download ou clone o reposítório, entre na pasta e digite com os seguintes comandos:
```
>> npm install
>> npm start
```

> Ao carregar a página pela primeira vez as requisições são feitas as apis e os dados são guardados em variaveis de estados para serem usadas por todos os problemas. Apenas se estes valores já estão disponiveis que as opções ficam disponíveis. Cada um dos problemas é renderizado se a opção para ele for escolhida. 

## Liste os clientes ordenados pelo maior valor total em compras.

View: https://github.com/stephbsb/desafio_ubots/blob/master/src/components/problems/problem1/Problem1.jsx<br/>
Código: https://github.com/stephbsb/desafio_ubots/blob/master/src/components/problems/problem1/LogicProblem1.js

Lógica: Para cada cliente é recuperado todo o historico de compras correspondente. 
Uma função é usada para somar os valores de todas as compras realizadas para aquele cliente e a lista de cliente é ordenada de acordo com
a ordem decrescente destes valores


## Mostre o cliente com maior compra única no último ano (2016).

View: https://github.com/stephbsb/desafio_ubots/blob/master/src/components/problems/problem1/Problem2.jsx<br/>
Código: https://github.com/stephbsb/desafio_ubots/blob/master/src/components/problems/problem2/LogicProblem2.js

Lógica: Todo o historico inicial de compras será pesquisado para retornar o cpf do cliente correspondente à maior compra. Com o cpf do cliente é possivel fazer a busca na lista de clientes gerada inicialmente.

## Liste os clientes mais fiéis.

View: https://github.com/stephbsb/desafio_ubots/blob/master/src/components/problems/problem1/Problem3.jsx<br/>
Código: https://github.com/stephbsb/desafio_ubots/blob/master/src/components/problems/problem3/LogicProblem3.js

Lógica: Defini que mostraria o 3 clientes mais fieis que seria definido pelo maior número de compras realizados.
Para cada cliente é buscado o numero de compras realizadas. Isto é um array, então usando a função lenght é possivel determinar a quantidade de compras realizadas por cada clientes.
Apos isso ordenamos a lista em ordem decrescente e usando a função split foi possivel recuperar apenas os tres primeiros clientes da lista.

## Recomende um vinho para um determinado cliente a partir do histórico de compras.

View: https://github.com/stephbsb/desafio_ubots/blob/master/src/components/problems/problem1/Problem4.jsx<br/>
Código: https://github.com/stephbsb/desafio_ubots/blob/master/src/components/problems/problem4/LogicProblem4.js

Lógica: Um menu com o nome de todos os clientes é disponibilizado e quando seleciona um nome um vinho é inidicado de acordo com o histórico de compras do cliente.
A lista de todas as compras realizadas pelo cliente é obtida por uma função chamada getHistoryByClient(), porem o histórico vem dividido em compras por datas. Para pegar
apenas os itens comprados outra função (getItemsFromHistoryList) é usada passando o historico. 

Para recuperar o item de acordo com o gosto do cliente foi usado primeiro a **uva** mais comprada, e a partir dessa uva o **produto** mais comprado. Caso mais de um valor fosse possível a função retorna o último valor da lista.
Afunção que verifica a frequencia de um determinado atributo dentro de um array é a getMostFrequentValueByAttribute.
Ela recebe uma lista e o atributo que será verificado, e retorna o **atributo**, a **quantidade de vezes em que ele occorre** e os **itens correspondentes** a ele dentro de um array.
O interessante é que essa lista de itens retornado pode ser novamente verificado com a mesma função para um atributo diferente sempre retornando um array mais filtrado. Então o utilizei uma vez para o atributo "categoria" e com o resultado usei uma segunda vez para o atributo "produto".

``` javascript
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

```
