import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons"; 
import HomeScreen from "./components/screens/HomeScreen";
import MarketScreen from "./components/screens/MarketScreen";
import ProfileScreen from "./components/screens/ProfileScreen";
import LoginScreen from "./components/screens/LoginScreen";
import SettingsScreen from "./components/screens/SettingsScreen";
import ShopcartScreen from "./components/screens/ShopcartScreen";
import { UserProvider } from "./components/Api/Usercontext";

const Tab = createBottomTabNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <UserProvider>
      <NavigationContainer>
        {!isLoggedIn ? (
          <LoginScreen statesLogin={() => setIsLoggedIn(true)} />
        ) : (
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                
                switch (route.name) {
                  case "Home":
                    iconName = focused ? "home" : "home-outline";
                    break;
                  case "Profile":
                    iconName = focused ? "person" : "person-outline";
                    break;
                  case "Mercado":
                    iconName = focused ? "cart" : "cart-outline";
                    break;
                  case "Settings":
                    iconName = focused ? "settings" : "settings-outline";
                    break;
                  case "ShopCart":
                    iconName = focused ? "basket" : "basket-outline";
                    break;
                  default:
                    iconName = "ellipse-outline";
                }

                
                return <Icon name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: "#007AFF", 
              tabBarInactiveTintColor: "gray", 
              tabBarStyle: {
                backgroundColor: "#d3f4ff",
              },
              headerStyle: {
                backgroundColor: "#d3f4ff",
              },
            })}
          >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
            <Tab.Screen name="Mercado" component={MarketScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
            <Tab.Screen name="ShopCart" component={ShopcartScreen} />
          </Tab.Navigator>
        )}
      </NavigationContainer>
    </UserProvider>
  );
}
