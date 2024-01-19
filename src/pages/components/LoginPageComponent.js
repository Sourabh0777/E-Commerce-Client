import React from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";

const LoginPageComponent = ({ loginUserApiRequest, dispatch, loginUserAction }) => {
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  const [loginUserResponseState, setLoginUserResponseState] = useState({
    success: "",
    error: "",
    loading: false,
  });
  const handleSubmit = async (event) => {
    event.preventDefault();
    event.stopPropagation();
    const form = event.currentTarget.elements;
    const email = form.email.value;
    const password = form.password.value;
    const doNotLogout = form.doNotLogout.checked;
    if (event.currentTarget.checkValidity() === true && email && password) {
      setLoginUserResponseState({ loading: true });
      loginUserApiRequest(email, password, doNotLogout)
        .then((res) => {
          setLoginUserResponseState({
            success: res.success,
            error: "",
            loading: false,
          });
          if (res.success === "User logged in" && !res.userLoggedIn.isAdmin) {
            dispatch(loginUserAction(res.userLoggedIn));
            // window.location.href="/user"
            navigate("/user", { replace: true });
          } else {
            dispatch(loginUserAction(res.userLoggedIn));
            // window.location.href="/admin/orders"
            navigate("/admin/orders", { replace: true });
          }
        })
        .catch((error) => {
          setLoginUserResponseState({
            error: error.response.data.message ? error.response.data.message : error.response.data,
          });
          console.log();
        });
    }
    setValidated(true);
  };
  return (
    <Container>
      <Row className="mt-5 justify-content-md-center">
        <Col md={6}>
          <h1>Login</h1>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control name="email" required type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control name="password" required type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check name="doNotLogout" type="checkbox" label="Do not logout" />
            </Form.Group>

            <Row className="pb-2">
              <Col>
                Don't you have an account?
                <Link to={"/register"}> Register </Link>
              </Col>
            </Row>

            <Button variant="primary" type="submit">
              {loginUserResponseState.loading && (
                <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
              )}
              Login
            </Button>
            <Alert show={loginUserResponseState && loginUserResponseState.error} variant="danger">
              {loginUserResponseState.error}
            </Alert>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPageComponent;
