const products = [
    {
        id: "1",
        name: "Carne a cuchillo",
        price: 1000,
        img: "https://i.postimg.cc/tCQvSnTB/Sin-t-tulo-5.jpg",
        stock: 25,
        description: "Descripcion de la empanada CAC"
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
        name: "Berengenas",
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