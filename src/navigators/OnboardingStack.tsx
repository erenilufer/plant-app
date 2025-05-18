import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { OnboardingStackParamList, Screens } from "../types/navigation";
import GetStartedScreen from "../screens/Onboarding/GetStartedScreen";
import PlantCareGuidesScreen from "../screens/Onboarding/PlantCareGuidesScreen";
import PlantIdentificationScreen from "../screens/Onboarding/PlantIdentificationScreen";

const Stack = createNativeStackNavigator<OnboardingStackParamList>();

const OnboardingStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={Screens.GetStarted} component={GetStartedScreen} />
      <Stack.Screen
        name={Screens.PlantIdentificationScreen}
        component={PlantIdentificationScreen}
      />
      <Stack.Screen
        name={Screens.PlantCareGuidesScreen}
        component={PlantCareGuidesScreen}
      />
    </Stack.Navigator>
  );
};

export default OnboardingStack;
