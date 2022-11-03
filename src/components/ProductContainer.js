import React from "react";
import AddNewProductComponent from "./AddNewProductComponent";
import ProductList from "./ProductList";

const ProductContainer = () => {
  const headerStyle = {
    padding: "20px 0",
    lineHeight: "2em",
  };
  const getHeader = () => {
    return <header style={headerStyle}>
    <h1 style={{ fontSize: "25px", marginBottom: "15px" }}>
      Products List
    </h1>
  </header>
  }
  
    return (
      <div className="container">
        {getHeader()}
        <AddNewProductComponent/>
        <ProductList />
      </div>
    );
}
export default ProductContainer;
