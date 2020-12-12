import {products} from '../../data/products';
import ProductRow from './ProductRow';

function ProductList({productName}){
    console.log(productName);
    console.log(products[productName]);
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