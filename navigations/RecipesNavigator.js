import {createStackNavigator, createAppContainer} from 'react-navigation';

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryRecipesScreen from "../screens/CategoryRecipesScreen";
import FavoriteRecipesScreen from "../screens/FavoriteRecipesScreen";
import FiltersScreen from "../screens/FiltersScreen";
import RecipeScreen from "../screens/RecipeScreen";

const RecipeNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoryRecipe: CategoryRecipesScreen,
    FavoriteRecipes: FavoriteRecipesScreen,
    FiltersScreen: FiltersScreen,
    Recipe: RecipeScreen
});

export default createAppContainer(RecipeNavigator);