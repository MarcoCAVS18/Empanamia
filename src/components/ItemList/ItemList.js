import Item from "../Item/Item";

const ItemList = ({ products }) => {
  return (
    <div className="flex justify-center items-center gap-6">
      {products.map((product) => (
        <Item key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ItemList;