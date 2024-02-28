import { StyleSheet, View, Text} from 'react-native';

const MealPrepStepsSection = ({ item }) => {
    return (
        <View style={styles.mealPrepStepsContainer}>
            <Text style={styles.mealStepHeading}>Preperation Procedure : </Text>
            <View style={styles.mealStepsList}>
                {
                    item.steps.map((eachStepText, index) => {
                        return <Text style={styles.eachStep} key={index + 1}>{index + 1}. {eachStepText}</Text>
                    })
                }
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    mealPrepStepsContainer: {
        flex: 1,
        marginBottom: 5,
        paddingHorizontal: 10,
    },
    mealStepHeading: {
        fontSize: 20,
        fontWeight: '800'
    },
    mealStepsList: {
        marginTop: 10,
        padding: 10,
    },
    eachStep: {
        fontSize: 16,
        fontWeight: '500',
        paddingBottom: 15
    }
});

export default MealPrepStepsSection;