import React from 'react';
import './App.css';

import SearchContainer from './containers/SearchContainer';

import TabsContainer from './containers/TabsContainer'



function App(){
    return (
    <div className='App'>
      <header className='header'>
      <h3 className='title'>React Movies App</h3>
      </header>

      <SearchContainer/>
      <TabsContainer/>
      

     
      
      
     
    </div>
  )
    
}export default App;
