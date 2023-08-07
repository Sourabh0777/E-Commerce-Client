import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Image1 from "./Static Data/images/carousel/carousel-1.png";
import Image2 from "./Static Data/images/carousel/carousel-2.png";
import Image3 from "./Static Data/images/carousel/carousel-3.png";
import { LinkContainer } from "react-router-bootstrap";

const DUMMY_DATA = [
  {
    image: Image1,
    h3: "Slider",
    p: "This is just a dummy Text",
  },
  {
    image: Image2,
    h3: "Slider",
    p: "This is just a dummy Text",
  },
  {
    image: Image3,
    h3: "Slider",
    p: "This is just a dummy Text",
  },
];

function Slider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {DUMMY_DATA.map((data) => {
        return (
          <Carousel.Item key={data.image}>
            <img
              src={data.image}
              className="d-block w-100"
              style={{ height: "300px", objectFit: "cover" }}
              alt="Slider"
            />
            <Carousel.Caption style={{ cursor: "pointer" }}>
              <LinkContainer to="/product-detail/:id">
                <h3>{data.h3}</h3>
              </LinkContainer>
              <p>{data.p}</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

export default Slider;
