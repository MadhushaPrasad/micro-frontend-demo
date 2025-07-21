import type { IProduct } from "../../interfaces/IProduct";
import "./ProductListItem.css";


interface ProductListItemProps {
 product: IProduct;
}


export const ProductListItem = (props: ProductListItemProps) => {
 const { product } = props;
 return (
   <div className="product-card">
     <div className="product-image-container">
       <img src={product.images[0]} className="product-image"></img>
     </div>
     <h3>{product.title}</h3>
     <h2>{`$ ${product.price}`}</h2>
     <h6>{product.description}</h6>
   </div>
 );
};
