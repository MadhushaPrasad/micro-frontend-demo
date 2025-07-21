import React, { Suspense } from "react";


const FeaturedProducts = React.lazy(
   // @ts-ignore
   async () => import('products/FeaturedProductsList'),
);


const Home = () => {
 return (
   <div>
     <h2>Home</h2>
     <Suspense fallback="loading...">
       <FeaturedProducts />
     </Suspense>
   </div>
 );
};


export default Home;
