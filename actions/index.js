import {
    addRecipeToFavoritesActionType,
    removeRecipeFromFavoritesActionType,
    toggleFilterStateActionType
} from "./types";

export const addRecipeToFavorites = recipeId => (
    {
        type: addRecipeToFavoritesActionType,
        payload: recipeId
    }
);

export const removeRecipeFromFavorites = recipeId => (
    {
        type: removeRecipeFromFavoritesActionType,
        payload: recipeId
    }
);

export const toggleFilterState = filter => (
    {
        type: toggleFilterStateActionType,
        payload: filter
    }
);