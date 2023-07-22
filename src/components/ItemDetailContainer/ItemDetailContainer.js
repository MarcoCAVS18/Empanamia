import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductsByID } from "../../asyncMock";
import ItemDetail from '../ItemDetail/ItemDetail';
import SpinnerSVG from "../../img/Spinner-1s-200px.svg";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { itemID } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getProductsByID(itemID)
      .then(response => {
        setProduct(response);
        setIsLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setIsLoading(false); 
      });
  }, [itemID]);

  console.log(product)

  if (error) {
    return (
      <div>
        {error}
      </div>
    )
  }
  
  if (isLoading || product === null) {
    return (
      <div className="spinner-container justify-center flex py-10">
        <img src={SpinnerSVG} alt="Loading spinner" className="w-20 h-20" />
      </div>
    );
  }

  return (
    <div>
      <ItemDetail id={itemID} {...product} />
    </div>
  );
};

export default ItemDetailContainer;

