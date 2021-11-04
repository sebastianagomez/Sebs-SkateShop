const products = [
    {
        id: 1,
        title: "Tony Hawk Rider",
        stock: 5,
        photo: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/164/761/products/drifterspdp_hrd_sk10001177_shot11-35fcce691ba0c486ac16355406012162-320-0.jpeg",
        price: 9100,
        category: "skate"
    },
    {
        id: 2,
        title: "Jay Adams Styles",
        stock: 10,
        photo: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/164/761/products/drifterspdp_hrd_shot11-e25fa47a170226d24716279982364368-320-0.jpg",
        price: 2000,
        category: "skate"
    },
    {
        id: 3,
        title: "Mark Gonzales on the Run",
        stock: 20,
        photo: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/164/761/products/drifterspdp_hrd_sk10001179_shot11-05cf5b19fb66f5c3c516355404606689-320-0.jpg",
        price: 500,
        category: "skate"
    },
    {
        id: 4,
        title: "Danny Way",
        stock: 6,
        photo: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/164/761/products/sk10001623-001-aa1-e6bb5ca6fbe1a3002716279995520329-320-0.jpg",
        price: 600,
        category: "skate"
    },
    {
        id: 5,
        title: "Steve Caballero Fire",
        stock: 10,
        photo: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/164/761/products/drifterspdp_hrd_sin0000990_shot11-d0770c7ee59cb38ff716355416824105-320-0.jpg",
        price: 750,
        category: "skate"
    },
    {
        id: 6,
        title: "Rodney Mullen 360°",
        stock: 8,
        photo: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/164/761/products/drifterspdp_hrd_sk10001174_shot11-548ade8ede5abbe1de16355407166557-320-0.jpg",
        price: 750,
        category: "skate"
    },
    {
        id: 7,
        title: "Handy Scream",
        stock: 15,
        photo: "https://m.media-amazon.com/images/I/615mjDiPCsL._AC_UL320_.jpg",
        price: 1750,
        category: "clothes"
    },
    {
        id: 8,
        title: "Bones X",
        stock: 20,
        photo: "https://m.media-amazon.com/images/I/615xSHamZgL._AC_UL320_.jpg",
        price: 2500,
        category: "clothes"
    },
    {
        id: 9,
        title: "Panda Love",
        stock: 5,
        photo: "https://m.media-amazon.com/images/I/81Okzh7J7uL._AC_UL320_.jpg",
        price: 1050,
        category: "clothes"
    },
    {
        id: 10,
        title: "Black and White",
        stock: 18,
        photo: "https://m.media-amazon.com/images/I/61v5lg-ZA9L._AC_UL320_.jpg",
        price: 1800,
        category: "clothes"
    },
    {
        id: 11,
        title: "Lips forever",
        stock: 12,
        photo: "https://m.media-amazon.com/images/I/61Y+1FEJ-UL._AC_UL320_.jpg",
        price: 1300,
        category: "clothes"
    },
    {
        id: 12,
        title: "Lips forever",
        stock: 12,
        photo: "https://m.media-amazon.com/images/I/81GtCF1AP9L._AC_UL320_.jpg",
        price: 1300,
        category: "shoes"
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