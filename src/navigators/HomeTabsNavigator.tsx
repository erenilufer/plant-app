import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeTabsParamList } from "../types/navigation";
import HomeScreen from "../screens/HomeTabs/HomeScreen";
import ScanScreen from "../screens/HomeTabs/ScanScreen";
import MyGardenScreen from "../screens/HomeTabs/MyGardenScreen";
import DiagnoseScreen from "../screens/HomeTabs/DiagnoseScreen";
import ProfileScreen from "../screens/HomeTabs/ProfileScreen";
import { View, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import MyGardenIcon from "../components/ui/icons/MyGardenIcon";
import HomeIcon from "../components/ui/icons/HomeIcon";
import ProfileIcon from "../components/ui/icons/ProfileIcon";
import DiagnoseIcon from "../components/ui/icons/DiagnoseIcon";
import ScanIcon from "../components/ui/icons/ScanIcon";
import { HapticTab } from "../components/HapticTab";
import colors from "../constants/colors";
const Tab = createBottomTabNavigator<HomeTabsParamList>();

interface TabBarIconProps {
  name: string;
  color: string;
  focused: boolean;
}

const HomeTabsNavigator = () => {
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.iconInactive,
        tabBarStyle: {
          backgroundColor: colors.bgWhite,
          borderTopWidth: 0,
          height: 65 + insets.bottom,
          paddingBottom: insets.bottom,
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          elevation: 0,
          shadowOpacity: 0,
          borderTopColor: "transparent",
        },
        tabBarButton: HapticTab,
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "500",
        },
        animation: "fade",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, focused }) => <HomeIcon color={color} />,
        }}
      />
      <Tab.Screen
        name="Diagnose"
        component={DiagnoseScreen}
        options={{
          tabBarIcon: ({ color, focused }) => <DiagnoseIcon color={color} />,
        }}
      />
      <Tab.Screen
        name="Scan"
        component={ScanScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View style={styles.scanButton}>
              <ScanIcon color="#fff" />
            </View>
          ),
          tabBarLabel: () => null,
        }}
      />
      <Tab.Screen
        name="MyGarden"
        component={MyGardenScreen}
        options={{
          tabBarLabel: "My Garden",
          tabBarIcon: ({ color, focused }) => <MyGardenIcon color={color} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, focused }) => <ProfileIcon color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  iconContainerFocused: {
    backgroundColor: "#EFF7F1",
  },
  icon: {
    fontSize: 20,
  },
  scanButton: {
    width: 64,
    height: 64,
    borderRadius: 35,
    backgroundColor: "#28AF6E",
    justifyContent: "center",
    alignItems: "center",
    bottom: 12,
    shadowColor: "#000",
    borderWidth: 4,
    borderColor: "#FFFFFF3D",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default HomeTabsNavigator;
