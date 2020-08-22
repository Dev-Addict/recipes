import {toggleFilterStateActionType} from "../actions/types";

const filtersReducer = (state = {
    isGlutenFree: false,
    isVegan: false,
    isVegetarian: false,
    isLactoseFree: false
}, action) => {
    if (action.type === toggleFilterStateActionType) {
        state[action.payload] = !state[action.payload];
        return state;
    }
    return state;
};

export default filtersReducer;