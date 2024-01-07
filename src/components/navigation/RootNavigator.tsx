import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LatestUpdates from "../templates/LatestUpdates/LatestUpdates";
import MangaDetails from "../templates/MangaDetails/MangaDetails";
import { HeaderStyles, BottomTabs } from "../styles";
import { Book } from "iconoir-react-native";

const RootNavigator: React.FC = () => {
  const Tab = createBottomTabNavigator();
  const Stack = createStackNavigator();
  const options = {
    headerStyle: HeaderStyles.container,
    headerTintColor: HeaderStyles.backArrow.color,
    headerTitleStyle: HeaderStyles.title,
    tabBarStyle: BottomTabs.container,
  };

  const Home = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Latest Updates"
          component={LatestUpdates}
          options={{
            ...options,
            tabBarIcon: ({ color, size }) => (
              <Book color={color} width={size} height={size} />
            ),
          }}
        />
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
      <Stack.Screen name="Manga" component={MangaDetails} options={{...options, headerTitle: ''}} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
