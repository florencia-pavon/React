const productos = [
    {
        "id": "1",
        "nombre": "Marquise con Oreo",
        "precio": 20500,
        "imagen": "../public/multimedia/tortas/marquise.jpg",
        "idCategoria": "tortas",
        "stock": 10,
        "descripcion": "Deliciosa torta de chocolate con base de galletas Oreo y crema de chocolate."
    },
    {
        "id": "2",
        "nombre": "Lemon Pie",
        "precio": 17500,
        "imagen": "../public/multimedia/tortas/lemon.jpg",
        "idCategoria": "tortas",
        "stock": 15,
        "descripcion": "Tarta de limón con merengue y base de galleta."
    },
    {
        "id": "3",
        "nombre": "Rogel",
        "precio": 18500,
        "imagen": "../public/multimedia/tortas/rogel.jpg",
        "idCategoria": "tortas",
        "stock": 8,
        "descripcion": "Torta de capas de masa y dulce de leche, cubierta con merengue."
    },
    {
        "id": "4",
        "nombre": "Cheescake",
        "precio": 18000,
        "imagen": "../public/multimedia/tortas/cheescake.jpg",
        "idCategoria": "tortas",
        "stock": 12,
        "descripcion": "Tarta de queso con base de galleta y mermelada de frutas."
    },
    {
        "id": "5",
        "nombre": "Cabsha",
        "precio": 20500,
        "imagen": "../public/multimedia/tortas/cabsha.jpg",
        "idCategoria": "tortas",
        "stock": 5,
        "descripcion": "Torta de chocolate con dulce de leche y cobertura de chocolate."
    },
    {
        "id": "6",
        "nombre": "Pavlova",
        "precio": 22000,
        "imagen": "../public/multimedia/tortas/pavlova.jpg",
        "idCategoria": "tortas",
        "stock": 7,
        "descripcion": "Tarta de merengue con crema y frutas frescas."
    },
    {
        "id": "7",
        "nombre": "Carrot Cake",
        "precio": 2500,
        "imagen": "../public/multimedia/cookies/carrot.jpg",
        "idCategoria": "cookies",
        "stock": 20,
        "descripcion": "Cookies de zanahoria con nueces y especias."
    },
    {
        "id": "8",
        "nombre": "Brownie",
        "precio": 2000,
        "imagen": "../public/multimedia/cookies/brownie.jpg",
        "idCategoria": "cookies",
        "stock": 25,
        "descripcion": "Cookies de chocolate con nueces y trozos de chocolate."
    },
    {
        "id": "9",
        "nombre": "Canela",
        "precio": 2000,
        "imagen": "../public/multimedia/cookies/canela.jpg",
        "idCategoria": "cookies",
        "stock": 18,
        "descripcion": "Cookies de canela con un toque de vainilla."
    },
    {
        "id": "10",
        "nombre": "Chip de Chocolate",
        "precio": 2000,
        "imagen": "../public/multimedia/cookies/chip.jpg",
        "idCategoria": "cookies",
        "stock": 22,
        "descripcion": "Cookies de chocolate con chips de chocolate."
    },
    {
        "id": "11",
        "nombre": "Red Velvet",
        "precio": 3000,
        "imagen": "../public/multimedia/cookies/red.jpg",
        "idCategoria": "cookies",
        "stock": 10,
        "descripcion": "Cookies de vainilla con colorante rojo y crema de queso."
    },
    {
        "id": "12",
        "nombre": "Pistacho",
        "precio": 3000,
        "imagen": "../public/multimedia/cookies/pistacho.jpg",
        "idCategoria": "cookies",
        "stock": 14,
        "descripcion": "Cookies de pistacho con trozos de chocolate blanco."
    }
];

export const getProductos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (productos.length > 0) {
                resolve(productos);
            } else {
                reject(new Error("No se encontraron productos."));
            }
        }, 500);
    });
};

export const getProductoId = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            if (producto) {
                resolve(producto);
            } else {
                reject(new Error(`No se encontró el producto con id: ${id}`));
            }
        }, 500);
    });
};

export const getProductosCategoria = (idCategoria) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const productosFiltrados = productos.filter(prod => prod.idCategoria === idCategoria);
            if (productosFiltrados.length > 0) {
                resolve(productosFiltrados);
            } else {
                reject(new Error(`No se encontraron productos de la categoria: ${idCategoria}`));
            }
        }, 500);
    });
}

