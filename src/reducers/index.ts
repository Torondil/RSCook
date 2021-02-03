import { combineReducers } from 'redux';

import recipes from '@/reducers/favorite';

const rootReducer = combineReducers({ recipes });

export default rootReducer;
