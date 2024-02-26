import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoriesListScreen from './screens/CategoriesListScreen';
import MealsListScreen from './screens/MealsListScreen'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
            headerStyle: { backgroundColor: '#301401' },
            headerTintColor: 'white',
            contentStyle: {backgroundColor: '#3f2f25'}
        }}>
          <Stack.Screen 
            name='CategoriesList' 
            component={CategoriesListScreen} 
            options={{ 
              title: 'Categories'
            }} />
          <Stack.Screen 
            name='MealsList' 
            component={MealsListScreen} 
            options={{ 
              title: 'Meals' 
            }} />
      </Stack.Navigator> 
    </NavigationContainer>
  );
}
