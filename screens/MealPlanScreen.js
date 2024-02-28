import { View, StyleSheet, ScrollView } from 'react-native';
import { useLayoutEffect  } from 'react';
import IngredientsSection from '../components/mealPlan/IngredientsSection';
import MealHeroSection from '../components/mealPlan/MealHeroSection';
import MealPrepStepsSection from '../components/mealPlan/MealPrepStepsSection';
import { MEALS } from '../data/dummyData'
import HeaderButton from '../components/HeaderButton';

const MealPlanScreen = ({ route, navigation }) => {
    const mealId = route.params.mealId;
    const mealPlan = MEALS.find(eachMeal => eachMeal.id === mealId);

    const onHeaderButtonPress = () => {
        console.log('Header Button Pressed!');
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <HeaderButton onPressAction = {onHeaderButtonPress}/>;
            }
        })
    }, [navigation])

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