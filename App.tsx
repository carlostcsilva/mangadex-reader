import "react-native-url-polyfill/auto";
import "react-native-gesture-handler";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RootNavigator from "./src/components/navigation/RootNavigator";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
