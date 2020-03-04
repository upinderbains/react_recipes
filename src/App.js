import React from 'react';

import './App.css';
import Header from './components/Header';
import Results from './components/Results';
import Recipe from './components/Recipe';


function App() {
  return (
    <div className='container'>
      <Header />
      <Results />
      <Recipe />
      
    </div>
  );
}

export default App;
