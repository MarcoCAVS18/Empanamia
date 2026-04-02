import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center mb-2 gap-3 pb-2">
        <button
          className="text-blue px-4 py-1 rounded-full border-4 font-medium"
          onClick={decrement}
        >
          -
        </button>
        <div className="text-blue px-8 py-1 rounded-full border-4">{quantity}</div>
        <button
          className="text-blue px-4 py-1 rounded-full border-4 font-medium"
          onClick={increment}
        >
          +
        </button>
      </div>
      <button
        className="w-full text-gray-700 font-medium px-4 py-4 rounded hover:bg-pink hover:text-white"
        onClick={() => onAdd(quantity)} disabled={!stock}
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;