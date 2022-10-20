import React from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";


function Footer() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-3">
          <h6 className="h6">Get in touch</h6>
          <Card.Text className="vagetable mt-3">About Us</Card.Text>
          <Card.Text className="vagetable">Carrers</Card.Text>
          <Card.Text className="vagetable">Press Releases</Card.Text>
          <Card.Text className="vagetable">Blog</Card.Text>
        </div>
        <div className="col-3">
          <h6 className="h6">Connections</h6>
          <Card.Text className="vagetable mt-3">Facebook</Card.Text>
          <Card.Text className="vagetable">Twitter</Card.Text>
          <Card.Text className="vagetable">Instagram</Card.Text>
          <Card.Text className="vagetable">Youtube</Card.Text>
          <Card.Text className="vagetable">Linked in</Card.Text>
        </div>
        <div className="col-3">
          <h6 className="h6">Earnings</h6>
          <Card.Text className="vagetable mt-3">Become an Affiliate</Card.Text>
          <Card.Text className="vagetable">Advertise your product</Card.Text>
          <Card.Text className="vagetable">Sell on Market</Card.Text>
        </div>
        <div className="col-3">
          <h6 className="h6">Account</h6>
          <Card.Text className="vagetable mt-3">Your account</Card.Text>
          <Card.Text className="vagetable">Returns Centre</Card.Text>
          <Card.Text className="vagetable">100 % purchase protection</Card.Text>
          <Card.Text className="vagetable">Chat with us</Card.Text>
          <Card.Text className="vagetable">Help</Card.Text>
        </div>
      </div>
      <div className="row mt-5">
        <h6 className="h6">Product tags</h6>
        <div className="col-1">
          <Button variant="light" style={{"fontSize":"15px"}}>Beans</Button>
        </div>
        <div className="col-1">
          <Button variant="light" style={{"fontSize":"15px"}}>Carrots</Button>
        </div>
        <div className="col-1">
          <Button variant="light" style={{"fontSize":"15px"}}>Apples</Button>
        </div>
        <div className="col-1">
          <Button variant="light" style={{"fontSize":"15px"}}>Garlic</Button>
        </div>
        <div className="col-1">
          <Button variant="light" style={{"fontSize":"15px"}}>Mushrooms</Button>
        </div>
        <div className="col-1">
          <Button variant="light" style={{"fontSize":"15px"}}>Tomatoes</Button>
        </div>
        <div className="col-1">
          <Button variant="light" style={{"fontSize":"15px"}}>Chilli</Button>
        </div>
        <div className="col-1">
          <Button variant="light" style={{"fontSize":"15px"}}>Broccoli</Button>
        </div>
        <div className="col-1">
          <Button variant="light" style={{"fontSize":"15px"}}>Watermelons</Button>
        </div>
        <div className="col-1">
          <Button variant="light" style={{"fontSize":"15px"}}>Oranges</Button>
        </div>
        <div className="col-1">
          <Button variant="light" style={{"fontSize":"15px"}}>Bananas</Button>
        </div>
        <div className="col-1">
          <Button variant="light" style={{"fontSize":"15px"}}>Grapes</Button>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
        <Button variant="light" style={{"fontSize":"15px"}}>Cherries</Button>
        <Button variant="light" style={{"fontSize":"15px"}}>Meat</Button>
        <Button variant="light" style={{"fontSize":"15px"}}>Seo tag</Button>
        <Button variant="light" style={{"fontSize":"15px"}}>Fish</Button>
        <Button variant="light" style={{"fontSize":"15px"}}>Seo tag</Button>
        <Button variant="light" style={{"fontSize":"15px"}}>Fresh food</Button>
        <Button variant="light" style={{"fontSize":"15px"}}>Lemons</Button>
        </div>
       
      </div>
      <div>
      <Card.Text style={{color:"#575757","fontSize":"15px"}} className="mt-3">Copyright © 2020 petrbilek.com</Card.Text>
      </div>
    </div>
  );
}

export default Footer;
