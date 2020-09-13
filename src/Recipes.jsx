import React, { Component } from "react";
import Axios from "axios";
import RecipeDetails from "./component/recipeDetails";

class Recipes extends Component {
  state = {
    userSearch: "",
    recipe: [],
  };

  // https://medium.com/@tomkadwill/submitting-a-form-in-react-876f919d338a
  // e.preventdefault is necessary so page doesn't refresh everytime we enter.
  handleSubmit(e) {
    e.preventDefault();
    Axios.get(
      `https://api.edamam.com/search?q=${this.state.userSearch}&app_id=c2f8a963&app_key=50a9c5d1f171508f80243bee7cd4734c`
    )
      .then((response) => {
        console.log(response);
        this.setState({ recipe: response.data.hits });
      }, this.renderRecipes)
      .catch((err) => {
        console.log(err);
      });
  }
  // for line 19. response.data.hits refers to the exact route to the recipes.
  // https://developer.mozilla.org/en-US/docs/Web/API/Event/target for lines 28-31

  handleChange(e) {
    console.log(e.target.value);
    this.setState({
      userSearch: e.target.value,
    });
  }
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
  // map creates a new array and lists them with <h> tags.
  renderRecipes() {
    return this.state.recipe.map((eachRecipe) => {
      console.log(eachRecipe.recipe.label);
      return (
        <RecipeDetails recipe={eachRecipe} />
        // <a href={eachRecipe.recipe.url}>
        // <h3 key={eachRecipe.recipe.label}>{eachRecipe.recipe.label}</h3>
        // </a>
      );
    });
  }

  render() {
    return (
      <div className="Nutrition">
        <h2 style={{ fontWeight: "bold", textAlign: "center" }}>Recipes</h2>
        <form
          onSubmit={(e) => this.handleSubmit(e)}
          style={{ textAlign: "center", padding: "10px" }}
        >
          <input
            name="search"
            placeholder="Find Recipe"
            onChange={(e) => this.handleChange(e)}
            style={{ textAlign: "center" }}
          />
          <button
            style={{
              margin: "10px",
              borderRadius: "5px",
              backgroundColor: "#2BBBAD",
              color: "white",
            }}
          >
            Search Recipe
          </button>
        </form>
        {this.renderRecipes()}
      </div>
    );
  }
}

export default Recipes;
{
  /* <img style={{height:'100vh', width:'100vw'}} src='/images/nutritionphoto.jpg' alt='fruits'/> */
}
