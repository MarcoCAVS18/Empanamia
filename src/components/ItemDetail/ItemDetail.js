import React, { useContext, useState, useEffect } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { db } from "../../config/firebase";
import { doc, updateDoc } from "firebase/firestore";

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
  const [quantityAdded, setQuantityAdded] = useState(0);
  const [showItemCount, setShowItemCount] = useState(true);
  const [lastSelectedQuantity, setLastSelectedQuantity] = useState(1);

  const { addItem } = useContext(CartContext);

  console.log(description)

  useEffect(() => {
    setQuantityAdded(lastSelectedQuantity);
  }, [lastSelectedQuantity]);

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);
    setShowItemCount(false);
    setLastSelectedQuantity(quantity);
  };

  const handleContinueShopping = () => {
    setShowItemCount(true);
    setQuantityAdded(0);
  };

  const handleAddToCart = () => {
    if (quantityAdded > 0) {
      const item = {
        id,
        name,
        img,
        price,
        stock,
        category,
        description
      };
      addItem(item, quantityAdded);
    }
  };

  const handleEdit = async () => {
    setShowItemCount(true);
    setQuantityAdded(0);
    try {
      const productRef = doc(db, "products", id);
      await updateDoc(productRef, {
        stock: stock - quantityAdded
      });
    } catch (error) {
      // console.log(error);
    }
  };

  return (
    <div className="mx-auto py-4 lg:w-3/5 w-full">
      <article className="grid grid-cols-1 lg:grid-cols-2 gap-4 border-gray rounded-lg p-4 shadow-2xl">
        <div className="h-64 lg:h-auto overflow-hidden">
          <img src={img} alt={name} className="w-full h-full object-cover rounded-md" />
        </div>

        <div className="p-4">
          <div className="border border-gray rounded-lg p-4 flex flex-col justify-center text-center bg-gray h-full">
            <header>
              <h1 className="text-gray-700 text-4xl pt-2 font-bold select-none">${price}</h1>
              <h2 className="uppercase text-2xl font-semibold tracking-wider">{name}</h2>
              <p className="inline-block px-2 bg-black text-white text-sm uppercase rounded-md">{category}</p>
            </header>

            <section className="mt-4 select-none">
              <div className="overflow-auto" style={{ maxHeight: "150px" }}>
                <p className="text-gray-500">{description}</p>
              </div>
              <div className="text-right">
                <p className="text-gray-500 mt-2 mb-2">Stock: {stock}</p>
              </div>
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
                  <Link to="/cart">
                    <button
                      className="w-full text-gray-700 font-medium px-4 py-4 rounded bg-pink text-white transition-all duration-300 hover:bg-red-600 hover:text-gray-200 hover:scale-105"
                      onClick={handleAddToCart}
                    >
                      Continuar compra
                    </button>
                  </Link>
                </>
              ) : showItemCount ? (
                <ItemCount initial={lastSelectedQuantity} stock={stock} onAdd={handleOnAdd}>
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
          </div>
        </div>
      </article>
    </div>
  );
};

export default ItemDetail;
