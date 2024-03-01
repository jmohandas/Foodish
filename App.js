import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer'; 

import CategoriesListScreen from './screens/CategoriesListScreen';
import MealsListScreen from './screens/MealsListScreen'
import MealPlanScreen from './screens/MealPlanScreen';
import FavoritesScreen from './screens/FavoritesScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  const DrawerNavigations = () => {
    return (
      <Drawer.Navigator screenOptions={{
            headerStyle: { backgroundColor: '#301401' },
            headerTintColor: 'white',
            sceneContainerStyle: {backgroundColor: '#3f2f25'}
        }}>
        <Drawer.Screen name='CategoriesList' component={CategoriesListScreen} options={{ 
                title: 'Categories',
              }}/>
        <Drawer.Screen name='Favorites' component={FavoritesScreen} options={{ 
                title: 'Favorites',
              }}/>
      </Drawer.Navigator>
    );
  };

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
              name='DarwerNavigations' 
              component={DrawerNavigations} 
              options={{ 
                title: 'Categories',
                headerShown: false
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
