import { View, StyleSheet, Text, FlatList } from 'react-native';
import MealListElement from '../components/MealListElement';

import { MEALS } from '../data/dummyData'

const MealsListScreen = ({ route }) => {
    const catId = route.params.catId;
    const filteredMeals = MEALS.filter(eachMeal => eachMeal.categoryIds.includes(catId))

    const renderMealsList = ({ item }) => {
        return <MealListElement item={ item } />
    };

    return (
        <View style={ styles.mealsListContainer }>
            <FlatList 
                data={ filteredMeals }
                renderItem={ renderMealsList }
                keyExtractor={ item => item.id }
            />
        </View>
    )
};

const styles = StyleSheet.create({
    mealsListContainer: {
        flex: 1
    }
})

export default MealsListScreen;