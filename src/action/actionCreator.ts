import { CHANGE_THEME, ADD_RECIPE, REMOVE_RECIPE } from '@/constants/index';

type Theme = {
  type: string;
  theme: boolean;
};

type Recipe = {
  type: string;
  id: number;
};

export const changeTheme = (theme: boolean): Theme => ({
  type: CHANGE_THEME,
  theme,
});

export const addRecipe = (id: number): Recipe => ({
  type: ADD_RECIPE,
  id,
});

export const removeRecipe = (id: number): Recipe => ({
  type: REMOVE_RECIPE,
  id,
});
