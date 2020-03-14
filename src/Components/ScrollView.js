import React from 'react'
// estos componentes son muy basicos porque sirven de template.
import Image from "react-bootstrap/Image";
// y si usas https://material-ui.com/components/grid/ ?
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
