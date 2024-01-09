import React from "react";
import { Container, Row, Col, Form, Alert, ListGroup, Button } from "react-bootstrap";
import CartItemComponent from "../../../components/CartItemComponent";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
const OrderDetailsPageComponent = ({ getOrderDetails, markAsDelivered }) => {
  const { id } = useParams();
  const [UserInfo, setUserInfo] = useState();
  const [paymentMethod, setPaymentMethod] = useState();
  const [isPaid, setIsPaid] = useState();
  const [isDelivered, setIsDelivered] = useState();
  const [cartSubtotal, setCartSubtotal] = useState();
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [OrderButtonMessage, setOrderButtonMessage] = useState("Mark as delivered");
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    const abtCtrl = new AbortController();
    getOrderDetails(id)
      .then((res) => {
        setUserInfo(res.user);
        setPaymentMethod(res.paymentMethod);
        res.isPaid ? setIsPaid(res.paidAt) : setIsPaid(false);
        res.isDelivered ? setIsDelivered(res.isDelivered) : setIsDelivered(false);
        setIsDelivered(res.isDelivered);
        setCartSubtotal(res.orderTotal.cartSubTotal);
        if (res.isDelivered) {
          setOrderButtonMessage("Order is finished");
          setButtonDisabled(true);
        }
        setCartItems(res.cartItems);
      })
      .catch((err) => {
        console.log(err.response.data.message ? err.response.data.message : err.response.data);
      });
    return () => {
      abtCtrl.abort();
    };
  }, [getOrderDetails, id, isDelivered]);
  const markOrderAsDelivered = async (id) => {
    markAsDelivered(id)
      .then((res) => {
        if (res) {
          setIsDelivered(true);
        }
      })
      .catch((err) => {
        console.log(err.response.data.message ? err.response.data.message : err.response.data);
      });
  };
  return (
    <Container fluid>
      <Row className="mt-4">
        <h1>Order Details</h1>
        <Col md={8}>
          <br />
          <Row>
            {UserInfo && (
              <Col md={6}>
                <h2>Shipping</h2>
                <b>Name</b>: {UserInfo.name} <br />
                <b>Address</b>:{UserInfo.address}
                <br />
                <b>Phone</b>:{UserInfo.phoneNumber}
              </Col>
            )}
            <Col md={6}>
              <h2>Payment method</h2>
              <Form.Select disabled={true} value={paymentMethod}>
                <option value="pp">PayPal</option>
                <option value="cod">Cash On Delivery (delivery may be delayed)</option>
              </Form.Select>
            </Col>
            <Row>
              <Col>
                <Alert className="mt-3" variant={isDelivered ? "success" : "danger"}>
                  {isDelivered ? <>Delivered at {isDelivered}</> : <>Not Delivered</>}
                  Not delivered
                </Alert>
              </Col>
              <Col>
                <Alert className="mt-3" variant={isPaid ? "success" : "danger"}>
                  {isPaid ? <>Paid on {isPaid}</> : <>Not paid yet.</>}
                </Alert>
              </Col>
            </Row>
          </Row>
          <br />
          <h2>Order items</h2>
          <ListGroup variant="flush">
            {cartItems.map((item, idx) => (
              <CartItemComponent key={idx} item={item} orderCreated={true} />
            ))}
          </ListGroup>
        </Col>
        <Col md={4}>
          <ListGroup>
            <ListGroup.Item>
              <h3>Order summary</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              Items price (after tax): <span className="fw-bold">{cartSubtotal}</span>
            </ListGroup.Item>
            <ListGroup.Item>
              Shipping: <span className="fw-bold">included</span>
            </ListGroup.Item>
            <ListGroup.Item>
              Tax: <span className="fw-bold">included</span>
            </ListGroup.Item>
            <ListGroup.Item className="text-danger">
              Total price: <span className="fw-bold">{cartSubtotal}</span>
            </ListGroup.Item>
            <ListGroup.Item>
              <div className="d-grid gap-2">
                <Button
                  size="lg"
                  variant="danger"
                  type="button"
                  disabled={buttonDisabled}
                  onClick={() => markOrderAsDelivered(id)}
                >
                  {OrderButtonMessage}
                </Button>
              </div>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default OrderDetailsPageComponent;
