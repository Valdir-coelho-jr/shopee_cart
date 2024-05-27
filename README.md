## Controle de Carrinho de Compras - Estilo Shopee

Este projeto simula um sistema básico de controle de carrinho de compras, similar ao encontrado na plataforma Shopee. O objetivo é demonstrar as funcionalidades essenciais de um carrinho, como adicionar itens, calcular o total, remover itens e exibir os produtos selecionados.

### Estrutura do Projeto

O projeto é organizado em duas pastas principais:

- **src**:  Contém os arquivos de código fonte.
  - **services**:
    - **cart.js**:  Implementa as funções que controlam as ações do carrinho:
      - **addItem(userCart, item)**: Adiciona um novo item ao carrinho.
      - **calculateTotal(userCart)**: Calcula o valor total dos itens no carrinho.
      - **deleteItem(userCart, name)**: Remove um item do carrinho pelo seu nome.
      - **removeItem(userCart, item)**: Remove um item do carrinho, reduzindo a quantidade ou removendo completamente.
      - **displayCart(userCart)**: Exibe os itens presentes no carrinho com seus detalhes.
    - **item.js**: Define a estrutura de um item do carrinho com as propriedades:
      - **name**: Nome do produto.
      - **price**: Preço do produto.
      - **quantity**: Quantidade do produto.
      - **subtotal()**: Função que calcula o subtotal do item (preço * quantidade).

- **index.js**: Arquivo principal que demonstra o uso das funções do carrinho.

### Funcionamento

O arquivo `index.js` exemplifica o uso das funções do carrinho. Ele:

1. **Cria itens de exemplo**: Um carrinho de compras com dois itens diferentes.
2. **Adiciona itens ao carrinho**: Os itens criados são adicionados ao carrinho usando a função `addItem`.
3. **Remove itens do carrinho**: Demonstra o uso da função `removeItem` para reduzir a quantidade de um item ou remover totalmente.
4. **Calcula e exibe o total**: Executa a função `calculateTotal` para exibir o valor total do carrinho.
5. **Exibe o conteúdo do carrinho**: Usa a função `displayCart` para mostrar a lista de itens no carrinho.

### Como Executar o Projeto

1. Certifique-se de ter o Node.js instalado em seu sistema.
2. Clone o repositório do projeto.
3. Abra o terminal e navegue até o diretório raiz do projeto.
4. Execute o comando `node index.js` para iniciar o script.

### Observações

- Este projeto é um exemplo simples de um sistema de carrinho de compras.
- Ele não inclui funcionalidades de autenticação, armazenamento de dados ou integração com um banco de dados.
- O código é apresentado em Javascript, mas pode ser facilmente adaptado para outras linguagens.

### Próximos Passos

- Implementar funcionalidades de persistência de dados para salvar o carrinho entre as sessões.
- Integrar o sistema com uma API de produtos para recuperar informações sobre os itens.
- Adicionar recursos de segurança e autenticação.
- Criar uma interface gráfica para interagir com o carrinho.

**Observação:** Este projeto foi desenvolvido como desafio da formação Node.js da DIO, com o objetivo de consolidar os conhecimentos adquiridos durante o curso. 
