import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Row,
  Col,
  Container,
  Image,
  ListGroup,
  Form,
  Button,
  Alert,
} from "react-bootstrap";
import { Rating } from "react-simple-star-rating";
import AddedToCartMessageComponent from "../../components/AddedToCartMessageComponent";
import image from "../../components/Static Data/images/monitors-category.png";
import ImageZoom from "js-image-zoom";

const ProductDetail = (props) => {
  // const { id } = useParams();
  const options ={
    width:400,
    zoomWidth:500,
    fillContainer:true,
    scale:2,
    offset:{vertical:0,horizontal:0}
  }
  useEffect(() => {
    new ImageZoom(document.getElementById("first"),options);
    new ImageZoom(document.getElementById("second"),options);
    new ImageZoom(document.getElementById("third"),options);
    new ImageZoom(document.getElementById("fourth"),options);
  }, []);
  return (
    <Container>
      <AddedToCartMessageComponent />
      <Row className="mt-5">
        <Col md={4} style={{ zIndex: 1 }}>
          <div id="first">
            <Image crossOrigin="anonymous" fluid src={image} className="mb-5" />
          </div>
          <div id="second">
            <Image crossOrigin="anonymous" fluid src={image} className="mb-5" />
          </div>
          <div id="third">
            <Image crossOrigin="anonymous" fluid src={image} className="mb-5" />
          </div>
          <div id="fourth">
            <Image crossOrigin="anonymous" fluid src={image} className="mb-5" />
          </div>
        </Col>
        <Col md={8}>
          <Row>
            <Col md={8}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h1>Card Title</h1>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Rating readonly size={20} initialValue={4} /> (1)
                </ListGroup.Item>
                <ListGroup.Item>
                  Price <span className="fw-bold">$345</span>
                </ListGroup.Item>
                <ListGroup.Item>
                  Porta ac consectetur ac Porta ac consectetur acPorta ac
                  consectetur ac
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={4}>
              <ListGroup>
                <ListGroup.Item>Status: in stock</ListGroup.Item>
                <ListGroup.Item>
                  Price: <span className="fw-bold">$345</span>
                </ListGroup.Item>
                <ListGroup.Item>
                  Quantity:
                  <Form.Select size="lg" aria-label="Default select example">
                    <option>1</option>
                    <option value="1">2</option>
                    <option value="2">3</option>
                    <option value="3">4</option>
                  </Form.Select>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button variant="danger">Add to cart</Button>
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
          <Row>
            <Col className="mt-5">
              <h5>REVIEWS</h5>
              <ListGroup variant="flush">
                {Array.from({ length: 15 }).map((item, idx) => {
                  return (
                    <>
                      <ListGroup.Item key={idx}>
                        USer Name <br />
                        <Rating readonly size={15} initialValue={4} />
                        <br />
                        04-08-2023 <br />
                        This is the comment
                      </ListGroup.Item>
                    </>
                  );
                })}
              </ListGroup>
            </Col>
          </Row>
          <hr />
          <Alert variant="danger">Login first to write a review</Alert>
          <Form className="mb-5">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Write a review </Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Form.Select aria-label="Quantity:">
              <option>Your rating</option>
              <option value="5  ">5 </option>
              <option value="4">4</option>
              <option value="3">3</option>
              <option value="2">2</option>
              <option value="1">1</option>
            </Form.Select>
            <Button variant="primary" className="mb-5 mt-3">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
