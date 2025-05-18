import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList, Screens } from "../types/navigation";
import HomeTabsNavigator from "./HomeTabsNavigator";
import PaywallScreen from "../screens/Paywall/PaywallScreen";
import OnboardingStack from "./OnboardingStack";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootStack() {
  const { isCompleted } = useSelector((state: RootState) => state.onboarding);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!isCompleted && (
        <Stack.Screen
          name={Screens.OnboardingStack}
          component={OnboardingStack}
        />
      )}
      <Stack.Screen name={Screens.HomeTabs} component={HomeTabsNavigator} />
      <Stack.Screen name={Screens.Paywall} component={PaywallScreen} />
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
