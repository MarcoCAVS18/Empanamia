

function NavButtons() {
  const buttonLabels = ["Todas", "Fritas", "Al horno", "Destacadas"];

  return (
    <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-6 md:space-y-0 md:items-center md:space-y-0">
      {buttonLabels.map((label, index) => (
        <button
          key={index}
          className="uppercase text-white font-medium px-6 py-3 rounded-lg bg-transparent hover:bg-pink md:inline-block md:px-6 md:py-3"
        >
          {label}
        </button>
      ))}
    </div>
  );
}

export default NavButtons;