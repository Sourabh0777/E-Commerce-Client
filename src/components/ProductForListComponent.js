import { Button, Card, Col, Row } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
import { Rating } from "react-simple-star-rating"
import image from "./Static Data/images/monitors-category.png"
console.log("🚀 ~ image:", image)

const ProductForListComponent = ({images, name, description, rating, price, reviewsNumber, productId}) => {
	return (
		<Card style={{marginTop: "30px", marginBottom: "50px"}}>
			<Row>
				<Col lg={5}>
					<Card.Img variant="top" src={images[0] ? `${images[0].path}` : ""} />
				</Col>
				<Col lg={7}>
					<Card.Body>
						<Card.Title>{name}</Card.Title>
						<Card.Text>{description}</Card.Text>
						<Card.Text>
							<Rating readonly size={20} initialValue={5} />
							{rating}
						</Card.Text>
						<Card.Text className="h4">
							{price}
							{"     "}
							<LinkContainer to={`/product-details/${productId}`}>
								<Button
									variant="primary"
									className="marginLeft: 5px,
                "
								>
									See Product
								</Button>
							</LinkContainer>
						</Card.Text>
					</Card.Body>
				</Col>
			</Row>
		</Card>
	)
}

export default ProductForListComponent
