import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../context/CartContext";

const Item = ({ id, name, img, price, stock , category }) => {
  const { addItem } = useContext(CartContext);
  const [quantityAdded, setQuantityAdded] = useState(0);
  const [showItemCount, setShowItemCount] = useState(true);
  const [lastSelectedQuantity, setLastSelectedQuantity] = useState(1);

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);
    setShowItemCount(false);
    setLastSelectedQuantity(quantity);
  };

  const handleContinueShopping = () => {
    setShowItemCount(true);
    setQuantityAdded(0);
    if (quantityAdded > 0) {
      addItem({ id, name, img, price, stock, category }, quantityAdded);
      setLastSelectedQuantity(quantityAdded);
    }
  };

  const handleEdit = () => {
    setShowItemCount(true);
    setQuantityAdded(0);
  };

  return (
    <article className="border-2 border-gray rounded-lg text-left flex-col shadow-2xl">
      <Link to={`/item/${id}`} className="relative">
        <div className="h-60 rounded-t-lg overflow-hidden">
          <img src={img} alt={name} className="w-full h-full object-cover" />
          <div className="overlay">
            <span className="text-white text-lg">DETALLES</span>
          </div>
        </div>
      </Link>

      <header className="px-2 pt-2 select-none">
        <h2 className="uppercase text-2xl font-semibold">{name}</h2>
      </header>

      <section className="mt-1 text-left py-2 select-none">
        <p className="text-gray-700 mb-1 px-2">Price: ${price}</p>
        <p className="text-gray-700 px-2">Stock: {stock}</p>
      </section>

      <footer className="mt-auto">
        {quantityAdded > 0 ? (
          <>
            <button
              className="w-full text-gray-500 font-medium px-4 py-4 rounded bg-gray-200 hover:bg-gray-300"
              onClick={handleEdit}
            >
              EDITAR
            </button>
              <button
                className="w-full text-gray-700 font-medium px-4 py-4 rounded bg-pink text-white transition-all duration-300 hover:bg-red-600 hover:text-gray-200 hover:scale-105"
                onClick={handleContinueShopping}
              >
                Confirmar pedido
              </button>
          </>
        ) : showItemCount ? (
          <ItemCount
            initial={lastSelectedQuantity}
            stock={stock}
            onAdd={handleOnAdd}
          >
            Agregar al carrito
          </ItemCount>
        ) : (
          <button
            className="w-full text-gray-700 font-medium px-2 py-2 rounded bg-gray-200 hover:bg-gray-300"
            onClick={handleContinueShopping}
          >
            EDITAR
          </button>
        )}
      </footer>
    </article>
  );
};

export default Item;