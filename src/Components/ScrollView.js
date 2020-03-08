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
        <Row>
          <Col>1 of 2</Col>
          <Col>2 of 2</Col>
        </Row>
        <Row>
          <Col>1 of 3</Col>
          <Col>2 of 3</Col>
          <Col>3 of 3</Col>
        </Row>
      </div>
    );
  }
}
export default ScrollView;
