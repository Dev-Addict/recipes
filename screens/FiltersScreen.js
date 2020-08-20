import React, {useState, useEffect, useCallback} from 'react';
import {StyleSheet, View, Text, Switch} from 'react-native';
import {HeaderButtons, Item} from "react-navigation-header-buttons";

import HeaderButton from '../components/HeaderButton';

const FiltersScreen = ({navigation: {setParams}}) => {
    const [isGlutenFree, setGlutenFree] = useState('false');
    const [isVegan, setVegan] = useState('false');
    const [isVegetarian, setVegetarian] = useState('false');
    const [isLactoseFree, setLactoseFree] = useState('false');

    const saveFilters = useCallback(() => ({
        glutenFree: isGlutenFree,
        vegan: isVegan,
        vegetarian: isVegetarian,
        lactoseFree: isLactoseFree
    }), [isGlutenFree, isVegan, isVegetarian, isLactoseFree]);

    useEffect(() => {
        setParams({
            save: saveFilters
        });
    }, [saveFilters]);

    const FilterSwitch = ({text, value, setValue}) => (
        <View style={styles.filterItem}>
            <Text>{text}</Text>
            <Switch value={value} onValueChange={setValue} trackColor={{true: '#9980FA', false: '#D6A2E8'}}
                    thumbColor="#0fbcf9"/>
        </View>
    );

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Available Filters</Text>
            <View style={styles.filterContainer}>
                <FilterSwitch text="Gluten Free" value={isGlutenFree} setValue={setGlutenFree}/>
                <FilterSwitch text="Gluten Free" value={isVegan} setValue={setVegan}/>
                <FilterSwitch text="Gluten Free" value={isVegetarian} setValue={setVegetarian}/>
                <FilterSwitch text="Gluten Free" value={isLactoseFree} setValue={setLactoseFree}/>
            </View>
        </View>
    );
};

FiltersScreen.navigationOptions = ({navigation: {toggleDrawer, getParam}}) => ({
    headerTitle: 'Filters',
    headerStyle: {
        backgroundColor: '#ff6b81'
    },
    headerTintColor: '#f5f6f7',
    headerLeft: (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title="menu" iconName="ios-menu" onPress={() => toggleDrawer()}/>
        </HeaderButtons>
    ),
    headerRight: (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title="menu" iconName="md-save" onPress={() => getParam('save')}/>
        </HeaderButtons>
    )
});

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10
    },
    title: {
        fontSize: 24,
        fontFamily: 'libre-baskerville',
        marginBottom: 15
    },
    filterContainer: {
        padding: 10,
        alignItems: 'center'
    },
    filterItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%'
    }
});

export default FiltersScreen;