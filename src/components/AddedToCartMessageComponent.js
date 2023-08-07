import { Alert, Button } from "react-bootstrap";
import { useState } from "react";
import { LinkContainer } from "react-router-bootstrap";

const AddedToCartMessageComponent = () => {
  const [show, setShow] = useState(true);
  return (
    <Alert
      show={show}
      variant="success"
      onClose={() => setShow(false)}
      dismissible
    >
      <Alert.Heading>The product was added to your cart!</Alert.Heading>
      <p>
        <Button variant="success">Go back</Button> {" "} 
        <LinkContainer to="/cart">
          <Button variant="danger">Go to cart</Button>
        </LinkContainer>
      </p>
    </Alert>
  );
};

export default AddedToCartMessageComponent;
