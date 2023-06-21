import CartWidget from "../CartWidget/CartWidget";

function NavButtons() {
  const buttonLabels = ["Todas", "Fritas", "Al horno", "Destacadas"];

  return (
    <div className="ml-10 flex items-center space-x-6">
      {buttonLabels.map((label, index) => (
        <button
          key={index}
          className="uppercase text-white font-medium px-6 py-3 rounded-lg bg-transparent hover:bg-pink"
        >
          {label}
        </button>
      ))}
      <span className="h-6 w-px bg-white"></span>
      <CartWidget />
    </div>
  );
}

export default NavButtons;