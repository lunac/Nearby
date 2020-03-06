import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Logo from "../Assets/nearbyLogo.png";
import Pin from "../Assets/pin.png";


class NavbarNearby extends React.Component {
  render() {
    var textStyle3 = {
      left: '9%',
      fontWeight : '700'

    };
    return (
      <Navbar bg="light" variant="light">
        <Col>
          <img
            alt=""
            src={Logo}
            width="110"
            height="40"
            className="d-inline-block align-top float-sm-left"
          />
          {}
        </Col>
        <Col style = {textStyle3}>
          <img
            src={Pin}
            width="30"
            height="30"
            className="d-inline-block align-right "
          />
          {"Indica tu ubicación"}
        </Col>
        <Col>
          <Button variant="primary" size="sm" className="float-sm-right">
            INGRESA
          </Button>
        </Col>
      </Navbar>
    );
  }
}
export default NavbarNearby;
