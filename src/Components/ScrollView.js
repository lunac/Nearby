import React from 'react'
import Image from "react-bootstrap/Image";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import backgroundList from '../Assets/backgroundList.png'


class ScrollView extends React.Component{
  render(){
    return (
      <div>
        <Image src={backgroundList} fluid />
       
      </div>
    );
  }
}
export default ScrollView;
