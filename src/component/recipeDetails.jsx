import React, { Component } from "react";

class RecipeDetails extends Component {
  render() {
    const { recipe } = this.props;
    return (
      <div>
        <a href={recipe.recipe.url}>
          <h3 key={recipe.recipe.label} style={{ color: "black" }}>
            {recipe.recipe.label}
          </h3>
        </a>
      </div>
    );
  }
}
export default RecipeDetails;
