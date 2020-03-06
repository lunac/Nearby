import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image'
import peopleEating from '../Assets/peopleEating.png'
import InputGroup from 'react-bootstrap/InputGroup'
import {FormControl} from "react-bootstrap";


class Finder extends React.Component{
  render(){
    var textStyle = {
        position: 'absolute',
        color: "white", 
        top: '10%', 
        left: '32%'
      };
      var textStyle2 = {
        position: 'absolute', 
        color: "white",
        top: '15%', 
        left: '38%',
        fontWeight : '700'
      };
    return (
      <div>
        <Image src={peopleEating} fluid />
        <h3 style={textStyle}>Encuentra las mejores promociones {"\n"} en</h3>
        <h3 style={textStyle2}>restaurantes cerca de ti</h3>

        <InputGroup className="mb-3">
          <FormControl
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Append>
            <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
          </InputGroup.Append>
        </InputGroup>
      </div>
    );
  }
}
export default Finder;
