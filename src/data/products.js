function getProducts(){
  //aici
  const productsRaw={
    Laptop:
    [
      {
      id:1,
      img:"https://lcdn.altex.ro/resize/media/catalog/product/I/d/16fa6a9aef7ffd6209d5fd9338ffa0b1/IdeaPad_S145-9.jpg",
      name:"Laptop lenovo legion 504",
      brand:"Lenovo",
      price:250,
      descr:"4GB RAM, 512 GB SSD, Radeon R7 320"
    }],
    Smartphone:
    [
      {
        id:2,
        img:"https://lcdn.altex.ro/resize/media/catalog/product/S/M/16fa6a9aef7ffd6209d5fd9338ffa0b1/SMTA20SBK_2.jpg",
        descr:"2GB RAM, 64 GB Storage",
        name:"Samsung Galaxy S8",
        brand:"Samsung",
        price:100
      },
      {
        id:3,
        img:"https://lcdn.altex.ro/resize/media/catalog/product/S/M/16fa6a9aef7ffd6209d5fd9338ffa0b1/SMTA20SBK_2.jpg",
        descr:"2GB RAM, 64 GB Storage",
        name:"Samsung Galaxy S8",
        brand:"Samsung",
        price:100
      },
      {
        id:4,
        img:"https://lcdn.altex.ro/resize/media/catalog/product/S/M/16fa6a9aef7ffd6209d5fd9338ffa0b1/SMTA20SBK_2.jpg",
        descr:"2GB RAM, 64 GB Storage",
        name:"Samsung Galaxy S8",
        brand:"Samsung",
        price:100
      },
      {
        id:7,
        img:"https://lcdn.altex.ro/resize/media/catalog/product/S/M/16fa6a9aef7ffd6209d5fd9338ffa0b1/SMTA20SBK_2.jpg",
        descr:"2GB RAM, 64 GB Storage",
        name:"Samsung Galaxy S8",
        brand:"Samsung",
        price:100
      },
      {
        id:100,
        img:"https://lcdn.altex.ro/resize/media/catalog/product/S/M/16fa6a9aef7ffd6209d5fd9338ffa0b1/SMTA20SBK_2.jpg",
        descr:"2GB RAM, 64 GB Storage",
        name:"Samsung Galaxy S8",
        brand:"Samsung",
        price:100
      },
      {
        id:200,
        img:"https://lcdn.altex.ro/resize/media/catalog/product/S/M/16fa6a9aef7ffd6209d5fd9338ffa0b1/SMTA20SBK_2.jpg",
        descr:"2GB RAM, 64 GB Storage",
        name:"Samsung Galaxy S8",
        brand:"Samsung",
        price:100
      },
      {
        id:300,
        img:"https://lcdn.altex.ro/resize/media/catalog/product/S/M/16fa6a9aef7ffd6209d5fd9338ffa0b1/SMTA20SBK_2.jpg",
        descr:"2GB RAM, 64 GB Storage",
        name:"Samsung Galaxy S8",
        brand:"Samsung",
        price:100
      },{
        id:400,
        img:"https://lcdn.altex.ro/resize/media/catalog/product/S/M/16fa6a9aef7ffd6209d5fd9338ffa0b1/SMTA20SBK_2.jpg",
        descr:"2GB RAM, 64 GB Storage",
        name:"Samsung Galaxy S8",
        brand:"Samsung",
        price:100
      },
      {
        id:500,
        img:"https://lcdn.altex.ro/resize/media/catalog/product/S/M/16fa6a9aef7ffd6209d5fd9338ffa0b1/SMTA20SBK_2.jpg",
        descr:"2GB RAM, 64 GB Storage",
        name:"Samsung Galaxy S8",
        brand:"Samsung",
        price:100
      },{
        id:600,
        img:"https://lcdn.altex.ro/resize/media/catalog/product/S/M/16fa6a9aef7ffd6209d5fd9338ffa0b1/SMTA20SBK_2.jpg",
        descr:"2GB RAM, 64 GB Storage",
        name:"Samsung Galaxy S8",
        brand:"Samsung",
        price:100
      },{
        id:700,
        img:"https://lcdn.altex.ro/resize/media/catalog/product/S/M/16fa6a9aef7ffd6209d5fd9338ffa0b1/SMTA20SBK_2.jpg",
        descr:"2GB RAM, 64 GB Storage",
        name:"Samsung Galaxy S8",
        brand:"Samsung",
        price:100
    }],
    Tv:
    [
      {
        id:12,
        img:"https://lcdn.altex.ro/resize/media/catalog/product/2/e/16fa6a9aef7ffd6209d5fd9338ffa0b1/2e29d0ff1c72a537798ce1cafe6a7579_154230_2.jpg",
        descr:"4k 1920px diagonal",
        name:"Samsung LED Ultra H-5403",
        brand:"Samsung",
        price:500
      }
    ],
    Samsung:
    [
      {
        id:12,
        img:"https://lcdn.altex.ro/resize/media/catalog/product/2/e/16fa6a9aef7ffd6209d5fd9338ffa0b1/2e29d0ff1c72a537798ce1cafe6a7579_154230_2.jpg",
        descr:"4k 1920px diagonal",
        name:"Samsung LED Ultra H-5403",
        brand:"Samsung",
        price:500
      }
    ],
    Stonk:
    [
      {
        id:12,
        img:"https://s13emagst.akamaized.net/products/4426/4425063/images/res_a80e8a6f3e26afc1e636bfb5bcac3e88.jpg?width=450&height=450&hash=F25ABFF754051164E4EE54DF8B19BE04",
        descr:"4k 1920px diagonal",
        name:"Samsung LED Ultra H-5403",
        brand:"Samsung",
        price:500
  
      } 
    ]
  }
  
  const productNames=[];
  
  const products=[],size=4;
  for (var key in productsRaw){
    products[key]=[];
    productNames.push(key);
  }
  
  
  for (var key in productsRaw){
    while (productsRaw[key].length>0){
      products[key].push(productsRaw[key].splice(0,size));
    }
  }
  console.log("EXECUTATA")
  return [products,productNames]
}
export {getProducts};