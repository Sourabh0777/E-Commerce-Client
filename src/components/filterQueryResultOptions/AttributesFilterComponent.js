import { Form } from "react-bootstrap";

const AttributesFilterComponent = () => {
  return (
    <>
      <Form.Label>Color</Form.Label>

      {[{ colour: ["red", "blue", "green"] }, { ram: ["1 Tb", "2Tb"] }].map(
        (item, idx) => {
          return (
            <div key={idx} className="mb-3">
              <Form.Label>
                <b>{Object.keys(item)}</b>
              </Form.Label>

              {item[Object.keys(item)].map((i, idx) => {
                return (
                  <Form.Check
                    key={idx}
                    type="checkbox"
                    id={`default-checkbox-${idx}`}
                    label={i}
                  />
                );
              })}
            </div>
          );
        
        }
      )}
    </>
  );
};

export default AttributesFilterComponent;
