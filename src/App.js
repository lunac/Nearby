import React from 'react'
import NavbarNearby from './Components/NavbarNearby';
import Finder from './Components/Finder';

class App extends React.Component{
  render(){
    return(
      <div>
         <NavbarNearby/>
         <Finder/>
         </div>
    )
  }
}
export default App;
