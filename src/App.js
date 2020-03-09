import React from 'react'
import NavbarNearby from './Components/NavbarNearby';
import Finder from './Components/Finder';
import ScrollView from './Components/ScrollView';
import Footer from "./Components/Footer";

class App extends React.Component{
  render(){
    return (
      <div>
        <NavbarNearby />
        <Finder />
        <ScrollView/>
        <Footer/>

      </div>
    );
  }
}
export default App;
