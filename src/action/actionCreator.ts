import { CHANGE_THEME, ADD_RECIPE, REMOVE_RECIPE } from '@/constants/index';

type Theme = {
  type: string;
  theme: boolean;
};

type Recipe = {
  type: string;
  id: number;
  image?: string;
  title?: string;
};

export const changeTheme = (theme: boolean): Theme => ({
  type: CHANGE_THEME,
  theme,
});

export const addRecipe = (id: number, image: string, title: string): Recipe => ({
  type: ADD_RECIPE,
  id,
  image,
  title,
});

export const removeRecipe = (id: number): Recipe => ({
  type: REMOVE_RECIPE,
  id,
});
