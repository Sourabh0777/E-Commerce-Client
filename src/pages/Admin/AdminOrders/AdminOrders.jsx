import React from "react";
import OrderPageComponent from "../components/OrderPageComponent";
import axios from "axios";
const AdminOrders = (props) => {
  const fetchOrders = async () => {
    const { data } = await axios.get("/api/order/admin");
    return data;
  };
  return <OrderPageComponent fetchOrders={fetchOrders} />;
};

export default AdminOrders;
