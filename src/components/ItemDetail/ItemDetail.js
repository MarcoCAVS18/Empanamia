import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ name, img, category, description, price, stock }) => {
  return (
    <div className="container mx-auto py-4 w-3/5 ">
      <article className="grid grid-cols-1 lg:grid-cols-2 gap-4 border-gray rounded-lg p-4 shadow-2xl">
        <div className="h-64 lg:h-auto overflow-hidden">
          <img src={img} alt={name} className="w-full h-full object-cover rounded-md" />
        </div>

        <div className="p-4">
          <div className="border border-gray rounded-lg p-4 flex flex-col justify-center text-center bg-gray h-full">
            <header>
              <h1 className="text-gray-700 text-4xl pt-2 font-bold select-none">${price}</h1>
              <h2 className="uppercase text-2xl font-semibold tracking-wider">{name}</h2>
              <p className="inline-block px-2 bg-black text-white text-sm uppercase rouded-md">{category}</p>
            </header>

            <section className="mt-4 select-none">
              <div className="overflow-auto" style={{ maxHeight: "150px" }}>
                <p className="text-gray-500">{description}</p>
              </div>
              <div className="text-right">
                <p className="text-gray-500 mt-2 mb-2">Stock: {stock}</p>
              </div>
            </section>

            <footer className="mt-auto">
              <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log("cantidad agregada", quantity)} />
            </footer>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ItemDetail;
