import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const Footer = (props) => {
  return (
    <footer style={{width:"99vw"}}>
      <Container fluid>
        <Row>
          <Col className="text-white bg-dark text-center py-3" >
            Copyright & copy: Best Online Shop
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
