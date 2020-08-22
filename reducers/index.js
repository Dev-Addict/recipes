import {combineReucers} from 'redux';

import favoriteRecipesReducer from "./favoriteRecipesReducer";
import filtersReducer from "./filtersReducer"

export default combineReucers({
    favoriteRecipes: favoriteRecipesReducer,
    filters: filtersReducer
})