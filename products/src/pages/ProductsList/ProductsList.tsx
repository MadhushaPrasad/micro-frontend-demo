import { useEffect, useState } from "react";
import { ProductListItem } from "../../components/ProductListItem/ProductListItem";
import type { IProduct } from "../../interfaces/IProduct";
import "./ProductsList.css";
import FeaturedProductsList from "../../components/FeaturedProductsList/FeaturedProductsList";


export const ProductList = () => {
 const [products, setProducts] = useState<IProduct[]>([]);


 useEffect(() => {
   fetchProducts();
 }, []);


 const fetchProducts = async () => {
   try {
     const productsResponse = await fetch("https://dummyjson.com/products");
     const productsResponseJson = await productsResponse.json();
     setProducts(productsResponseJson.products);
   } catch (error) {
     console.log("error", error);
   }
 };


 return (
   <div className="product-list-container">
     <h2>Products</h2>
     <FeaturedProductsList></FeaturedProductsList>
     <h2 className="heading">All Products</h2>
     <div className="products-list">
       {products.map((item) => (
         <ProductListItem product={item}></ProductListItem>
       ))}
     </div>
   </div>
 );
};
