import {createStackNavigator, createAppContainer} from 'react-navigation';

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryRecipesScreen from "../screens/CategoryRecipesScreen";
import RecipeScreen from "../screens/RecipeScreen";

const RecipeNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoryRecipes: CategoryRecipesScreen,
    Recipe: RecipeScreen
});

export default createAppContainer(RecipeNavigator);