import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import LatestUpdates from "../templates/LatestUpdates";

const RootNavigator: React.FC = () => {
  const Tab = createBottomTabNavigator();
  
  return (
    <Tab.Navigator>
      <Tab.Screen name="Latest Updates" component={LatestUpdates} />
    </Tab.Navigator>
  );
};

export default RootNavigator;
