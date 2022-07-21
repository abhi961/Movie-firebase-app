import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../Screens/LoginScreen";
import SignupScreen from "../Screens/SignupScreen";
import Homescreen from "../Screens/Homescreen";
import Profilescreen from "../Screens/Profilescreen";
import Favourite from "../Screens/Favourite";
import Homeicon from "react-native-vector-icons/Ionicons";
import ProfileIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Favoriteicon from "react-native-vector-icons/MaterialIcons";
import Filterscreen from "../Screens/Filterscreen";
import ProductManger from "../Screens/ProductManger";
import Moviedetails from "../Screens/Moviedetails";
import Addminicon from "react-native-vector-icons/MaterialIcons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stackscreen = createStackNavigator();
const Tab = createBottomTabNavigator();
const FilterStack = createStackNavigator();

const FilterscreenS = () => {
  return (
    <FilterStack.Navigator>
      <FilterStack.Screen name="Filterscreen" component={Filterscreen} />
    </FilterStack.Navigator>
  );
};
const TabScreens = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: "#00001a" },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Homescreen}
        options={{
          tabBarIcon: () => <Homeicon name="home" size={25} color={"#fff"} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profilescreen}
        options={{
          tabBarIcon: () => (
            <ProfileIcon name="account" size={25} color={"#fff"} />
          ),
        }}
      />
      <Tab.Screen
        name="Favourite"
        component={Favourite}
        options={{
          tabBarIcon: () => (
            <Favoriteicon name="favorite" size={25} color={"#fff"} />
          ),
        }}
      />
      {/* <Tab.Screen
        name="Movie"
        component={MovieScreen}
        options={{
          tabBarIcon: () => (
            <Movieicon name="movie-roll" size={25} color={"#fff"} />
          ),
        }}
      /> */}
      <Tab.Screen
        name="Product-Manger"
        component={ProductManger}
        options={{
          tabBarIcon: () => (
            <Addminicon name="admin-panel-settings" size={25} color={"#fff"} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Route = () => {
  return (
    <NavigationContainer>
      <Stackscreen.Navigator initialRouteName="login">
        <Stackscreen.Screen
          name="login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stackscreen.Screen
          name="Signup"
          component={SignupScreen}
          options={{ headerShown: false }}
        />
        <Stackscreen.Screen
          name="Home"
          component={TabScreens}
          options={{ headerShown: false }}
        />
        <Stackscreen.Screen name="Moviedetails" component={Moviedetails} />
        <Stackscreen.Screen name="Filterscreen" component={FilterscreenS} />
      </Stackscreen.Navigator>
    </NavigationContainer>
  );
};

export default Route;
