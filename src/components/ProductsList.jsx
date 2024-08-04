// react-router-dom
import { useLoaderData } from "react-router-dom";
import SingleProduct from "./SingleProduct";


function ProductsList() {
  const { data } = useLoaderData();
  console.log(data);
  const reverseData = data.products.reverse();

  return (
    <div className="container" style={{marginTop: "50px"}} >
      <div style={{ display: "flex", flexWrap: "wrap", gap: "30px"}}>
        {reverseData &&
          reverseData.map((product) => {
            return <SingleProduct key={product.id} product={product} />;
          })}
      </div>
    </div>
  );
}

export default ProductsList;
