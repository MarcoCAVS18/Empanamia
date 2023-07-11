import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

function CartWidget() {
  const { cartCount } = useContext(CartContext);
  const [itemCount, setItemCount] = useState(); 

  useEffect(() => {
    setItemCount(cartCount);
  }, [cartCount]);

  return (
    <Link to="/cart">
    <button className="text-white hover:text-pink-300 relative">
      <FontAwesomeIcon
        icon={faShoppingCart}
        className="text-white text-xl p-2 hover:text-pink-300 pb-1"
      />
      {itemCount >= 0 && (
        <span className="bg-pink text-white text-base rounded-full px-2 absolute -top-2 -right-2">
          {itemCount}
        </span>
      )}
    </button>
    </Link>
  );
}

export default CartWidget;