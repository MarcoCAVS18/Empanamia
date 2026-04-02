import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen, faCheck } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

import logo from "../../img/logo.png";

const Cart = () => {
  const { cart, clearCart, removeItem, editItemQuantity } =
    useContext(CartContext);
  const navigate = useNavigate();
  const [editQuantityId, setEditQuantityId] = useState(null);

  const calculateItemTotal = (price, quantity) => {
    return price * quantity;
  };

  const calculateTotalPrice = () => {
    return cart.reduce(
      (total, product) =>
        total + calculateItemTotal(product.price, product.quantity),
      0
    );
  };

  const handleRemoveItem = (itemId) => {
    removeItem(itemId);
  };

  const handleEditQuantity = (itemId, newQuantity) => {
    setEditQuantityId(itemId);
    editItemQuantity(itemId, newQuantity);
  };

  const handleSaveQuantity = (itemId, quantity) => {
    setEditQuantityId(null);
  };

  const handleCheckout = () => {
    navigate("/checkout", { state: { totalPrice: calculateTotalPrice() } });
  };

  if (cart.length === 0) {
    navigate("/");
    return null;
  }

  return (
    <div className="flex flex-col items-center p-16">
      <div className="w-full max-w-lg p-2 sm:p-4 p-4 mb-4 border border-gray rounded shadow-2xl">
        <div className="flex justify-center pb-6">
          <img
            src={logo}
            alt="Empanamia"
            className="rounded-full w-16 h-16 -mt-12"
          />
        </div>
        {cart.map((product) => (
          <div
            key={product.id}
            className="flex items-center mb-2 border border-gray rounded p-4"
          >
            <img
              src={product.img}
              alt={product.name}
              className="w-16 h-16 mr-2 rounded-full"
            />
            <div>
              <p className="font-medium">{product.name}</p>
              {editQuantityId === product.id ? (
                <div className="flex items-center">
                  <p className="text-gray-700">
                    Unidades:{" "}
                    <input
                      type="number"
                      min="1"
                      value={product.quantity}
                      onChange={(e) =>
                        handleEditQuantity(product.id, parseInt(e.target.value))
                      }
                      className="w-8 h-8 rounded-md ml-1 border-none"
                      style={{
                        outline: "none",
                        boxShadow: "0 0 0 2px #9dd6e5",
                        textAlign: "center",
                      }}
                    />
                  </p>
                  <button
                    onClick={() =>
                      handleSaveQuantity(product.id, product.quantity)
                    }
                    className="text-blue ml-2"
                  >
                    <FontAwesomeIcon icon={faCheck} />
                  </button>
                </div>
              ) : (
                <p className="text-gray-700">
                  Unidades: {product.quantity}
                  <FontAwesomeIcon
                    icon={faPen}
                    className="absolute cursor-pointer ml-1 text-blue text-sm pl-1 pb-2"
                    onClick={() => setEditQuantityId(product.id)}
                  />
                </p>
              )}

              <p className="text-gray-700 uppercase">
                Total: ${calculateItemTotal(product.price, product.quantity)}
              </p>
            </div>
            <FontAwesomeIcon
              icon={faTrash}
              className="cursor-pointer ml-auto text-blue mr-2 text-2xl outline-none focus:ring-4 transform active:scale-75 transition-transform"
              onClick={() => handleRemoveItem(product.id)}
            />
          </div>
        ))}
      </div>

      {/* Botones */}
      <div className="w-full max-w-md mb-4">
        <div className="flex justify-center">
          <button
            className="mr-2 px-4 py-2 text-white bg-pink hover:text-white font-semibold rounded outline-none focus:ring-4 shadow-lg transform active:scale-75 transition-transform"
            onClick={clearCart}
          >
            VACIAR
          </button>

          <button
            onClick={handleCheckout}
            className="mr-2 px-4 py-2 text-white bg-pink hover:text-white font-semibold rounded outline-none focus:ring-4 shadow-lg transform active:scale-75 transition-transform"
          >
            CONTINUAR
          </button>
        </div>
      </div>

      {/* Total */}
      <div className="w-full max-w-md mb-4 pt-2">
        <div className="flex justify-center uppercase">
          <span className="mr-4 pt-2">Total:</span>
          <div className="font-semibold bg-blue px-4 py-2 rounded-lg text-white">
            $ {calculateTotalPrice()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

