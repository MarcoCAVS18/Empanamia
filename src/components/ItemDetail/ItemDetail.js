import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    return (
        <article className="border-2 border-gray rounded-lg text-left pb-4 flex-col shadow-2xl">
        <div className="w-60 h-60 rounded-t-lg overflow-hidden">
          <img src={img} alt={name} className="w-full h-full object-cover" />
        </div>
  
        <header className="px-2 pt-2">
          <h2 className="uppercase text-2xl font-semibold">{name}</h2>
        </header>

        <button className="text-pink text-xs px-2 rounded">
            Ver detalles.
          </button>
  
        <section className="mt-1 text-left py-2">
          <p className="text-gray-700 mb-1 px-2">Price: ${price}</p>
          <p className="text-gray-700 px-2" >Stock: {stock}</p>
        </section>
        <footer className="mt-2">
          <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log("cantidad agregada", quantity)} />
        </footer>
        
      </article>
    )
}