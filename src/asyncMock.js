

const products = [
    {
        id: 1,
        name: "IPhone 13 pro",
        price: 798999,
        category: "Celulares",
        img: 'https://i.ibb.co/VjfJJ6n/iphone-13-pro.png',
        stock: 3,
        description: "128GB",
      },
      {
        id: 2,
        category: "consolas",
        stock: 1,
       name: "PlayStation 5",
       description: "950GB",
        price: 480000,
        img: "https://i.ibb.co/hRpc76G/ps5.png"
      },
      {
        id: 3,
        category: "accesorios",
        stock: 1,
       name: "Apple Watch Nike SE",
       description: "Space Grey Aluminium",
        price: 159999,
        img: "https://i.ibb.co/xfYH2TB/applewatch.png"
      }
     
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
  }

  export const getProductById = (productId) => {
    return new Promise ((resolve) => {
      setTimeout(() => {
        resolve(products.find(prod => prod.id === productId))
      }, 2000);
    })
  }