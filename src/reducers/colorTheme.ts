import { CHANGE_THEME } from '@/constants/index';

const defaultTheme = true;

type Theme = {
  type: string;
  theme: boolean;
};

const colorTheme = (state = defaultTheme, { type }: Theme): boolean => {
  switch (type) {
    case CHANGE_THEME:
      return !state;
      break;
    default:
      return state;
  }
};

export default colorTheme;
