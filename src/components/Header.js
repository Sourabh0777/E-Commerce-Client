import React from "react";
import { Badge, Dropdown, DropdownButton, NavDropdown } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import InputGroup from "react-bootstrap/InputGroup";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";

import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
const DUMMY_DATA = {
  username: "Sourabh",
  option1: "My Profile",
  option2: "My Orders",
  option3: "Logout",
};
const Header = (props) => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-body-tertiary"
      bg="dark"
      data-bs-theme="dark"
    >
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>O-Caffe</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/*Search Field */}
            {/* Dropdown */}
            <InputGroup>
              <DropdownButton id="dropdown-basic-button" title="All">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </DropdownButton>
              {/* Dropdown */}
              {/*Input Field */}
              <Form.Control type="text" placeholder="Search in shop" />
              {/*Input Field */}
              <Button variant="warning">
                <SearchIcon />
              </Button>
              {/*Search Field */}
            </InputGroup>
          </Nav>
          <Nav>
            <LinkContainer to="/admin/orders">
              <Nav.Link>Admin</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/login">
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/register">
              <Nav.Link>Register</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/cart">
              <Nav.Link>
                <Badge pill bg="danger">
                  2
                </Badge>
                <ShoppingCartIcon />
                Cart
              </Nav.Link>
            </LinkContainer>
            <NavDropdown title={DUMMY_DATA.username} id="basic-nav-dropdown">
              <NavDropdown.Item eventKey="/user" as={Link} to="/user">
                {DUMMY_DATA.option1}
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/user/my-orders"
                eventKey="/user/my-orders"
              >
                {DUMMY_DATA.option2}
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/" eventKey="/">
                {DUMMY_DATA.option3}
              </NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
              {/* <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
