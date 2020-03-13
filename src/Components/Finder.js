import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "react-bootstrap/Image";
import peopleEating from "../Assets/peopleEating.png";
import TextFieldFind from "../Components/TextFieldFind.js";
import "../Styles/FinderStyles.css"

class Finder extends React.Component {
  render() {
    return (
      <div>
        <Image  className = "peopleEating"src={peopleEating} fluid />
        <h3 className="textStyle">Encuentra las mejores promociones {"\n"} en</h3>
        <h3 className="textStyle2">restaurantes cerca de ti</h3>

        <TextFieldFind />
      </div>
    );
  }
}
export default Finder;
