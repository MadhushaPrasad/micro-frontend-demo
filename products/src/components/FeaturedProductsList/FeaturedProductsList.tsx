import { useEffect, useState } from "react";
import type { IProduct } from "../../interfaces/IProduct";
import { ProductListItem } from "../ProductListItem/ProductListItem";
import "./FeaturedProductsList.css";


const FeaturedProductsList = () => {
 const [featuredProducts, setFeaturedProducts] = useState<IProduct[]>([]);


 useEffect(() => {
   fetchProducts();
 }, []);


 const fetchProducts = async () => {
   try {
     const productsResponse = await fetch('https://dummyjson.com/products?limit=10&skip=10&select=title,price,images,description');
     const productsResponseJson = await productsResponse.json();
     setFeaturedProducts(productsResponseJson.products);
   } catch (error) {
     console.log("error", error);
   }
 };


 return (
   <div>
     <h2 className="heading">Featured Products</h2>
     <div className="featured-product-list">
       {featuredProducts.map((item) => (
         <ProductListItem product={item}></ProductListItem>
       ))}
     </div>
   </div>
 );
};


export default FeaturedProductsList;
