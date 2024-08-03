import React from "react";

// customfetch
import { castumFetch } from "../utils";
import Hero from "../components/Hero";
import { ProductsList } from "../components";


// loader 
export const loader = async ()=>{
  const response = await castumFetch();
  const data = response.data;
  console.log(data)
  return {data}
}



function Home() {
return(
  <div>
    <Hero/>
    <ProductsList/>
  </div>

)
}

export default Home;
