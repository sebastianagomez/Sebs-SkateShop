const products = [
    {
        id: 1,
        title: "Tony Hawk Rider",
        stock: 5,
        photo: "./assets/images/skate-1.jpeg",
        price: 5100,
        category: "skate"
    },
    {
        id: 2,
        title: "Jay Adams Styles",
        stock: 10,
        photo: "./assets/images/skate-2.jpg",
        price: 2000,
        category: "skate"
    },
    {
        id: 3,
        title: "Mark Gonzales on the Run",
        stock: 20,
        photo: "./assets/images/skate-3.jpg",
        price: 500,
        category: "skate"
    },
    {
        id: 4,
        title: "Danny Way",
        stock: 6,
        photo: "./assets/images/skate-4.jpg",
        price: 600,
        category: "skate"
    },
    {
        id: 5,
        title: "Steve Caballero Fire",
        stock: 0,
        photo: "./assets/images/skate-5.jpg",
        price: 750,
        category: "shoes"
    },
    {
        id: 6,
        title: "Rodney Mullen 360°",
        stock: 8,
        photo: "./assets/images/skate-6.jpg",
        price: 750,
        category: "clothes"
    }
];

export const getFetch = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(products);
    }, 2000);
});

const OneProduct = {
    id: 1,
    title: "Skate Element", 
    stock: 5,
    photo: "./assets/images/skate-1.jpeg",
    price: 500,
    detail: "BRILLA EN LA OSCURIDAD",
};

export const getFetchOneProduct = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(OneProduct);
    }, 2000);
}); 