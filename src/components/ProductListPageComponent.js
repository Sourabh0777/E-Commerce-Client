import { useEffect, useState } from "react"
import { Button, Col, Container, ListGroup, Row } from "react-bootstrap"
import AttributesFilterComponent from "./filterQueryResultOptions/AttributesFilterComponent"
import CategoryFilterComponent from "./filterQueryResultOptions/CategoryFilterComponent"
import PriceFilterComponent from "./filterQueryResultOptions/PriceFilterComponent"
import RatingFilterComponent from "./filterQueryResultOptions/RatingFilterComponent"
import PaginationComponent from "./PaginationComponent"
import ProductForListComponent from "./ProductForListComponent"
import SortOptionsComponent from "./SortOptionsComponent"
const ProductListPageComponent = ({getProducts}) => {
	const [products, setProducts] = useState()
	useEffect(() => {
		getProducts()
			.then(res => {
				setProducts(res.products)
			})
			.catch(err => {})
	}, [])
	return (
		<Container fluid>
			<Row>
				<Col md={3}>
					<ListGroup variant="flush">
						<ListGroup.Item className="mb-3 mt-3">
							<SortOptionsComponent />
						</ListGroup.Item>
						<ListGroup.Item>
							FILTER: <br />
							<PriceFilterComponent />
						</ListGroup.Item>
						<ListGroup.Item>
							<RatingFilterComponent />
						</ListGroup.Item>
						<ListGroup.Item>
							<CategoryFilterComponent />
						</ListGroup.Item>
						<ListGroup.Item>
							{" "}
							<AttributesFilterComponent />
						</ListGroup.Item>
						<ListGroup.Item>
							<Button variant="primary">Filter</Button>
							<Button variant="danger">Reset Filter</Button>{" "}
						</ListGroup.Item>
					</ListGroup>
				</Col>
				<Col md={9}>
					{products &&
						products.map((product, idx) => (
							<ProductForListComponent
								key={idx}
								images={product.images}
								name={product.name}
								description={product.description}
								rating={product.rating}
								price={product.price}
								reviewsNumber={product.reviewsNumber}
								productId={product._id}
							/>
						))}
					<PaginationComponent />
				</Col>
			</Row>
		</Container>
	)
}

export default ProductListPageComponent
