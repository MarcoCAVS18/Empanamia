import { NavLink } from 'react-router-dom';

function NavButtons() {
  return (
    <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-6 md:space-y-0 md:items-center md:space-y-0">
      <NavLink
        to="/"
        activeclassname="bg-pink"
        className="uppercase text-white font-medium px-6 py-3 rounded-lg bg-transparent hover:bg-pink md:inline-block md:px-6 md:py-3"
      >
        Todas
      </NavLink>

      <NavLink
        to="/category/fritas"
        activeclassname="bg-pink"
        className="uppercase text-white font-medium px-6 py-3 rounded-lg bg-transparent hover:bg-pink md:inline-block md:px-6 md:py-3"
      >
        Fritas
      </NavLink>

      <NavLink
        to="/category/al horno"
        activeclassname="bg-pink"
        className="uppercase text-white font-medium px-6 py-3 rounded-lg bg-transparent hover:bg-pink md:inline-block md:px-6 md:py-3"
      >
        Al horno
      </NavLink>

      <NavLink
        to="/category/destacadas"
        activeclassname="bg-pink"
        className="uppercase text-white font-medium px-6 py-3 rounded-lg bg-transparent hover:bg-pink md:inline-block md:px-6 md:py-3"
      >
        Destacadas
      </NavLink>
    </div>
  );
}

export default NavButtons;
