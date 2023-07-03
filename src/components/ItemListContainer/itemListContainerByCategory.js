import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductsByCategory } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
import SpinnerSVG from "./Spinner-1s-200px.svg"

const ItemListContainerByCategory = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { categoryID } = useParams();

  useEffect(() => {
    setIsLoading(true)
    getProductsByCategory(categoryID)
      .then(response => {
          setProducts(response);
          setIsLoading(false);
      })
      .catch(error => {
        console.log(error);
        setIsLoading(false);
      });
  }, [categoryID]);


  return (
    <div className="text-center py-10">
      { 
        isLoading ? (
            <div className="spinner-container justify-center flex">
              <img src={SpinnerSVG} alt="Loading spinner" className="w-20 h-20" />
            </div>
          ) : (
            <ItemList products={products} />
          )
    }
    </div>
  );
};

export default ItemListContainerByCategory;
