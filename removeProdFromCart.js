import { getCartProductFromLS } from "./getCartProducts";
import { showToast } from "./showToast";
import { updateCartProductTotal } from "./updateCartProductTotal";
import { updateCartValue } from "./updateCartValue";

export function removeProdFromCart(id) {
  var cartProducts = getCartProductFromLS();

  cartProducts = cartProducts.filter((curProd) => curProd.id !== id);

  localStorage.setItem("cartProductLS", JSON.stringify(cartProducts));

  let removeDiv = document.getElementById(`card${id}`);
  if (removeDiv) {
    removeDiv.remove();
    showToast("delete", id);
  }
  updateCartProductTotal();
  updateCartValue(cartProducts);
}
