import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

export type RootStackParamList = {
  OnboardingStack: undefined;
  Paywall: undefined;
  HomeTabs: undefined;
};

export type OnboardingStackParamList = {
  GetStarted: undefined;
  PlantIdentificationScreen: undefined;
  PlantCareGuidesScreen: undefined;
};

export type HomeTabsParamList = {
  Home: undefined;
  Scan: undefined;
  MyGarden: undefined;
  Diagnose: undefined;
  Profile: undefined;
};

export type RootNavigationProp = NativeStackNavigationProp<RootStackParamList>;

export type OnboardingStackNavigationProp = NativeStackNavigationProp<
  OnboardingStackParamList
>;

export type HomeTabsNavigationProp = BottomTabNavigationProp<HomeTabsParamList>;

export enum Screens {
  GetStarted = "GetStarted",
  Paywall = "Paywall",
  PlantIdentificationScreen = "PlantIdentificationScreen",
  PlantCareGuidesScreen = "PlantCareGuidesScreen",
  Home = "Home",
  Scan = "Scan",
  MyGarden = "MyGarden",
  Diagnose = "Diagnose",
  Profile = "Profile",
  HomeTabs = "HomeTabs",
  OnboardingStack = "OnboardingStack",
}
