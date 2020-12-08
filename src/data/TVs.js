const tvsRaw=[
  {
    id:1,
    img:"https://lcdn.altex.ro/resize/media/catalog/product/2/e/16fa6a9aef7ffd6209d5fd9338ffa0b1/2e29d0ff1c72a537798ce1cafe6a7579_154230_2.jpg",
    descr:"4k 1920px diagonal",
    name:"Samsung LED Ultra H-5403",
    brand:"Samsung",
    price:"500$"
  }
]
export const tvs =[],size=4;
while (tvsRaw.length>0){
  tvs.push(tvsRaw.splice(0,size));
}
