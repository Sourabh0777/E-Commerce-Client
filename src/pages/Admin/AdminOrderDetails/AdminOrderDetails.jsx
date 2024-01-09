import React from "react";

import OrderDetailsPageComponent from "../components/OrderDetailsPageComponent";
import axios from "axios";
const AdminOrderDetails = (props) => {
  const getOrderDetails = async (orderID) => {
    const { data } = await axios.get(`/api/order/user/${orderID}`);
    return data;
  };
  const markAsDelivered = async (id) => {
    const { data } = await axios.put(`/api/order/delivered/${id}`);
    return data;
  };
  return (
    <OrderDetailsPageComponent
      getOrderDetails={getOrderDetails}
      markAsDelivered={markAsDelivered}
    />
  );
};

export default AdminOrderDetails;
