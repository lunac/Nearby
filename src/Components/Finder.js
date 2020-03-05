import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image'
import peopleEating from '../Assets/peopleEating.png'


class Finder extends React.Component{
  render(){
    return(
        <div>
        
     <Image  src= {peopleEating} fluid />
     
     </div>
    
    )
  }
}
export default Finder;
