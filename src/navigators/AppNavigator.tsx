import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import routes from "../shared/routes";
import WelcomeScreen from "../screens/WelcomeScreen";

const AppStack = createNativeStackNavigator();

type AppNavigatorProps = {
  initialRouteName: string;
};

const AppNavigator = ({ initialRouteName }: AppNavigatorProps) => {
  return (
    <AppStack.Navigator initialRouteName={initialRouteName} screenOptions={{ headerShown: false }}>
      <AppStack.Screen name={routes.welcome} component={WelcomeScreen} options={{ animation: "fade" }} />
    </AppStack.Navigator>
  );
};

export default AppNavigator;
