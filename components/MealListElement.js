import { View, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MealHeroSection from './mealPlan/MealHeroSection';

const MealListElement = ({item}) => {
    const navigation = useNavigation();
    const navigateToMealPlan = (id) => {
        navigation.navigate('MealPlan', {
            mealId: id
        });
    };

    return (
        <View style={ styles.mealElementContainer }>
            <Pressable onPress={() => { navigateToMealPlan(item.id); }} style={({pressed}) => pressed && {opacity: 0.65}}>
                <MealHeroSection item = {item} />
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    mealElementContainer: {
        Flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default MealListElement;