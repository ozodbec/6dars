import React from "react";
import { Card } from "antd";
const { Meta } = Card;

function SingleProduct({ product }) {
  return (
    <div className="container" >
      <Card
        hoverable
        style={{
          width: 260,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        className="singleproduct"
        cover={
          <img
            alt="example"
            src={product.thumbnail}
            style={{ width: "100%", maxWidth: "160px" }}
          />
        }
      >
        <h3 className="title">{product.title.slice(0, 20)}</h3>
        <p>{product.description.slice(0, 40)}</p>
      </Card>
    </div>
  );
}

export default SingleProduct;
