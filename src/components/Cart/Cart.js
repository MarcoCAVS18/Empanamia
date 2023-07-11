import React, { useContext } from 'react';
import { CartContext } from "../../context/CartContext";

const Cart = () => {
    const { clearCart } = useContext(CartContext);

  return (
    <div className="flex flex-col items-center p-4">
      {/* Lista de productos seleccionados */}
      <div className="w-full max-w-md border p-4 mb-4">
        <h2 className="text-lg font-semibold mb-2">Productos seleccionados</h2>
        {/* Aquí puedes mostrar los detalles de los productos seleccionados */}
      </div>

      {/* Total */}
      <div className="w-full max-w-md mb-4">
        <div className="flex justify-between">
          <span>Total:</span>
          {/* Aquí puedes mostrar la cantidad ingresada por el usuario */}
        </div>
      </div>

      {/* Botones */}
      <div className="w-full max-w-md flex justify-center">
        <button 
        className="mr-2 px-4 py-2 text-gray-700 hover:bg-pink hover:text-white font-semibold rounded"
        onClick={clearCart}>
        VACIAR
        </button>
        <button className="mr-2 px-4 py-2 text-gray-700 hover:bg-pink hover:text-white font-semibold rounded">CONTINUAR</button>
      </div>
    </div>
  );
};

export default Cart;
