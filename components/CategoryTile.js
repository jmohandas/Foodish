import { View, StyleSheet, Text, Dimensions, Pressable } from 'react-native';

const ScreenWidth = Dimensions.get('window').width;

const CategoryTile = ({item}) => {
    return (
        <View style={ [ styles.wrapperContainer, { backgroundColor: item.color }] }>
            <Pressable onPress={() => { console.log("Pressed - " + item.id) }} android_ripple={{ color: "#ccc" }}>
                <View style={ styles.innerView }>
                    <Text style={ styles.titleText }>{ item.title }</Text>
                </View>
            </Pressable>
        </View>
    )
};

const styles = StyleSheet.create({
    wrapperContainer: {
        width: ScreenWidth * 0.4,
        height: ScreenWidth * 0.4,
        margin: ScreenWidth * 0.04,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOpacity: 0.45,
        shadowRadius: 8,
        shadowOffset: { width: 2, height: 4 },
        elevation: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    innerView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: ScreenWidth * 0.4,
        height: ScreenWidth * 0.4,
    },
    titleText: {
        fontSize: 16,
        fontWeight: 'bold'
    }
});

export default CategoryTile;