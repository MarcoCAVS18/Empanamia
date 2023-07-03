import { useState, useEffect } from 'react';
import { getProductsByID } from "../../asyncMock";
import { useParams } from "react-router-dom";
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { itemID } = useParams(); 

  useEffect(() => {
    getProductsByID(itemID)
      .then(response => {
        setProduct(response);
      })
      .catch(error => {
        console.log(error);
      });
  }, [itemID]);

  return (
      <ItemDetail {...product} />
  );
};

export default ItemDetailContainer;

