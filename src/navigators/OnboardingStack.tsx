import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { OnboardingStackParamList } from "../types/navigation";
import GetStartedScreen from "../screens/GetStartedScreen";
import OnboardingStep1Screen from "../screens/OnboardingStep1Screen";
import OnboardingStep2Screen from "../screens/OnboardingStep2Screen";

const Stack = createNativeStackNavigator<OnboardingStackParamList>();

const OnboardingStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="GetStarted" component={GetStartedScreen} />
      <Stack.Screen name="OnboardingStep1" component={OnboardingStep1Screen} />
      <Stack.Screen name="OnboardingStep2" component={OnboardingStep2Screen} />
    </Stack.Navigator>
  );
};

export default OnboardingStack;
