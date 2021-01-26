import { CHANGE_THEME } from '@/constants/index';

type Theme = {
  type: string;
  theme: boolean;
};

const changeTheme = (theme: boolean): Theme => ({
  type: CHANGE_THEME,
  theme,
});

export { changeTheme };
