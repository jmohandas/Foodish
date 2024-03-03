import { View, StyleSheet, ScrollView } from 'react-native';
import { useContext, useLayoutEffect  } from 'react';
import IngredientsSection from '../components/mealPlan/IngredientsSection';
import MealHeroSection from '../components/mealPlan/MealHeroSection';
import MealPrepStepsSection from '../components/mealPlan/MealPrepStepsSection';
import { MEALS } from '../data/dummyData'
import HeaderButton from '../components/HeaderButton';
import { FavoriteContext } from '../store/context/FavoritesContext';

const MealPlanScreen = ({ route, navigation }) => {
    const mealId = route.params.mealId;
    const mealPlan = MEALS.find(eachMeal => eachMeal.id === mealId);
    const favoritesContext = useContext(FavoriteContext);
    const isFavorite = favoritesContext.ids && favoritesContext.ids.includes(mealId);

    const onHeaderButtonPress = () => {
        if (isFavorite) {
            favoritesContext.removeFavorite(mealId);
        } else {
            favoritesContext.addFavorite(mealId)
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <HeaderButton isFavorite = {isFavorite} onPressAction = {onHeaderButtonPress}/>;
            }
        })
    }, [navigation, onHeaderButtonPress])

    return (
        <ScrollView>
            <View style={styles.mealPlanContainer}>
                <View style={styles.heroSection}>
                    <MealHeroSection item = {mealPlan} />
                </View>
                <IngredientsSection item = {mealPlan} />
                <MealPrepStepsSection item = {mealPlan} />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    mealPlanContainer: {
        flex: 1,
        backgroundColor: '#fff'
    },
    heroSection: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default MealPlanScreen;