import { Fragment } from "react";
import { Form } from "react-bootstrap";
import { Rating } from "react-simple-star-rating";

const RatingFilterComponent = () => {
  return (
    <>
      <span>rating</span>
      {Array.from({ length: 5 }).map((_, idx) => {
        return (
          <Fragment key={idx}>
            <Form.Check type="checkbox" id={`check-api-${idx}`}>
              <Form.Check.Input type="checkbox" isValid />
              <Form.Check.Label style={{ cursor: "pointer" }}>
                <Rating readonly size={20} initialValue={5 - idx}></Rating>
              </Form.Check.Label>
            </Form.Check>
          </Fragment>
        );
      })}
    </>
  );
};

export default RatingFilterComponent;
