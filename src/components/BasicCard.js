import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import image from "./Static Data/images/tablets-category.png";
import { LinkContainer } from "react-router-bootstrap";

function BasicCard(props) {
  const { category } = props;
  return (
    <Card>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{category}</Card.Title>
        <Card.Text>
          Some quick Card text to build on the card title and make up the bulk
          of the card's content.
        </Card.Text>
        <LinkContainer to="/product-list">
          <Button variant="primary">Go to category</Button>
        </LinkContainer>
      </Card.Body>
    </Card>
  );
}

export default BasicCard;
