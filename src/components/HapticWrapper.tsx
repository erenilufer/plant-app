import React, { ReactNode } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import * as Haptics from "expo-haptics";

interface HapticWrapperProps extends TouchableOpacityProps {
  children: ReactNode;
  hapticEnabled?: boolean;
  hapticType?: Haptics.ImpactFeedbackStyle;
  buttonStyle?: object;
}

const HapticWrapper = ({
  children,
  hapticEnabled = true,
  hapticType = Haptics.ImpactFeedbackStyle.Medium,
  buttonStyle,
  ...props
}: HapticWrapperProps) => {
  const triggerHaptic = () => {
    if (!hapticEnabled) return;

    switch (hapticType) {
      case "light":
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        break;
      case "medium":
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
        break;
      case "heavy":
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
      case "soft":
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Soft);
      case "rigid":
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Rigid);

        break;
    }
  };

  const handlePress = (event: any) => {
    triggerHaptic();
    props.onPress && props.onPress(event);
  };

  return (
    <TouchableOpacity
      style={[styles.button, buttonStyle]}
      activeOpacity={0.7}
      {...props}
      onPress={handlePress}
    >
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    overflow: "hidden",
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HapticWrapper;
