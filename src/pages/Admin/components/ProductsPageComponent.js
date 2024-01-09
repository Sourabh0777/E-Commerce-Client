import React from "react";
import { Row, Col, Table, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import AdminLinksComponent from "../../../components/admin/AdminLinksComponent";
import { useEffect } from "react";
import { useState } from "react";

const ProductsPageComponent = ({ fetchProducts, deleteProduct }) => {
  const [productDeleted, setProductDeleted] = useState();
  const [Products, setProducts] = useState([]);
  useEffect(() => {
    const abtCtrl = new AbortController();
    fetchProducts(abtCtrl)
      .then((res) => setProducts(res))
      .catch((err) => {
        console.log(err.response.data.message ? err.response.data.message : err.response.data);
      });
    return () => abtCtrl.abort();
  }, [fetchProducts,productDeleted]);
  const deleteHandler = async (id) => {
    if (window.confirm("Are you sure?")) {
      const response = await deleteProduct(id);
      setProductDeleted(!productDeleted);
      return response;
    }
  };
  return (
    <Row className="m-5">
      <Col md={2}>
        <AdminLinksComponent />
      </Col>
      <Col md={10}>
        <h1>
          Product List{" "}
          <LinkContainer to="/admin/create-new-product">
            <Button variant="primary" size="lg">
              Create new
            </Button>
          </LinkContainer>
        </h1>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Edit/Delete</th>
            </tr>
          </thead>
          <tbody>
            {Products &&
              Products.map((Product, idx) => (
                <tr key={idx}>
                  <td>{idx + 1}</td>
                  <td>{Product.name}</td>
                  <td>{Product.price}</td>
                  <td>{Product.category}</td>
                  <td>
                    <LinkContainer to="/admin/edit-product">
                      <Button className="btn-sm">
                        <i className="bi bi-pencil-square"></i>
                      </Button>
                    </LinkContainer>
                    {" / "}
                    <Button variant="danger" className="btn-sm" onClick={() => deleteHandler(Product._id)}>
                      <i className="bi bi-x-circle"></i>
                    </Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Col>
    </Row>
  );
};

export default ProductsPageComponent;
