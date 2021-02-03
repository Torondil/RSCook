import { ADD_RECIPE, REMOVE_RECIPE } from '@/constants/index';
import { load } from 'redux-localstorage-simple';

type Recipe = {
  type?: string;
  id: number;
  image?: string;
  title?: string;
};

// type STORAGE = {
//   colorTheme: boolean;
//   recipes: Recipe;
// };

let STORAGE: any = load({ namespace: 'recipes-list' });

if (!STORAGE || !STORAGE.recipes || !STORAGE.recipes.length) {
  STORAGE = {
    recipes: [],
  };
}

const qwerty: Array<Recipe> = STORAGE.recipes;

const recipes = (state = STORAGE.recipes, { type, id, image, title }: Recipe): Array<Recipe> => {
  switch (type) {
    case ADD_RECIPE:
      return [
        ...state, {
          id,
          image,
          title,
        },
      ];
    case REMOVE_RECIPE:
      return [...state].filter((recipe: Recipe) => recipe.id !== id);
    default:
      return state;
  }
};

export default recipes;
