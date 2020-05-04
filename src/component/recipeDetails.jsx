import React, { Component } from 'react';

class RecipeDetails extends Component {
  
    render() {
        const { recipe } = this.props;
        return (
            <div>
                <a href={recipe.recipe.url}>
    <h3 key={recipe.recipe.label}>{recipe.recipe.label}</h3>
    </a>
            </div>
        );
    }
}
export default RecipeDetails;