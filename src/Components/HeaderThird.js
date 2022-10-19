import React from "react";
import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";
import "primeicons/primeicons.css";

function HeaderThird() {
  return (
    <div>
      <Container className="mt-3">
        <Dropdown>
          <Dropdown.Toggle variant="light" id="dropdown-basic">
            Bakery
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="">Action</Dropdown.Item>
            <Dropdown.Item href="">Another action</Dropdown.Item>
            <Dropdown.Item href="">Something else</Dropdown.Item>
          </Dropdown.Menu>

          <Dropdown.Toggle variant="light" id="dropdown-basic">
            Fruits and vegitables
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="">Action</Dropdown.Item>
            <Dropdown.Item href="">Another action</Dropdown.Item>
            <Dropdown.Item href="">Something else</Dropdown.Item>
          </Dropdown.Menu>

          <Dropdown.Toggle variant="light" id="dropdown-basic">
            Meat and fish
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="">Action</Dropdown.Item>
            <Dropdown.Item href="">Another action</Dropdown.Item>
            <Dropdown.Item href="">Something else</Dropdown.Item>
          </Dropdown.Menu>

          <Dropdown.Toggle variant="light" id="dropdown-basic">
            Drinks
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="">Action</Dropdown.Item>
            <Dropdown.Item href="">Another action</Dropdown.Item>
            <Dropdown.Item href="">Something else</Dropdown.Item>
          </Dropdown.Menu>

          <Dropdown.Toggle variant="light" id="dropdown-basic">
            Kitchen
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="">Action</Dropdown.Item>
            <Dropdown.Item href="">Another action</Dropdown.Item>
            <Dropdown.Item href="">Something else</Dropdown.Item>
          </Dropdown.Menu>

          <Dropdown.Toggle variant="light" id="dropdown-basic">
            Special nutrition
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="">Action</Dropdown.Item>
            <Dropdown.Item href="">Another action</Dropdown.Item>
            <Dropdown.Item href="">Something else</Dropdown.Item>
          </Dropdown.Menu>

          <Dropdown.Toggle variant="light" id="dropdown-basic">
            Baby
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="">Action</Dropdown.Item>
            <Dropdown.Item href="">Another action</Dropdown.Item>
            <Dropdown.Item href="">Something else</Dropdown.Item>
          </Dropdown.Menu>

          <Dropdown.Toggle variant="light" id="dropdown-basic">
            Pharmacy
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="">Action</Dropdown.Item>
            <Dropdown.Item href="">Another action</Dropdown.Item>
            <Dropdown.Item href="">Something else</Dropdown.Item>
          </Dropdown.Menu>

        </Dropdown>
      </Container>
      </div>
  )}


export default HeaderThird;
