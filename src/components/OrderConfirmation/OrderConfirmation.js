import { NavLink } from "react-router-dom";
import confirmOrder from "../../img/check.png"

const OrderConfirmation = ({ orderId }) => {
  return (
    <div className="flex flex-col items-center p-16">
      <div className="w-full max-w-md p-4 mb-4 border border-gray rounded shadow-2xl">
        <div className="flex justify-center pb-6">
          <img
            src={confirmOrder}
            alt="Empanamia"
            className="rounded-full w-16 h-16 -mt-12"
          />
        </div>
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">El ID de su orden es:</h1>
          <p className="text-2xl font-semibold">{orderId}</p>
          <p className="text-lg mt-8">
            ¡Muchas gracias por comprar con nosotros! Esperamos que disfrutes de tu comida.
          </p>
        </div>
      </div>
      <NavLink
        to="/"
        className="px-4 py-2 text-white bg-gray-500 hover:bg-gray-600 rounded-lg"
      >
        Volver al inicio
      </NavLink>
    </div>
  );
};

export default OrderConfirmation;
