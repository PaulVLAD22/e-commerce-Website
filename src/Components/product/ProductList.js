import ProductRow from './ProductRow';

function ProductList({products,productName}){
    console.log(productName);
    return (
      <div className="container-fluid">
        {products[productName].map((productsRow,index)=>{
          console.log(productsRow);
          return (
             <ProductRow key={index} {...productsRow} ></ProductRow>
          )
        })}
     </div>
    )
}
export default ProductList;