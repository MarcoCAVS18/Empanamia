
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function CartWidget() {
  return (
    <button className="text-white hover:text-pink-300 relative">
      <FontAwesomeIcon icon={faShoppingCart} className="text-white text-xl p-2 hover:text-pink-300 pb-1  carrito"/>
      <span className="bg-red-500 text-white text-base rounded-full px-2 absolute -top-2 -right-2">
        0
      </span>
    </button>
  );
}

export default CartWidget;