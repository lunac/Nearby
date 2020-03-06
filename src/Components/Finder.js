import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "react-bootstrap/Image";
import peopleEating from "../Assets/peopleEating.png";
import TextFieldFind from "../Components/TextFieldFind.js";

class Finder extends React.Component {
  render() {
    var textStyle = {
      position: "absolute",
      color: "white",
      top: "20%",
      left: "32%"
    };
    var textStyle2 = {
      position: "absolute",
      color: "white",
      top: "24%",
      left: "38%",
      fontWeight: "700"
    };
    return (
      <div>
        <Image src={peopleEating} fluid />
        <h3 style={textStyle}>Encuentra las mejores promociones {"\n"} en</h3>
        <h3 style={textStyle2}>restaurantes cerca de ti</h3>

        <TextFieldFind />
      </div>
    );
  }
}
export default Finder;
