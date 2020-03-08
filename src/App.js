import React from 'react'
import NavbarNearby from './Components/NavbarNearby';
import Finder from './Components/Finder';
import ScrollView from './Components/ScrollView';

class App extends React.Component{
  render(){
    return (
      <div>
        <NavbarNearby />
        <Finder />
        <ScrollView/>

      </div>
    );
  }
}
export default App;
