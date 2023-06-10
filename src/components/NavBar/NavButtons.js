import CartWidget from "../CartWidget/CartWidget";

function NavButtons() {
  return (
    <div className="ml-10 flex items-center space-x-4">
      <button className="text-white font-sans hover:text-pink-300 button-nav">Fritas</button>
      <button className="text-white font-sans hover:text-pink-300 button-nav">Al horno</button>
      <button className="text-white font-sans hover:text-pink-300 button-nav">Dulces</button>
      <button className="text-white font-sans hover:text-pink-300 button-nav">Destacadas</button>
      <span className="h-6 w-px bg-white"></span>
      <CartWidget/>
    </div>
  );
}

export default NavButtons;