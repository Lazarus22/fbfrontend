import React from "react";

const FoodCard = props => {
  return (
    <div className="ingredient" key={index}>
      <h2>{ingredient.name}</h2>
          <div className="details">
          <p>Name: {ingredient.name}</p>
          <p>Season: {ingredient.season}</p>
          <p>Taste: {ingredient.taste}</p>
          <p>Function: {ingredient.function}</p>
          <ul>Compatible: <br/>{listOut(ingredient.follower_follows)}</ul>
        </div>
      </div>
    );
};

export default FoodCard;