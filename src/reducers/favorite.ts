import { ADD_RECIPE, REMOVE_RECIPE } from '@/constants/index';
import { load } from 'redux-localstorage-simple';

type Recipe = {
  type?: string;
  id: number;
};

let STORAGE = load({ namespace: 'recipes-list' });

if (!STORAGE || !STORAGE.recipes || !STORAGE.recipes.length) {
  STORAGE = {
    recipes: [],
  };
}

const recipes = (state = STORAGE.recipes, { type, id }: Recipe): Array<Recipe> => {
  switch (type) {
    case ADD_RECIPE:
      return [
        ...state, {
          id,
        },
      ];
    case REMOVE_RECIPE:
      return [...state].filter((recipe: Recipe) => recipe.id !== id);
    default:
      return state;
  }
};

export default recipes;
