const products = [
    {
        id: "1",
        category: "al horno",
        name: "Carne suave",
        price: 1000,
        img: "https://i.postimg.cc/tCQvSnTB/Sin-t-tulo-5.jpg",
        stock: 25,
        description: "El relleno de nuestra Empanada de Carne Suave es una combinación magistral de carne de res tierna y jugosa, sazonada con una mezcla de especias secretas que realzan su sabor. Cada bocado te transportará a un viaje de sabores y te envolverá en una explosión de aromas irresistibles. La carne se cocina lentamente para asegurar que se mantenga suave y jugosa, con un sabor que te hará querer más."
    },

    {
        id: "2",
        category: "fritas",
        name: "Carne picante",
        price: 1000,
        img: "https://i.postimg.cc/htMCtC0Y/Sin-t-tulo-6.jpg",
        stock: 25,
        description: "Nuestra Empanada Picante es perfecta para aquellos amantes del picante que buscan una experiencia culinaria emocionante. Es ideal para aquellos que disfrutan de un toque audaz en su comida y están dispuestos a dejarse llevar por la aventura del sabor."
    },

    {
        id: "3",
        category: "fritas",
        name: "Berenjenas",
        price: 1200,
        img: "https://i.postimg.cc/wTXfSxRg/Sin-t-tulo-7.jpg",
        stock: 25,
        description: "El relleno de nuestra Empanada de Berenjenas Especia es una combinación ingeniosa de berenjenas tiernas y especias selectas que despiertan tus sentidos. Cada bocado te transporta a un mundo de sabores cautivadores y te envuelve en una sinfonía de aromas irresistibles"

    },

    {
        id: "4",
        category: "destacadas",
        name: "Jamon y Queso",
        price: 800,
        img: "https://i.postimg.cc/RFRmjBW2/Mesa-de-trabajo-1.png",
        stock: 25,
        description: "El relleno de nuestra Empanada de Berenjenas Especia es una combinación ingeniosa de berenjenas tiernas y especias selectas que despiertan tus sentidos. Cada bocado te transporta a un mundo de sabores cautivadores y te envuelve en una sinfonía de aromas irresistibles"

    },

]

export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(product => product.category === category))
        }, 2000)

    })
}

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)


    })
}

export const getProductsByID = (productID) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productID))
        }, 2000);
    })
}