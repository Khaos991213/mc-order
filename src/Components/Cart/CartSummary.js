import React, { useContext } from "react";
import { MinusCircle, PlusCircle } from "react-feather";
import { CartContext } from "../../Contexts/CartContext";

function CartSummary() {
  const [cart, setCart] = useContext(CartContext);
  const currency = "kr.";
  const zeroes = ",00 ";
  const fullPrice = zeroes + currency;

  let qty = 0;
  if (cart) {
    qty = cart.reduce((acc, curr) => acc + curr.qty, 0);
  }
  const removeFromOrder = (id) => {
    const newCart = cart.filter((Cart) => Cart.id !== id);
    setCart(newCart);
    //clear the cart
  };

  function clearCart() {
    setCart([]);
  }
  const increaseBasket = (id) => {
    setCart(
      cart.map((CartItem) =>
        CartItem.id === id ? { ...CartItem, qty: CartItem.qty + 1 } : CartItem
      )
    );
  };
  const decreaseBasket = (id, qty) => {
    setCart(
      cart.map((CartItem) =>
        CartItem.id === id ? { ...CartItem, qty: CartItem.qty - 1 } : CartItem
      )
    );
    removeEmptyItems(id, qty); // if quantity is 0 remove the food from the basket
  };
  const removeEmptyItems = (id, qty) => {
    if (qty === 1) {
      removeFromOrder(id);
    }
  };
  let totalPrice = 0;
  const deliveryCost = 0;
  if (cart) {
    totalPrice = cart.reduce(
      (acc, curr) => acc + parseInt(curr.price * curr.qty),
      deliveryCost
    );
  }
  return (
    <div>
      {" "}
      <h4 className="d-flex justify-content-between align-items-center mb-3">
        <span className="text-muted">購物車</span>
        <span className="badge badge-primary badge-pill ">{qty}</span>
      </h4>
      <ul className="list-group mb-3">
        {cart.map((doc) => (
          <li className="list-group-item d-flex justify-content-between lh-condensed">
            <div>
              <h6 className="my-0">
                {doc.name}{" "}
                <PlusCircle
                  onClick={() => increaseBasket(doc.id)}
                  className="cursor-pointer"
                  size={22}
                  color={"var(--clr-green-dark)"}
                />
                <span className="p-2 text-black">{doc.qty}</span>
                <MinusCircle
                  onClick={() => decreaseBasket(doc.id, doc.qty)}
                  className="cursor-pointer"
                  size={22}
                  color={"var(--clr-red-dark)"}
                />
              </h6>

              <small className="text-muted"></small>
            </div>
            <span className="text-muted">
              {doc.price}
              {fullPrice}
            </span>
          </li>
        ))}
        
        
        <li className="list-group-item d-flex justify-content-between">
          <span>總金額</span>
          <strong>
            {totalPrice}
            {fullPrice}
          </strong>
        </li>
      </ul>
    </div>
  );
}

export default CartSummary;
