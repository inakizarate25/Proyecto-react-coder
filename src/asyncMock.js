

export const products = [
    {
        id: "1",
        name: "IPhone 13 pro",
        price: 798999,
        category: 'celulares',
        img: 'https://i.ibb.co/VjfJJ6n/iphone-13-pro.png',
        stock: 3,
        description: "128GB",
      },
      {
        id: "2",
        category: 'consolas',
        stock: 8,
       name: "PlayStation 5",
       description: "950GB",
        price: 480000,
        img: "https://i.ibb.co/hRpc76G/ps5.png"
      },
      {
        id: "3",
        category: 'accesorios',
        stock: 5,
       name: "Apple Watch Nike SE",
       description: "Space Grey Aluminium",
        price: 159999,
        img: "https://i.ibb.co/xfYH2TB/applewatch.png"
      },
      {
        id: "4",
        category: 'notebooks',
        stock: 10,
       name: "Lenovo IdealPad",
       description: "intel i9 500GB SSD 15GB RAM",
        price: 298000,
        img: "https://i.ibb.co/TWqZsTB/9d0524ae-6188-4f8f-8203-6293a9891608.png"
      }
]



  export const getProductById = (productId) => {
    return new Promise ((resolve) => {
      setTimeout(() => {
        resolve(products.find(product => product.id === productId))
      }, 500);
    })
  }

 