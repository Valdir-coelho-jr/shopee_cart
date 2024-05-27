// Quais ações meu carrinho pode fazer

//CASOS DE USO
// ✅ adicionar item no carrinho
async function addItem(userCart, item) {
  userCart.push(item);
}
// ✅ calcular o total do carrinho
async function calculateTotal(userCart) {
  console.log("\nShopee Cart total is:");
  const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
  console.log(`🎁Total: ${result}`);
}

// ✅ deletar item do carrinho
async function deleteItem(userCart, name) {
  const index = userCart.findIndex((item) => item.name === name);

  if (index !== -1) {
    userCart.splice(index, 1);
  }
}

// ✅ remover item do carrinho
async function removeItem(userCart, item) {
  //2- Encontrar o indice do item
  const indexFound = userCart.findIndex((p) => p.name === item.name);
  console.log("Item encontrado no index: ");
  console.log(indexFound);

  //2- Caso nao encontre o item

  if (indexFound == -1) {
    console.log("Item nao encontrado");
    return;
  }

  //3- item > 1 subtrair um item,

  if (userCart[indexFound].quantity > 1) {
    userCart[indexFound].quantity -= 1;
    return;
  }

  //4 - Caso item = 1 deletar o item
  if (userCart[indexFound].quantity == 1) {
    userCart.splice(indexFound, 1);
    return;
  }

  // // transforma o indice visual do usuario, para o indice do backend
  // const deleteIndex = index -1

  // //verifica se é maior que zero e se é menor do que o tamanho do carrinho
  // if (index >= 0 && index < userCart.length) {
  //   userCart.splice(deleteIndex, 1);
  // }
}

// ✅ mostrar carrinho
async function displayCart(userCart) {
  console.log("\nShopee Cart list:");
  userCart.forEach((item, index) => {
    console.log(
      `${index + 1}. ${item.name} - RS$ ${item.price} | ${
        item.quantity
      }x | Subtotal = ${item.subtotal()}`
    );
  });
}

export { addItem, calculateTotal, deleteItem, removeItem, displayCart };
