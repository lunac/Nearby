import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';


class NavbarNearby extends React.Component{
  render(){
    return(
      <Navbar bg="light" variant="light">
        <img
          alt=""
          src="./Component/LogoNearbyOficial.svg"
          width="45"
          height="45"
          className="d-inline-block align-top"
        />{' '}
        Nearby
    </Navbar>
    )
  }
}
export default NavbarNearby;
