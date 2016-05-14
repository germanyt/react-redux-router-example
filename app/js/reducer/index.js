import {combineReducers} from 'redux';

import {Blog} from './blog.reducer';
import {User} from './user.reducer';

export default combineReducers({User, Blog});