import React from 'react';
import MenuItem from './MenuItem'


function MenuList({ foodItems }) {
  console.log(foodItems);
  const item = foodItems.map((food) => (
    <MenuItem 
    foodName={food.foodName} 
    foodImage={food.foodImage} 
    foodDescription={food.description} 
    foodPrice={food.price} 
    foodFav={food.isFavorite}
    />
    //<h1>{food.itemName}</h1>
  )  
  )
  return (
      item
  );
}

export default MenuList;