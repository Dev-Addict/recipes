import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import * as Font from 'expo-font';
import {AppLoading} from "expo";
import {createStore} from "redux";
import {Provider} from "react-redux";

import RecipeNavigator from "./navigations/RecipesNavigator";
import reducers from './reducers';

const fetchFonts = () => {
    return Font.loadAsync({
        'libre-baskerville': require('./assets/fonts/libre-baskerville-regular.ttf'),
        'libre-baskerville-bold': require('./assets/fonts/libre-baskerville-bold.ttf'),
        'libre-baskerville-italic': require('./assets/fonts/libre-baskerville-italic.ttf')
    });
};

const store = createStore(reducers);

const App = () => {
    const [isLoaded, setLoaded] = useState(false);

    if (!isLoaded)
        return (
            <AppLoading startAsync={fetchFonts} onFinish={() => setLoaded(true)}/>
        );

    return (
        <Provider store={store}>
            <RecipeNavigator/>
        </Provider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#222'
    },
});

export default App;
