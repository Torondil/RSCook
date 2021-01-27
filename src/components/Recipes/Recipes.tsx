import React from 'react';
import RecipeCategories from './RecipeCategories';
import ButtonSearch from '../Main/ButtonSearch';
import styles from './recipes.scss';

const Recipes = () : JSX.Element => {
  return (
    <div className={`${styles['recipes']}`} >
      <h2>Recipes</h2>
      <RecipeCategories />
      <ButtonSearch />
    </div>  
  );
};
export default Recipes;