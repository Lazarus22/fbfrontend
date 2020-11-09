import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './styles.css';

function App() {

  const [ingredients, setIngredients] = useState([]);

  const fetchData = async () => {
    let response = await axios.get(
      'http://localhost:3000/ingredients'
    );
    setIngredients(response.data)
  };


 const listOut  = (list) => {
    return list.map(el=><li onClick= {() => {clickHandler()}}> {el.follower.name}</li>)
  }

  const clickHandler = (id) => {
    let newArray = [...this.state.setIngredients]
    let foundObj = newArray.find(ingredientObj => ingredientObj.id === id)
    this.useState({ setIngredients: newArray })
  }


  return (
    <div className="App">
      <h1>Ingredients</h1>
      <h2>A list of ingredients</h2>

      {/* Fetch data from API */}
      <div>
        <button className="fetch-button" onClick={fetchData}>
          Fetch Data
        </button>
        <br />
      </div>


      {/* Display data from API */}
      <div className="ingredients">
        {ingredients &&
          ingredients.map((ingredient, index) => {
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
          })}
      </div>

  
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);


