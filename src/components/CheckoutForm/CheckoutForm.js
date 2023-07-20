import React, { useState, useEffect } from "react";
import logo from "../../img/logo.png";

const CheckoutForm = ({ onConfirm }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingDots, setLoadingDots] = useState(0);

  const handleConfirm = async (e) => {
    e.preventDefault();

    const userData = {
      name,
      phone,
      email,
    };

    setLoading(true);
    try {
      await onConfirm(userData);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // Animaciòn puntos suspensivos en el return del botòn procesando
  useEffect(() => {
    let intervalId;

    if (loading) {
      intervalId = setInterval(() => {
        setLoadingDots((prevDots) => (prevDots + 1) % 4);
      }, 500);
    } else {
      setLoadingDots(0);
    }

    return () => clearInterval(intervalId); 
  }, [loading]);

  return (
    <div className="flex flex-col items-center p-16">
      <div className="w-full max-w-md p-4 mb-4 border border-gray rounded shadow-2xl">
        <div className="flex justify-center pb-6">
          <img src={logo} alt="Empanamia" className="rounded-full w-16 h-16 -mt-12" />
        </div>
        <form onSubmit={handleConfirm}>
          <div className="mb-4">
            <label htmlFor="name" className="font-medium">
              Nombre:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={({ target }) => setName(target.value)}
              className="w-full px-3 py-2 rounded-md border-b border-blue outline-none placeholder-gray-300 text-blue"
              placeholder="Pepito de Empanamia"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="font-medium">
              Teléfono:
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={phone}
              onChange={({ target }) => setPhone(target.value)}
              className="w-full px-3 py-2 rounded-md border-b border-blue outline-none placeholder-gray-300 text-blue"
              placeholder="+54 9 341 3 123 123 123"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="font-medium">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
              className="w-full px-3 py-2 rounded-md border-b border-blue outline-none placeholder-gray-300 text-blue"
              placeholder="venbailalo@ayvengozalo.com"
              required
            />
          </div>
          <button
            type="submit"
            className={`w-full px-4 py-2 text-white bg-red-600 hover:text-white font-semibold rounded outline-none focus:ring-4 shadow-lg transform active:scale-75 transition-transform ${
              loading ? "opacity-50 cursor-wait" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Procesando" + ".".repeat(loadingDots) : "Confirmar pedido"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;

