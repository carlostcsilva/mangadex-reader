import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LatestUpdates from "../templates/LatestUpdates";
import { View } from "react-native";

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
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="Manga"
        component={() => <View style={{ flex: 1, backgroundColor: "red" }} />}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
