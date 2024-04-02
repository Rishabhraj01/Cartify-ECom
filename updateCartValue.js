const cartValue = document.querySelector("#cartValue");

export function updateCartValue(cartProducts) {
  return (cartValue.innerHTML = `<i class="fa-solid fa-cart-shopping">${cartProducts.length}</i>`);
}
