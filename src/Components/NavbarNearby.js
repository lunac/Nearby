/**
 * En ES6 modulos, puedes importar solo el modulo que te sirve 
 * en este caso por ejemplo puedes hacer extends Component directamente
 */
import React, { Component } from "react";
/**
 * bootstrap no se usa en componentes, aqui te estas importanto todo bootstrap 
 * en un solo componente, deberias meterlo en App.js
 */
import "bootstrap/dist/css/bootstrap.min.css";

// no hagas asi 

// import { Navbar } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
// import Col from "react-bootstrap/Col";

import { Navbar, Button, Col} from "react-bootstrap";

/**
 * Las imagines no te sirven como import, te sirve solo el string
 * te consejo hacer una funcion para generalizar el como
 * 
    imagePath: (path) => {
      return `/images/${path}`
    }
*/
import Logo from "../Assets/nearbyLogo.png";
import Pin from "../Assets/pin.png";
import "../Styles/NavbarStyles.css";

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
        <Col className ="textStyle3">
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

/**
 * - Tus imagines no deben tener width o height no funciona en html 5
 * - Una imagen debe siempre tener un alt
 * - Piensa en haber consistencia, no uses react-bootstrap de un lado y el 
 * tag img del otro. 
 * - Piensa en responsive images con el tag picture.
 */
export default NavbarNearby;
