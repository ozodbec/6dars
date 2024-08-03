// react-router-dom
import { useLoaderData } from "react-router-dom";
import SingleProduct from "./SingleProduct";

function ProductsList() {
  const { data } = useLoaderData();
  console.log(data)

  return <div>
    { data && data.products.map((product)=>{
        return <SingleProduct key={product.id} product={product}/>
    })}
  </div>;
}

export default ProductsList;
