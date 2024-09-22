import React, { useState } from "react";
import { ButtonGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const Counter = () => {
  const [count, setCount] = useState<number>(0);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  };

  return (
    <ButtonGroup
      aria-label="Basic example"
      className="bg-light-subtle rounded-start-5 rounded-end-5 shadow align-items-center py-0"
    >
      <Button
        variant=""
        className=" rounded-start-circle text-secondary fs-3"
        onClick={handleIncrement}
      >
        +
      </Button>
      <span className="opacity-25 text-secondary-emphasis">|</span>
      <div className="text-warning px-4 py-2  fs-3">{count}</div>
      <span className="opacity-25 text-secondary-emphasis">|</span>
      <Button
        variant=""
        className=" rounded-end-circle text-secondary fs-3"
        onClick={handleDecrement}
      >
        {" "}
        -
      </Button>
    </ButtonGroup>
  );
};

export default Counter;
