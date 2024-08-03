import React from "react";

function SingleProduct({ product }) {
  return (
    <div className="singleproduct container">
      <div className="product-item">
          <img src={product.thumbnail} className="" style={{width:"200px"}} />
          <h1 className="title">{product.title}</h1>
      </div>
    </div>
  );
}

export default SingleProduct;
