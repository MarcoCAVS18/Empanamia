import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen, faCheck } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, clearCart, removeItem, editItemQuantity } =
    useContext(CartContext);
  const navigate = useNavigate();
  const [editQuantityId, setEditQuantityId] = useState(null);

  if (cart.length === 0) {
    navigate("/");
    return null; 
  }


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

  return (
    <div className="flex flex-col items-center p-4">
      <div className="w-full max-w-md p-4 mb-4">
        <h2 className="text-lg font-semibold mb-2">Productos seleccionados:</h2>
        {cart.map((product) => (
          <div
            key={product.id}
            className="flex items-center mb-2 border border-gray rounded-large p-4 shadow-2xl"
          >
            <img
              src={product.img}
              alt={product.name}
              className="w-16 h-16 mr-2 rounded-full"
            />
            <div>
              <p className="font-medium">{product.name}</p>
              <p className="font-medium">{product.category}</p>
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
                        outline: 'none',
                        boxShadow: '0 0 0 2px #9dd6e5',
                        textAlign: 'center'
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

              <p className="text-gray-700">
                Total: ${calculateItemTotal(product.price, product.quantity)}
              </p>
            </div>
            <FontAwesomeIcon
              icon={faTrash}
              className="cursor-pointer ml-auto text-blue mr-2 text-2xl"
              onClick={() => handleRemoveItem(product.id)}
            />
          </div>
        ))}
      </div>

      {/* Total */}
      <div className="w-full max-w-md mb-4">
        <div className="flex justify-center">
          <span>Total: </span>
          <span> ${calculateTotalPrice()}</span>
        </div>
      </div>

      {/* Botones */}
      <div className="w-full max-w-md flex justify-center">
        <button
          className="mr-2 px-4 py-2 text-gray-700 hover:bg-pink hover:text-white font-semibold rounded"
          onClick={clearCart}
        >
          VACIAR
        </button>
        <button className="mr-2 px-4 py-2 text-gray-700 hover:bg-pink hover:text-white font-semibold rounded">
          CONTINUAR
        </button>
      </div>
    </div>
  );
};

export default Cart;
