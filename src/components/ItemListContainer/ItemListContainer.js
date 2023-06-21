import { useState, useEffect } from 'react'
import { getProducts } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"



const ItemListContainer = ({greeting}) => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()
                    .then(response => {
                        setProducts(response)
                    })
                    .catch(error => {
                        console.log(error)
                    })

    }, [])


    return (
        <div className="text-center py-10">
            <h1 className="text-3x1 font-sans uppercase">{greeting}</h1>
            <ItemList products={products}/>
        </div>
    );
}

export default ItemListContainer;