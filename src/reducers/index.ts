import { combineReducers } from 'redux';

import colorTheme from '@/reducers/colorTheme';
import recipes from '@/reducers/favorite';

const rootReducer = combineReducers({ colorTheme, recipes });

export default rootReducer;
