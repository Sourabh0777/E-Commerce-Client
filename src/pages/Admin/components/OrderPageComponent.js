import React, { useEffect, useState } from "react";
import { Row, Col, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import AdminLinksComponent from "../../../components/admin/AdminLinksComponent";

const OrderPageComponent = ({ fetchOrders }) => {
  const [Orders, setOrders] = useState([]);
  useEffect(() => {
    const abtCtrl = new AbortController();
    fetchOrders(abtCtrl)
      .then((res) => setOrders(res))
      .catch((err) => {
        console.log(err.response.data.message ? err.response.data.message : err.response.data);
      });
    return () => abtCtrl.abort();
  }, [fetchOrders]);
  return (
    <Row className="m-5">
      <Col md={2}>
        <AdminLinksComponent />
      </Col>
      <Col md={10}>
        <h1>Orders</h1>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>User</th>
              <th>Date</th>
              <th>Total</th>
              <th>Delivered</th>
              <th>Payment Method</th>
              <th>Order details</th>
            </tr>
          </thead>
          <tbody>
            {Orders?.map((Order, idx) => (
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td>
                  {Order.user !== null ? (
                    <>
                      {Order.user.name} {Order.user.lastName}
                    </>
                  ) : null}
                </td>
                <td>{Order.createdAt.substring(0, 10)}</td>
                <td>{Order.orderTotal ? <>{Order.orderTotal.cartSubTotal}</> : null}</td>
                <td>
                  {Order.isDelivered ? (
                    <i className="bi bi-check-lg text-success"></i>
                  ) : (
                    <i className="bi bi-x-lg text-danger"></i>
                  )}
                </td>
                <td>{Order.paymentMethod}</td>
                <td>
                  <Link to={`/admin/order-details/${Order._id}`}>go to order</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Col>
    </Row>
  );
};

export default OrderPageComponent;
