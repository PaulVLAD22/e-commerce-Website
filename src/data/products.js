import $ from 'jquery'
async function getProducts(){
  const ans = await Promise.resolve($.post('http://localhost:8000/ReactApi/getProducts.php',{}))
  
  const postResponse=JSON.parse(ans);
  const productsRaw=JSON.parse(postResponse.products);
  const productNames=[];
  
  const products=[],size=4;
  for (var key in productsRaw){
    products[key]=[];
    if (productsRaw[key].length>0)
    productNames.push(key);
  }
  
  for (var key in productsRaw){
    if (productsRaw[key].length>0){
      while (productsRaw[key].length>0){
        products[key].push(productsRaw[key].splice(0,size));
      }
    }
  }
  console.log(products,productNames)
  return [products,productNames]
}
async function getProductDetails(product_id){
  const ans = await Promise.resolve($.post('http://localhost:8000/ReactApi/getProductDetails.php',{product_id:product_id}))
  const postResponse = JSON.parse(ans)
  return postResponse
}
export {getProducts,getProductDetails}