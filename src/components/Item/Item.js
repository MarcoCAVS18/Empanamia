import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";

const Item = ({ id, name, img, price, stock }) => {
  return (
    <article className="border-2 border-gray rounded-lg text-left flex-col shadow-2xl">
      <Link to={`/item/${id}`} className="relative">
        <div className="h-60 rounded-t-lg overflow-hidden">
          <img src={img} alt={name} className="w-full h-full object-cover" />
          <div className="overlay">
            <span className="text-white text-lg">DETALLES</span>
          </div>
        </div>
      </Link>

      <header className="px-2 pt-2 select-none">
        <h2 className="uppercase text-2xl font-semibold">{name}</h2>
      </header>

      <section className="mt-1 text-left py-2 select-none">
        <p className="text-gray-700 mb-1 px-2">Price: ${price}</p>
        <p className="text-gray-700 px-2">Stock: {stock}</p>
      </section>

      <footer className="mt-2">
        <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log("cantidad agregada", quantity)} />
      </footer>
    </article>
  );
};

export default Item;
