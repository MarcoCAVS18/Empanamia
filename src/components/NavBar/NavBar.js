
import image from './logo.svg';
import CartWidget from '../CartWidget/CartWidget';
import NavButtons from './NavButtons';


function NavBar() {
  return (
    <nav className='bg-gradient-to-r from-sky-950 to-sky-700'>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center"> {/* Div logo */}
            <img
              className="h-20 w-auto"
              src={image}
              alt="Logo"
            />
            <h1 className='text-pink-300 text-xl font-sans font-semibold pl-4 select-none tracking-widest'>Empanamía</h1>
          </div>
          <div className="hidden md:flex items-center text-center justify-center">
            <div className="ml-10 flex items-center space-x-4">
              <NavButtons /> {/* Renderiza el componente NavButtons */}
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <CartWidget /> {/* Renderiza el componente CartWidget */}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;