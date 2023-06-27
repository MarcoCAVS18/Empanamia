import Item from "../Item/Item";

const ItemList = ({ products }) => {
  return (
    <div className="flex justify-center items-center gap-6 flex-wrap">
      {products.map((product) => (
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6" key={product.id}>
          <Item {...product} />
        </div>
      ))}
    </div>
  );
};

export default ItemList;
