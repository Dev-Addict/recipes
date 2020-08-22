import {combineReducers} from 'redux';

import favoriteRecipesReducer from "./favoriteRecipesReducer";
import filtersReducer from "./filtersReducer"

export default combineReducers({
    favoriteRecipes: favoriteRecipesReducer,
    filters: filtersReducer
})