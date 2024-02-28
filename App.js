import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoriesListScreen from './screens/CategoriesListScreen';
import MealsListScreen from './screens/MealsListScreen'
import MealPlanScreen from './screens/MealPlanScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style='light' />
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
            <Stack.Screen 
              name='MealPlan' 
              component={MealPlanScreen} 
              options={{ 
                title: 'Meal Recipe'
              }} />
        </Stack.Navigator> 
      </NavigationContainer>
    </>
  );
}
