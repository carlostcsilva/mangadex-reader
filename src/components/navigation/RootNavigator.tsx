import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LatestUpdates from "../templates/LatestUpdates/LatestUpdates";
import MangaDetails from "../templates/MangaDetails/MangaDetails";

const RootNavigator: React.FC = () => {
  const Tab = createBottomTabNavigator();
  const Stack = createStackNavigator();

  const Home = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Latest Updates" component={LatestUpdates} />
      </Tab.Navigator>
    );
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Manga" component={MangaDetails} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
