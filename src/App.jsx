import React from 'react';
import './App.css';
import MenuList from './composants/MenuList'
import {foodItems} from './data/data';
console.log(foodItems);


const App = () => {
  return (
    <article>
      <h1>Wild Restaurant Menu</h1>
      <MenuList 
      foodItems={foodItems}/>
      {/* pass the variable foodItems as props to MenuList component */}
    </article>
  );
};

export default App;