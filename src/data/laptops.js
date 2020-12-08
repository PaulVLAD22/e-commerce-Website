const laptopsRaw=[
  {
    id:1,
    img:"https://lcdn.altex.ro/resize/media/catalog/product/I/d/16fa6a9aef7ffd6209d5fd9338ffa0b1/IdeaPad_S145-9.jpg",
    name:"Laptop lenovo legion 504",
    brand:"Lenovo",
    price:"250$",
    cpu:"Intel 10th-gen (10210)",
    storage:"500HDD",
    gpu:"Nvidia GTX 1080"
  }
]
export const laptops =[],size=4;
while (laptopsRaw.length>0){
  laptops.push(laptopsRaw.splice(0,size));
}
