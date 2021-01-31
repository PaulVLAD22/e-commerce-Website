import ProductRow from './ProductRow';

function ProductList({products,productCategory}){
    
    return (
      <div className="container-fluid">
        {products[productCategory].map((productsRow,index)=>{
          console.log(productsRow);
          return (
             <ProductRow key={index} {...productsRow} ></ProductRow>
          )
        })}
     </div>
    )
}
export default ProductList;