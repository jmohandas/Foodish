import { StyleSheet, View, Text } from "react-native";

const IngredientsSection = ({ item }) => {
    return (
        <View style={styles.ingredientsContainer}>
            <Text style={styles.ingredientHeading}>Ingredients : </Text>
            <View style={styles.ingredientsList}>
                {
                    item.ingredients.map((eachIngredient, index) => {
                        return <Text style={styles.eachIngedient} key={index + 1}>{index + 1}. {eachIngredient}</Text>
                    })
                }
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    ingredientsContainer: {
        flex: 1,
        margin: 5,
        padding: 10,
    },
    ingredientHeading: {
        fontSize: 20,
        fontWeight: '800'
    },
    ingredientsList: {
        marginTop: 10,
        padding: 10,
    },
    eachIngedient: {
        fontSize: 16,
        fontWeight: '500',
        paddingBottom: 15
    }
});

export default IngredientsSection;