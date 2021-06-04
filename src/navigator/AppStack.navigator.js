import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screen/HomeScreen';
import NewsDetails from '../screen/NewsDetailsScreen';



const NewsStack = createStackNavigator();


const AppStack = () => {

  return (
    <NavigationContainer>
      <NewsStack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: 'papayawhip',
        },
       
      }}
        initialRouteName={'MyNews'}>
        <NewsStack.Screen name="MyNews" component={HomeScreen} />
        <NewsStack.Screen name="Details" component={NewsDetails} />
      </NewsStack.Navigator>
    </NavigationContainer>);
  
}
export default AppStack;
