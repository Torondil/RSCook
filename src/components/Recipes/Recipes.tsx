import React from 'react';
import RecipeCategories from './RecipeCategories';
import { Button } from 'react-bootstrap';


const Recipes = () : JSX.Element => {
  return (
    <div className='py-4 d-flex align-items-center flex-column' >
      <h2 className="theme-title">Recipes</h2>
      <RecipeCategories />
      <Button className="theme-button mt-5 mb-3" variant="primary">Search inspiration</Button>
    </div>
  );
};
export default Recipes;
