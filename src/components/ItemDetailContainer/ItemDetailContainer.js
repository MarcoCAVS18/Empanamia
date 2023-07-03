import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { getProductsByID } from "../../asyncMock";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import ItemCount from '../ItemCount/ItemCount';

const ItemDetailContainer = ({ productId }) => {
  const [product, setProduct] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    getProductsByID(productId)
      .then(response => {
        setProduct(response);
      })
      .catch(error => {
        console.log(error);
      });
  }, [productId]);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      {product && (
        <div>
          <button className="text-gray-500 text-xs px-2 rounded" onClick={openModal}>
            Ver detalles
          </button>
        </div>
      )}

      {modalOpen && product && ReactDOM.createPortal(
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="bg-white rounded-lg p-4 z-10 relative border border-solid border-gray-200 flex shadow-2xl w-[42rem] h-96">
            <button
              className="absolute top-0 right-0 mt-2 mr-2 bg-red-600 text-white w-8 h-8 flex items-center justify-center"
              onClick={closeModal}
            >
              <FontAwesomeIcon icon={faTimes} className="text-white" />
            </button>
            <div className="w-1/2">
              <img src={product.img} alt={product.name} className="w-full h-full object-cover" />
            </div>
            <div className="w-1/2 ml-4 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-4 uppercase pt-4">{product.name}</h2>
                <p className="max-h-40 overflow-y-auto">{product.description}</p>
              </div>
              <div className="mt-4">
                <ItemCount initial={1} stock={product.stock} onAdd={(quantity) => console.log("cantidad agregada", quantity)} />
              </div>
            </div>
          </div>
        </div>,
        document.getElementById('modal-root')
      )}
    </>
  );
};

export default ItemDetailContainer;

