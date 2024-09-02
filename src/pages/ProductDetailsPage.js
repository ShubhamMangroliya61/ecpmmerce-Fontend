import React from "react";
import ProductDetails from "../features/product/components/ProductDetails";
import Navbar from "../features/navbar/Navbar";

function ProductDetailsPage() {
  return (
    <Navbar>
      <ProductDetails />
    </Navbar>
  );
}

export default ProductDetailsPage;
