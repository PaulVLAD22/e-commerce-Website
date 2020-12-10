
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
      name:"Hamster Galaxy S8",
      brand:"Hamster",
      price:100
    },
    {
      id:3,
      img:"https://lcdn.altex.ro/resize/media/catalog/product/S/M/16fa6a9aef7ffd6209d5fd9338ffa0b1/SMTA20SBK_2.jpg",
      descr:"2GB RAM, 64 GB Storage",
      name:"Hamster Galaxy S8",
      brand:"Hamster",
      price:100
    },
    {
      id:4,
      img:"https://lcdn.altex.ro/resize/media/catalog/product/S/M/16fa6a9aef7ffd6209d5fd9338ffa0b1/SMTA20SBK_2.jpg",
      descr:"2GB RAM, 64 GB Storage",
      name:"Hamster Galaxy S8",
      brand:"Hamster",
      price:100
    },
    {
      id:7,
      img:"https://lcdn.altex.ro/resize/media/catalog/product/S/M/16fa6a9aef7ffd6209d5fd9338ffa0b1/SMTA20SBK_2.jpg",
      descr:"2GB RAM, 64 GB Storage",
      name:"Hamster Galaxy S8",
      brand:"Hamster",
      price:100
    },
    {
      id:100,
      img:"https://lcdn.altex.ro/resize/media/catalog/product/S/M/16fa6a9aef7ffd6209d5fd9338ffa0b1/SMTA20SBK_2.jpg",
      descr:"2GB RAM, 64 GB Storage",
      name:"Hamster Galaxy S8",
      brand:"Hamster",
      price:100
    },
    {
      id:200,
      img:"https://lcdn.altex.ro/resize/media/catalog/product/S/M/16fa6a9aef7ffd6209d5fd9338ffa0b1/SMTA20SBK_2.jpg",
      descr:"2GB RAM, 64 GB Storage",
      name:"Hamster Galaxy S8",
      brand:"Hamster",
      price:100
    },
    {
      id:300,
      img:"https://lcdn.altex.ro/resize/media/catalog/product/S/M/16fa6a9aef7ffd6209d5fd9338ffa0b1/SMTA20SBK_2.jpg",
      descr:"2GB RAM, 64 GB Storage",
      name:"Hamster Galaxy S8",
      brand:"Hamster",
      price:100
    },{
      id:400,
      img:"https://lcdn.altex.ro/resize/media/catalog/product/S/M/16fa6a9aef7ffd6209d5fd9338ffa0b1/SMTA20SBK_2.jpg",
      descr:"2GB RAM, 64 GB Storage",
      name:"Hamster Galaxy S8",
      brand:"Hamster",
      price:100
    },
    {
      id:500,
      img:"https://lcdn.altex.ro/resize/media/catalog/product/S/M/16fa6a9aef7ffd6209d5fd9338ffa0b1/SMTA20SBK_2.jpg",
      descr:"2GB RAM, 64 GB Storage",
      name:"Hamster Galaxy S8",
      brand:"Hamster",
      price:100
    },{
      id:600,
      img:"https://lcdn.altex.ro/resize/media/catalog/product/S/M/16fa6a9aef7ffd6209d5fd9338ffa0b1/SMTA20SBK_2.jpg",
      descr:"2GB RAM, 64 GB Storage",
      name:"Hamster Galaxy S8",
      brand:"Hamster",
      price:100
    },{
      id:700,
      img:"https://lcdn.altex.ro/resize/media/catalog/product/S/M/16fa6a9aef7ffd6209d5fd9338ffa0b1/SMTA20SBK_2.jpg",
      descr:"2GB RAM, 64 GB Storage",
      name:"Hamster Galaxy S8",
      brand:"Hamster",
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
  Hamster:
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
      img:"https://lcdn.altex.ro/resize/media/catalog/product/2/e/16fa6a9aef7ffd6209d5fd9338ffa0b1/2e29d0ff1c72a537798ce1cafe6a7579_154230_2.jpg",
      descr:"4k 1920px diagonal",
      name:"Samsung LED Ultra H-5403",
      brand:"Samsung",
      price:500

    } 
  ]
}

export const productNames=[];

export const products=[],size=4;
for (var key in productsRaw){
  products[key]=[];
  productNames.push(key);
}


for (var key in productsRaw){
  while (productsRaw[key].length>0){
    products[key].push(productsRaw[key].splice(0,size));
  }
}

console.log(products);
