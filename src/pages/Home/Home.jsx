import React, { useEffect } from "react";
import Slider from "../../components/Slider";
import BasicCard from "../../components/BasicCard";
import { Container, Row } from "react-bootstrap";

const DUMMY_DATA = ["Tablets", "Monitors", "Game", "Printers", "Software", "Cameras", "Books", "Videos"];

const Home = (props) => {
  return (
    <div>
      <Slider />
      <Container>
        <Row xs={1} md={2} className="g-4 mt-5">
          {DUMMY_DATA.map((data, idx) => {
            return <BasicCard category={data} key={idx} idx={idx} />;
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
