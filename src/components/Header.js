import SearchIcon from "@mui/icons-material/Search"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import React from "react"
import { Badge, Dropdown, DropdownButton, NavDropdown } from "react-bootstrap"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"
import InputGroup from "react-bootstrap/InputGroup"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import { useDispatch, useSelector } from "react-redux"

import { LinkContainer } from "react-router-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import { logoutUserAction } from "../redux/Slice/loginUserSlice"
const DUMMY_DATA = {
	username: "Sourabh",
	option1: "My Profile",
	option2: "My Orders",
	option3: "Logout",
}
const Header = props => {
	const {loginState} = useSelector(store => store.loginUser)

	const cartCount = useSelector(store => store.cart.value)
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const logoutHandler = async () => {
		document.cookie = "access_token=; expires= Thu, 01 Jan 1970 00:00:01 GMT; path=/"
		localStorage.removeItem("userInfo")
		sessionStorage.removeItem("userInfo")
		dispatch(logoutUserAction())
		navigate("/")
	}
	return (
		<Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
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
						{loginState.isAdmin && (
							<LinkContainer to="/admin/orders">
								<Nav.Link>Admin</Nav.Link>
							</LinkContainer>
						)}
						{!loginState.name && (
							<>
								<LinkContainer to="/login">
									<Nav.Link>Login</Nav.Link>
								</LinkContainer>
								<LinkContainer to="/register">
									<Nav.Link>Register</Nav.Link>
								</LinkContainer>
							</>
						)}
						<LinkContainer to="/cart">
							<Nav.Link>
								<Badge pill bg="danger">
									{cartCount}
								</Badge>
								<ShoppingCartIcon />
								Cart
							</Nav.Link>
						</LinkContainer>
						{loginState.name && (
							<NavDropdown title={loginState.name} id="basic-nav-dropdown">
								<NavDropdown.Item eventKey="/user" as={Link} to="/user">
									{DUMMY_DATA.option1}
								</NavDropdown.Item>
								<NavDropdown.Item as={Link} to="/user/my-orders" eventKey="/user/my-orders">
									{DUMMY_DATA.option2}
								</NavDropdown.Item>
								<NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
							</NavDropdown>
						)}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default Header
