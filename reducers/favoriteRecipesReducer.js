import {addRecipeToFavoritesActionType, removeRecipeFromFavoritesActionType} from "../actions/types";

const favoriteRecipesReducer = (state = [], action) => {
    if (action.type === addRecipeToFavoritesActionType)
        return [action.payload, ...state];
    if (action.type === removeRecipeFromFavoritesActionType)
        return state.filter(v => v !== action.payload);
    return state;
};

export default favoriteRecipesReducer;