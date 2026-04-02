import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

import { db } from "../../config/firebase";
import {
  Timestamp,
  addDoc,
  collection,
  getDocs,
  query,
  where,
  writeBatch,
} from "firebase/firestore";
import OrderConfirmation from "../OrderConfirmation/OrderConfirmation";

const Checkout = () => {
  const [orderId, setOrderId] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);

  const { cart, total, clearCart } = useContext(CartContext);

  const createOrder = async ({ name, phone, email }) => {
    try {
      const validProducts = cart.filter((product) => product.quantity > 0);

      if (!Number.isNaN(total) && Number.isFinite(total)) {
        const objOrder = {
          buyer: {
            name,
            phone,
            email,
          },
          items: validProducts,
          total: total,
          date: Timestamp.fromDate(new Date()),
        };

        const batch = writeBatch(db);
        const outOfStock = [];
        const ids = validProducts.map((product) => product.id);

        const productsRef = collection(db, "products");

        const productsAddedFromFirestore = await getDocs(
          query(productsRef, where("id", "in", ids))
        );
        const { docs } = productsAddedFromFirestore;

        docs.forEach((doc) => {
          const dataDoc = doc.data();
          const stockDb = dataDoc.stock;
          const productAddedToCart = validProducts.find(
            (prod) => prod.id === doc.id
          );
          const prodQuantity = productAddedToCart?.quantity;

          if (stockDb >= prodQuantity) {
            batch.update(doc.ref, { stock: stockDb - prodQuantity });
          } else {
            outOfStock.push({ id: doc.id, ...dataDoc });
          }
        });

        if (outOfStock.length === 0) {
          await batch.commit();
          const orderRef = collection(db, "orders");
          const orderAdded = await addDoc(orderRef, objOrder);
          setOrderId(orderAdded.id);
          clearCart();
          setShowConfirmation(true);
        } else {
          return;
        }
      } else {
        return;
      }
    } catch (error) {
      // Handle the error, if needed
    }
  };

  return (
    <div>
      {showConfirmation ? (
        <OrderConfirmation orderId={orderId} />
      ) : (
        <CheckoutForm onConfirm={createOrder} />
      )}
    </div>
  );
};

export default Checkout;

