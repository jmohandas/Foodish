import { View, StyleSheet, Text } from 'react-native';

const MealsListScreen = ({ route }) => {
    const catId = route.params.catId;

    return (
        <View style={ styles.mealsListContainer }>
            <Text>Meals List here - {catId}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    mealsListContainer: {
        flex: 1
    }
})

export default MealsListScreen;