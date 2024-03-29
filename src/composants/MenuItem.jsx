import React from "react";
import { useState } from "react";

function MenuItem({foodName, foodImage, foodDescription, foodPrice, foodFav}) {
  
  //create a state isFavorite that has the inital value of isFavorite that comes from the props
  
  const [feedFav, setFeedFav] = useState(foodFav);
  const handleclickfoodfav= () => {setFeedFav(!feedFav)};
 
  return (
    <section className="itemContainer">
      <figure className="imgContainer">
        {/* the image will receive the url src from the props */}
        <img src={foodImage} alt={foodName} />
        <figcaption>
          
          <h2>{foodName}</h2>
          {/* the p will receive the item description from the props */}
          <p>{foodDescription}</p>
        </figcaption>
      </figure>
      {/* the span will receive the item price from the props */}
      <div className="priceContainer">
              <span className="foodPrice">{foodPrice} EUR</span>

      {/* the button to play with the isFavorite state:
              - onClick, will toggle the isFavorite state,
              - content will be conditionally rendered as "❤️" or "🖤", depending on the value of isFavorite
          */}
       
      <button className="colorButton" onClick={handleclickfoodfav}> {feedFav ? "❤️" : "🖤"}</button>
      </div>
      
    </section>
  );
}

export default MenuItem;


/* onClick -> handleClickFavorite -> true?->false else true 
handleClickFavorite()=> foodFav? false : true

*/