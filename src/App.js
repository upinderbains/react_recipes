import React from 'react';

import './App.css';
import Header from './components/Header';
import Results from './components/Results';
import Recipe from './components/Recipe';
import ShoppingList from './components/ShoppingList';
import Likes from './components/Likes';

function App() {
  return (
    <div className='container'>
      <Header />
      <Results />
      <Recipe />
      <ShoppingList />
    </div>
  );
}

export default App;
