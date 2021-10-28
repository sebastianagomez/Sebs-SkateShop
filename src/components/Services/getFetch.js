const products = [
    {
        id: 1,
        title: "Skate Element",
        stock: 5,
        photo: "./assets/images/skate-1.jpg",
        price: 500,
        category: "skate"
    }
    // {
    //     id: 2,
    //     title: "",
    //     stock: 10,
    //     photo: "#",
    //     price: 2000,
    //     category: "skate"
    // },
    // {
    //     id: 3,
    //     title: "",
    //     stock: 20,
    //     photo: "#",
    //     price: 500,
    //     category: "skate"
    // },
    // {
    //     id: 4,
    //     title: "",
    //     stock: 6,
    //     photo: "#",
    //     price: 600,
    //     category: "skate"
    // },
    // {
    //     id: 5,
    //     title: "",
    //     stock: 0,
    //     photo: "#",
    //     price: 750,
    //     category: "skate"
    // }
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
    photo: "./assets/Images/skate-1.jpg",
    price: 500,
    detail: "BRILLA EN LA OSCURIDAD",
};

export const getFetchOneProduct = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(OneProduct);
    }, 2000);
});