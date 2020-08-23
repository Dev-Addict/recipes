import React, {useState, useEffect, useCallback} from 'react';
import {StyleSheet, View, Text, Switch} from 'react-native';
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {useDispatch, useSelector} from "react-redux";

import HeaderButton from '../components/HeaderButton';
import {toggleFilterState} from "../actions";

const FiltersScreen = () => {
    const dispatch = useDispatch();
    
    const {isGlutenFree, isVegan, isVegetarian, isLactoseFree} = useSelector(({filters}) => filters);

    const FilterSwitch = ({text, value, filter}) => (
        <View style={styles.filterItem}>
            <Text>{text}</Text>
            <Switch value={value} onValueChange={() => {
                dispatch(toggleFilterState(filter));
            }} trackColor={{true: '#9980FA', false: '#D6A2E8'}}
                    thumbColor="#0fbcf9"/>
        </View>
    );

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Available Filters</Text>
            <View style={styles.filterContainer}>
                <FilterSwitch text="Gluten Free" value={isGlutenFree} filter="isGlutenFree"/>
                <FilterSwitch text="Vegan" value={isVegan} filter="isVegan"/>
                <FilterSwitch text="Vegetarian" value={isVegetarian} filter="isVegetarian"/>
                <FilterSwitch text="Lactose Free" value={isLactoseFree} filter="isLactoseFree"/>
            </View>
        </View>
    );
};

FiltersScreen.navigationOptions = ({navigation: {toggleDrawer}}) => ({
    headerTitle: 'Filters',
    headerStyle: {
        backgroundColor: '#ff6b81'
    },
    headerTintColor: '#f5f6f7',
    headerLeft: (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title="menu" iconName="ios-menu" onPress={() => toggleDrawer()}/>
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