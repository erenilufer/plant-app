import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation";
import HomeTabsNavigator from "./HomeTabsNavigator";
import PaywallScreen from "../screens/PaywallScreen";
import OnboardingStack from "./OnboardingStack";

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="OnboardingStack" component={OnboardingStack} />
      <Stack.Screen name="Paywall" component={PaywallScreen} />
      <Stack.Screen name="HomeTabs" component={HomeTabsNavigator} />
    </Stack.Navigator>
  );
}

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}
