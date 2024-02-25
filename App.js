import { StyleSheet, Text, View } from 'react-native';
import CategoriesListScreen from './screens/CategoriesListScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <CategoriesListScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
