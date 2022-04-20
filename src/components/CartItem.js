import React from "react";

const CartItem = ({ data, delFormCart }) => {
  let { id, name, price, quantity } = data;

  return (
    <div style={{ borderBottom: "thin solid gray" }}>
      <h4>{name}</h4>
      <h5>
        ${price}.00 x {quantity} = ${price * quantity}.00
      </h5>
      <button onClick={() => delFormCart(id)}>Eliminar</button>
      <br />
      <button onClick={() => delFormCart(id, true)}>Eliminar todo</button>
      <br />
      <br />
    </div>
  );
};

export default CartItem;
