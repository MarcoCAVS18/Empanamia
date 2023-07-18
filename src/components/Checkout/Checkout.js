  import React, { useContext, useState } from "react";
  import { CartContext } from "../../context/CartContext";
  import CheckoutForm from "../CheckoutForm/CheckoutForm";

  const Checkout = () => {
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState("");

    const { clearCart } = useContext(CartContext);

    const createOrder = async (userData) => {
      setLoading(true);

      try {
        // Resto del código para almacenar la orden en Firebase
  
        setLoading(false);
        setOrderId("ORD-123456");
  
        clearCart();
      } catch (error) {
        console.log("Error al crear la orden:", error);
        setLoading(false);
      }
    };

    if (loading) {
      return <h1>Se está generando su orden...</h1>;
    }

    if (orderId) {
      return <h1>El ID de su orden es: {orderId}</h1>;
    }

    return (
      <div>
        <CheckoutForm onConfirm={createOrder} />
      </div>
    );
  };

  export default Checkout;
