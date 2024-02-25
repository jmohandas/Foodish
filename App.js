import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoriesListScreen from './screens/CategoriesListScreen';
import MealsListScreen from './screens/MealsListScreen'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='CategoriesList' component={CategoriesListScreen}/>
        <Stack.Screen name='MealsList' component={MealsListScreen}/>
      </Stack.Navigator> 
    </NavigationContainer>
  );
}
