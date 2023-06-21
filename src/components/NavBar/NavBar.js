import image from './Mesa de trabajo 2.svg';
import CartWidget from '../CartWidget/CartWidget';
import NavButtons from './NavButtons';

function NavBar() {
  return (
    <nav className='h-24 bg-blue'>
      <div className="max-w-8xl mx-auto px-8 sm:px-6 lg:px-8 flex items-center h-full">
        <div className="flex items-center justify-start">
          <img
            className="h-20 w-auto"
            src={image}
            alt="Logo"
          />
          <h1 className='text-3xl font-sans font-semibold pl-4 select-none tracking-widest text-white'>Empanamía</h1>
        </div>
        <div className="flex items-center justify-end flex-grow">
          <div className="flex items-center space-x-4">
            <NavButtons />
          </div>
        </div>
        <div className="md:hidden flex items-center">
          <CartWidget />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;