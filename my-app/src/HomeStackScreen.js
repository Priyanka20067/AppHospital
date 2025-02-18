import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./HomeScreen"; 
import ServicesScreen from "./ServicesScreen";
import CategoriesPage from "./CategoriesPage";
import DoctorList from "./DoctorList";

const HomeStack = createStackNavigator();

export default function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ headerShown: false }}  
      />
      <HomeStack.Screen 
        name="Categories" 
        component={CategoriesPage} 
        options={{  headerShown: false}}  
      />
      <HomeStack.Screen 
        name="Services" 
        component={ServicesScreen} 
        options={{  headerShown: false}}  
      />
      <HomeStack.Screen 
        name="DoctorList" 
        component={DoctorList} 
        options={{  headerShown: false}}  
      />
    </HomeStack.Navigator>
  );
}
