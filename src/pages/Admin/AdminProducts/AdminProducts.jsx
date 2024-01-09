import React from "react";
import ProductsPageComponent from "../components/ProductsPageComponent";
import axios from "axios";

const AdminProducts = (props) => {
  const fetchProducts = async (abtCtrl) => {
    const { data } = await axios.get("/api/products/admin", { signal: abtCtrl.signal });
    return data;
  };
  const deleteProduct = async (id) => {
    const { data } = await axios.delete(`/api/products/admin/${id}`);
    return data;
  };
  return <ProductsPageComponent fetchProducts={fetchProducts} deleteProduct={deleteProduct} />;
};

export default AdminProducts;
