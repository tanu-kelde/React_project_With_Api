import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "primeicons/primeicons.css";
import { BsChevronRight } from "react-icons/bs";
import { logo, stock, natural } from "../assets/images";
import {BsSquare} from 'react-icons/bs';

function HomePage() {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-4">
            <h6 className="h6">Category Menu</h6>
            <div style={{ color: "#6A983C" }}>
              <u>
                <a>Bakery</a>
              </u>
              <br />
              <u>
                <a>Fruits and vegitables</a>
              </u>
              <br />
              <u>
                <a>Meat and fish</a>
              </u>
              <br />
              <u>
                <a>Drinks</a>
              </u>
              <br />
              <u>
                <a>Kitchen</a>
              </u>
            </div>
            <Button
              variant="light"
              style={{ border: " black" }}
              className="mt-5 h6"
            >
              More categories <BsChevronRight />{" "}
            </Button>
          </div>
          <div className="col-4">
            <a style={{ color: "#6A983C" }}>Banner subfocus</a>
            <h5 className="mt-3 heading">Space for heading</h5>
            <Button
              style={{ border: "1px solid #6A983C" }}
              className="btn btn-light mt-5"
            >
              {" "}
              Read Recepies <BsChevronRight />{" "}
            </Button>
          </div>
          <div className="col-4">
            <a style={{ color: "#6A983C" }}>Banner subfocus</a>
            <h5 className="mt-3 heading">Space for heading</h5>
            <Button
              style={{ border: "1px solid #6A983C" }}
              className="btn btn-light mt-5"
            >
              {" "}
              Read Recepies <BsChevronRight />{" "}
            </Button>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-3">
            <h6 className="h6">Best Selling Products</h6>
            <div style={{ color: "#6A983C" }}>
              <u>
                <a>Kitchen</a>
              </u>
              <br />
              <u>
                <a>Meat and fish</a>
              </u>
              <br />
              <u>
                <a>Special nutrision</a>
              </u>
              <br />
              <u>
                <a>Pharmacy</a>
              </u>
              <br />
              <u>
                <a>Baby</a>
              </u>
            </div>
            <Button
              variant="light"
              style={{ border: " black" }}
              className="mt-5 h6"
            >
              More Products <BsChevronRight />{" "}
            </Button>
          </div>
          <div className="col-3">
            <Card style={{ width: "15rem" }}>
              <Card.Img variant="top" src={stock} />
              <Card.Body>
                <Card.Title className="title">Product Title</Card.Title>
                <Card.Text className="description">
                  Space for a small product description
                </Card.Text>
                <Button variant="light" className="USDButton">
                  1.48 USD
                </Button>
                <Button className="buyNow">Buy Now</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-3">
            <Card style={{ width: "15rem" }}>
              <Card.Img variant="top" src={logo} />
              <Card.Body>
                <Card.Title className="title">Product Title</Card.Title>
                <Card.Text className="description">
                  Space for a small product description
                </Card.Text>
                <Button variant="light">0.28 USD </Button>
                <Button className="buyNow">Buy Now</Button>
                <p className="price">48.56</p>
              </Card.Body>
            </Card>
          </div>
          <div className="col-3">
            <Card style={{ width: "15rem" }}>
              <Card.Img variant="top" src={natural} />
              <Card.Body>
                <Card.Title className="title">Product Title</Card.Title>
                <Card.Text className="description">
                  Space for a small product description
                </Card.Text>
                <Button variant="light">1.12 USD</Button>
                <Button className="buyNow">Buy Now</Button>
                <p className="price">48.56</p>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-3">
            <h6 className="h6">Bestfrom Farmers</h6>
            <div style={{ color: "#6A983C" }}>
              <u>
                <a>Carrots</a>
              </u>
              <br />
              <u>
                <a>Tometoes</a>
              </u>
              <br />
              <u>
                <a>Potetoes</a>
              </u>
              <br />
              <u>
                <a>Chicken</a>
              </u>
              <br />
              <u>
                <a>Pork</a>
              </u>
            </div>
            <Button
              variant="light"
              style={{ border: " black" }}
              className="mt-5 h6"
            >
              More Products <BsChevronRight />{" "}
            </Button>
          </div>
          <div className="col-3">
            <Card style={{ width: "15rem" }}>
              <Card.Img variant="top" src={natural} />
              <Card.Body>
                <Card.Title className="title">Product Title</Card.Title>
                <Card.Text className="description">
                  Space for a small product description
                </Card.Text>
                <Button variant="light">1.48 USD</Button>
                <Button className="buyNow">Buy Now</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-3">
            <Card style={{ width: "15rem" }}>
              <Card.Img variant="top" src={stock} />
              <Card.Body>
                <Card.Title className="title">Product Title</Card.Title>
                <Card.Text className="description">
                  Space for a small product description
                </Card.Text>
                <Button variant="light">0.28 USD </Button>
                <Button className="buyNow">Buy Now</Button>
                <p className="price">48.56</p>
              </Card.Body>
            </Card>
          </div>
          <div className="col-3">
            <Card style={{ width: "15rem" }}>
              <Card.Img variant="top" src={logo} />
              <Card.Body>
                <Card.Title className="title">Product Title</Card.Title>
                <Card.Text className="description">
                  Space for a small product description
                </Card.Text>
                <Button variant="light">1.12 USD</Button>
                <Button className="buyNow">Buy Now</Button>
                <p className="price">48.56</p>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-6">
            <h6 className="h6">Our customer says</h6>
          </div>
          <div className="col-6">
            <Button variant="light" className="fifthContainerButton">
              Button <BsChevronRight />
            </Button>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-3 para">
            <p>
              Change this and that and try again. Duis mollis, est non commodo
              luctus, nisi erat porttitor ligula.
            </p>
            <p className="name">Name and Surname</p>
          </div>
          <div className="col-3 para">
            <p>
              Change this and that and try again. Duis mollis, est non commodo
              luctus, nisi erat porttitor ligula.
            </p>
            <p className="name">Name and Surname</p>
          </div>
          <div className="col-3 para">
            <p>
              Change this and that and try again. Duis mollis, est non commodo
              luctus, nisi erat porttitor ligula.
            </p>
            <p className="name">Name and Surname</p>
          </div>
          <div className="col-3 para">
            <p>
              Change this and that and try again. Duis mollis, est non commodo
              luctus, nisi erat porttitor ligula.
            </p>
            <p className="name">Name and Surname</p>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-6">
            <h6 className="h6">Section Headline</h6>
          </div>
          <div className="col-6">
            <Button variant="light" className="fifthContainerButton">
              Button <BsChevronRight />
            </Button>
          </div>
        </div>
        <div className="row mt-5  ">
          <div className="col-3">
            <Card style={{ width: "15rem" }}>
              <Card.Img variant="top" src={logo} />
              <Card.Body>
                <Card.Title className="title">Product Title</Card.Title>
                <Card.Text className="description">
                  Space for a small product description
                </Card.Text>
                <Button variant="light">1.12 USD</Button>
                <Button className="buyNow">Buy Now</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-3">
            <Card style={{ width: "15rem" }}>
              <Card.Img variant="top" src={stock} />
              <Card.Body>
                <Card.Title className="title">Product Title</Card.Title>
                <Card.Text className="description">
                  Space for a small product description
                </Card.Text>
                <Button variant="light">1.12 USD</Button>
                <Button className="buyNow">Buy Now</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-3">
            <Card style={{ width: "15rem" }}>
              <Card.Img variant="top" src={logo} />
              <Card.Body>
                <Card.Title className="title">Product Title</Card.Title>
                <Card.Text className="description">
                  Space for a small product description
                </Card.Text>
                <Button variant="light">1.12 USD</Button>
                <Button className="buyNow">Buy Now</Button>
                <p className="price">48.56</p>
              </Card.Body>
            </Card>
          </div>
          <div className="col-3">
            <Card style={{ width: "15rem" }}>
              <Card.Img variant="top" src={stock} />
              <Card.Body>
                <Card.Title className="title">Product Title</Card.Title>
                <Card.Text className="description">
                  Space for a small product description
                </Card.Text>
                <Button variant="light">1.12 USD</Button>
                <Button className="buyNow">Buy Now</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-6">
            <h6 className="h6">Read our Blog post</h6>
          </div>
          <div className="col-6">
            <Button variant="light" className="fifthContainerButton">
              Go to Blog <BsChevronRight />
            </Button>
          </div>
        </div>
        <div className="row">
          <div className="col-4 cardColor">
          <Card.Text className="vagetable">Dinner tips</Card.Text>
            <Card
              style={{ width: "18rem", height: "150px" }}
              className="blogCard"
            >
              <Card.Body className="cardBody">
                <Card.Text className="descriptionlast" style={{color:"white"}}>
                  Our chef tips for a great and tasty dinner ready in 20 minutes
                </Card.Text>
                <p className="paragraph" style={{color:"white"}}>Author 17.6.2020</p>
              </Card.Body>
              
            </Card>
          </div>
          <div className="col-3">
            <Card.Img variant="top" src={stock} />
            <Card.Text className="vagetable">Vagetable</Card.Text>
            <Card.Text className="descriptionlast">
            Which vegetable your family will love and want’s eat each day
            </Card.Text>
            <p className="paragraph2">Author 15.6.2020</p>
          </div>
          <div className="col-3">
            <Card.Text>
            Salat is kinda good start to your morning routines
            </Card.Text>
            <p className="paragraph2">Author 15.6.2020</p>
            <Card.Text className="mt-5">
            Salat is kinda good start to your morning routines
            </Card.Text>
            <p className="paragraph2">Author 15.6.2020</p>
            <Card.Text className="mt-5">
            Salat is kinda good start to your morning routines
            </Card.Text>
            <p className="paragraph2">Author 15.6.2020</p>
          </div>
          <div className="col-2 mt-5">
            <span className=" mt-4 icons" style={{'margin-top':'30px'}} ><BsSquare size={70} /><br/></span><br></br>
            <span className="mt-5 icons"><BsSquare size={70}/><br/></span><br></br>
            <span className="mt-5 icons"><BsSquare size={70}/></span>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
