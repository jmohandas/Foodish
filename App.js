import CategoriesListScreen from './screens/CategoriesListScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='CategoriesList' component={CategoriesListScreen}/>
      </Stack.Navigator> 
    </NavigationContainer>
  );
}
