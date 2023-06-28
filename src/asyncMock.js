const products = [
    {
        id: "1",
        name: "Carne suave",
        price: 1000,
        img: "https://i.postimg.cc/tCQvSnTB/Sin-t-tulo-5.jpg",
        stock: 25,
        description: "El relleno de nuestra Empanada de Carne Suave es una combinación magistral de carne de res tierna y jugosa, sazonada con una mezcla de especias secretas que realzan su sabor. Cada bocado te transportará a un viaje de sabores y te envolverá en una explosión de aromas irresistibles. La carne se cocina lentamente para asegurar que se mantenga suave y jugosa, con un sabor que te hará querer más."
    },

    {
        id: "2",
        name: "Carne picante",
        price: 1000,
        img: "https://i.postimg.cc/htMCtC0Y/Sin-t-tulo-6.jpg",
        stock: 25,
        description: "Descripcion de la empanada CP"
    },

    {
        id: "3",
        name: "Berenjenas",
        price: 1200,
        img: "https://i.postimg.cc/wTXfSxRg/Sin-t-tulo-7.jpg",
        stock: 25,
        description: "Descripcion de la empanada BE"

    }

]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)


    })
}

export const getProductsByID = (productID) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productID))
        }, 500);
    })
}