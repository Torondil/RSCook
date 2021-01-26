import React from 'react';
import RecipeCategories from './RecipeCategories';
import ButtonSearch from '../Main/ButtonSearch';

const Recipes = () : JSX.Element => {
  return (
    <div className="recipes">
      <h2>Recipes</h2>
      <RecipeCategories />
      <ButtonSearch />
    </div>  
  )
};
export default Recipes;