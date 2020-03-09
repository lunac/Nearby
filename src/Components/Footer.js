import React from 'react'
import Image from "react-bootstrap/Image";
import backgroundFooter from "../Assets/backgroundFooter.png"
import Styles from "./CSS/StylesFooter.css";

class Footer extends React.Component{
    render(){
        var textStyle = {
            position: "absolute",
            color: "#22264b",
            top: "200%",
            left: "45%",
            fontWeight: "700"
          };
          var textStyle2 = {
            position: "absolute",
            color: "#22264b",
            top: "230%",
            left: "10%",
            fontWeight: "600"
          };
      return (
        <div>
          <Image src={backgroundFooter} fluid />
          <h3 style={textStyle}>Conócenos</h3>
          <h4 style={textStyle2}>Descubre</h4>
        </div>
      );
    }
  }
  export default Footer;
  