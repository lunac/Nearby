import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Logo from "../Assets/nearbyLogo.png";
import Pin from "../Assets/pin.png";

class NavbarNearby extends React.Component {
  render() {
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
        <Col>
          <img
            alt=""
            src={Pin}
            width="30"
            height="30"
            className="d-inline-block align-top "
          />
          {"Indica tu ubicación"}
        </Col>
        <Col>
          <Button variant="primary" size="sm" className="float-sm-right">
            {""}INGRESA{""}{" "}
          </Button>
        </Col>
      </Navbar>
    );
  }
}
export default NavbarNearby;
