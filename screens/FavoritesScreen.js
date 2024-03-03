import { useContext } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { MEALS } from '../data/dummyData';
import { FavoriteContext } from '../store/context/FavoritesContext';
import MealListElement from '../components/MealListElement';

const FavoritesScreen = () => {
    const favoritesContext = useContext(FavoriteContext);
    const favoriteMealIds = favoritesContext.ids;
    const fiteteredFavoriteMeals = MEALS.filter((eachMeal => favoriteMealIds.includes(eachMeal.id)));

    const renderMealsList = ({ item }) => {
        return <MealListElement item={ item } />
    };

    return (
        <View style={ styles.mainContainer }>
            <FlatList 
                data={ fiteteredFavoriteMeals }
                renderItem={ renderMealsList }
                keyExtractor={ item => item.id }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    }
});

export default FavoritesScreen;